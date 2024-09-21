<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

// Check if product_id is provided
if (!isset($data['product_id'])) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Missing product_id", "success" => false]);
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error, "success" => false]));
}

// Use the correct column name for the primary key
// Assuming product_deleted is a BOOLEAN or TINYINT field, use 1 for true
$stmt = $conn->prepare("UPDATE tbl_product SET product_deleted = 1 WHERE product_id = ?");
if (!$stmt) {
    http_response_code(500); // Internal Server Error
    die(json_encode(["message" => "Error preparing statement: " . $conn->error, "success" => false]));
}

$stmt->bind_param("i", $data['product_id']);

if ($stmt->execute()) {
    http_response_code(200); // Success
    echo json_encode(["message" => "Product deleted successfully!", "success" => true]);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(["message" => "Error executing statement: " . $stmt->error, "success" => false]);
}

$stmt->close();
$conn->close();
?>