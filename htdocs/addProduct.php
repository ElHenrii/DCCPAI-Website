<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"), true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

$conn->begin_transaction();

try {
    // Step 1: Handle new category creation, if needed
    if ($data['is_new_category']) {
        // Insert the new category into tbl_category
        $stmt = $conn->prepare("INSERT INTO tbl_category (product_category, product_isCacao) VALUES (?, ?)");
        if (!$stmt) {
            throw new Exception("Error preparing statement: " . $conn->error);
        }

        $stmt->bind_param("si", $data['new_category_name'], $data['isCacaoProduct']);
        if (!$stmt->execute()) {
            throw new Exception("Error executing statement: " . $stmt->error);
        }

        // Retrieve the ID of the newly created category
        $category_id = $stmt->insert_id;
        $stmt->close();
    } else {
        // Use the existing category ID
        $category_id = $data['category_id'];
    }

    // Step 2: Insert product into tbl_product
    $stmt = $conn->prepare("INSERT INTO tbl_product (product_name, product_description, product_price, category_id, display, available, product_deleted) VALUES (?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Error preparing statement: " . $conn->error);
    }

    $stmt->bind_param("ssdiiib", 
        $data['product_name'], 
        $data['product_description'], 
        $data['product_price'], 
        $category_id, // Now correctly using the category ID (new or existing)
        $data['display'], 
        $data['available'], 
        $data['product_deleted']
    );

    if (!$stmt->execute()) {
        throw new Exception("Error executing statement: " . $stmt->error);
    }

    $product_id = $stmt->insert_id;
    $stmt->close();

    // Step 3: Insert into tbl_product_owner (Associating the product with the owner)
    $stmt = $conn->prepare("INSERT INTO tbl_product_owner (product_owner_id, product_id) VALUES (?, ?)");
    if (!$stmt) {
        throw new Exception("Error preparing statement: " . $conn->error);
    }

    $stmt->bind_param("ii", $data['product_owner_id'], $product_id);
    if (!$stmt->execute()) {
        throw new Exception("Error executing statement: " . $stmt->error);
    }
    $stmt->close();

    $conn->commit();
    echo json_encode(["message" => "Product added successfully!", "success" => true, "product_id" => $product_id]);

} catch (Exception $e) {
    $conn->rollback();
    echo json_encode(["message" => $e->getMessage(), "success" => false]);
}

$conn->close();
?>