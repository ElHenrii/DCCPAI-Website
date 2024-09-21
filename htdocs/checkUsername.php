<?php

header("Access-Control-Allow-Origin: *"); // Allows all domains
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allows only POST, GET, and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allows only specific headers


// Database configuration
$host = "localhost";
$username = "root";
$password = ""; // Assuming no password set
$database = "reactdb"; // Replace with your database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from request
$data = json_decode(file_get_contents("php://input"), true);
$username = $conn->real_escape_string($data['username']);

// Check if username exists
$query = "SELECT username FROM tbl_user WHERE username = '$username'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // Username exists
    echo json_encode(['success' => false, 'message' => 'Username already exists']);
} else {
    // Username does not exist, proceed with registration (additional code needed here for registration)
    // Placeholder response for successful scenario
    echo json_encode(['success' => true, 'message' => 'Username is available. Proceed with registration.']);
}

$conn->close();
?>