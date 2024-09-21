<?php
header("Access-Control-Allow-Origin: *"); // Be cautious with *, better to specify the exact domain in production
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Database connection details
$host = "localhost";
$username = "root";
$password = "";
$database = "reactdb";

// Establish the database connection
$conn = new mysqli($host, $username, $password, $database);

// Check the database connection
if ($conn->connect_error) {
    echo json_encode(["error" => $conn->connect_error]);
    exit();
}

// Read the product_owner_id from GET request
$product_owner_id = isset($_GET['product_owner_id']) ? $_GET['product_owner_id'] : '';

// SQL query to fetch product_ids by product_owner_id
$sql = "SELECT product_id FROM tbl_product_owner WHERE product_owner_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $product_owner_id); // 'i' specifies the variable type => 'integer'

if ($stmt->execute()) {
    $result = $stmt->get_result();
    $product_ids = [];
    while ($row = $result->fetch_assoc()) {
        $product_ids[] = $row['product_id'];
    }
    echo json_encode($product_ids);
} else {
    echo json_encode(["error" => "Query failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>