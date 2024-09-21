<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"), true); // Decode the JSON sent from frontend

$servername = "localhost";
$username = "root";
$password = ""; // Assuming no password
$dbname = "reactdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $data['user'] ?? ''; // Use the decoded data
$pass = $data['password'] ?? '';

if (!empty($user) && !empty($pass)) {
    $sql = "SELECT * FROM tbl_admin WHERE user = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Invalid credentials"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "Username or password not provided"]);
}

$conn->close();
?>