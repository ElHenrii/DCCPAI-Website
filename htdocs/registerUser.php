<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"), true);

error_log("Received data: " . print_r($data, true)); // Log the received data

$servername = "localhost";
$username = "root";
$password = ""; // Assuming no password
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

$stmt = $conn->prepare("INSERT INTO tbl_user (username, owner_id, password, user_access) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(["message" => "Error preparing statement: " . $conn->error]);
    exit;
}

$hashedPassword = ($data['password']);
$stmt->bind_param("sisi", $data['username'], $data['owner_id'], $hashedPassword, $data['personnelLevel']);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully!", "success" => true]);
} else {
    error_log("SQL Error: " . $stmt->error); // Log any SQL errors
    echo json_encode(["message" => "Error registering user: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>