<?php

// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

// Allow specific headers, including Content-Type
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "reactdb"; // Change to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$input = json_decode(file_get_contents('php://input'), true);
$ownerName = $input['product_owner_name'];

// Generate a new Owner ID automatically if it's not provided
$sqlMaxId = "SELECT MAX(product_owner_id) as max_id FROM tbl_product_owner_name";
$resultMaxId = $conn->query($sqlMaxId);
$row = $resultMaxId->fetch_assoc();
$newOwnerId = $row['max_id'] + 1;

// Insert new Owner ID and Owner Name
$sqlInsert = "INSERT INTO tbl_product_owner_name (product_owner_id, product_owner_name) VALUES (?, ?)";
$stmtInsert = $conn->prepare($sqlInsert);
$stmtInsert->bind_param("is", $newOwnerId, $ownerName);

if ($stmtInsert->execute()) {
    echo json_encode(["success" => true, "message" => "New Owner ID created", "product_owner_id" => $newOwnerId]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to create Owner ID"]);
}

$stmtInsert->close();
$conn->close();
?>