<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);
$product_owner_id = $data['product_owner_id'];
$product_id = $data['product_id'];

$stmt = $conn->prepare("INSERT INTO tbl_product_owner (product_owner_id, product_id) VALUES (?, ?)");
$stmt->bind_param("ii", $product_owner_id, $product_id);
if ($stmt->execute()) {
    echo json_encode(['message' => 'Product owner link created successfully!', 'success' => true]);
} else {
    echo json_encode(['message' => 'Failed to create product owner link: ' . $stmt->error, 'success' => false]);
}

$stmt->close();
$conn->close();
?>