<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "reactdb"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Get owner_id and product_id from the request
$owner_id = isset($_GET['owner_id']) ? intval($_GET['owner_id']) : 0;
$product_id = isset($_GET['product_id']) ? intval($_GET['product_id']) : 0;

if ($owner_id > 0 && $product_id > 0) {
    // Query to check if the owner owns the product
    $sql = "SELECT * FROM tbl_product_owner WHERE product_owner_id = ? AND product_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ii', $owner_id, $product_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["success" => true, "ownsProduct" => true]);
    } else {
        echo json_encode(["success" => true, "ownsProduct" => false]);
    }
    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid owner_id or product_id"]);
}

// Close the connection
$conn->close();
?>