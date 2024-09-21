<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$conn = mysqli_connect("localhost", "root", "", "reactdb");

if (!$conn) {
    echo json_encode(["error" => mysqli_connect_error()]);
    exit();
}

// Fetch products with new columns
$sql = "SELECT 
            product_id, 
            product_name, 
            product_description, 
            product_price, 
            category_id, 
            display, 
            available, 
            product_deleted 
        FROM tbl_product";
$result = mysqli_query($conn, $sql);

if ($result) {
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(["error" => "Query failed"]);
}

mysqli_close($conn);
?>