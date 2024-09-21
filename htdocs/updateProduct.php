<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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

// Prepare the SQL statement to update all fields, including available and display
$stmt = $conn->prepare("
    UPDATE tbl_product 
    SET product_name = ?, product_description = ?, product_price = ?, available = ?, display = ? 
    WHERE product_id = ?
");

if (!$stmt) {
    die(json_encode(["message" => "Error preparing statement: " . $conn->error]));
}

// Bind the parameters to the SQL statement
$stmt->bind_param("ssdiis", 
    $data['product_name'], 
    $data['product_description'], 
    $data['product_price'], 
    $data['product_available'],  // Bind available field
    $data['product_display'],    // Bind display field
    $data['product_id']
);

if ($stmt->execute()) {
    echo json_encode(["message" => "Product updated successfully!", "success" => true]);
} else {
    echo json_encode(["message" => "Error executing statement: " . $stmt->error, "success" => false]);
}

$stmt->close();
$conn->close();
?>