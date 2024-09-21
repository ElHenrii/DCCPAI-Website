<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "reactdb"; // Change to your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT product_owner_id, product_owner_name FROM tbl_product_owner_name";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $owners = [];
    while ($row = $result->fetch_assoc()) {
        $owners[] = $row;
    }
    echo json_encode(["success" => true, "owners" => $owners]);
} else {
    echo json_encode(["success" => false, "message" => "No owners found"]);
}

$conn->close();
?>