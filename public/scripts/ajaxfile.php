<?php

include "dataBaseConnection.php";

$return_arr = array();

$query = "SELECT * FROM realestate";
$result = mysqli_query($conn, $query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $list_header = $row['list_header'];
    $price_selector = $row['price_selector'];
    $square_meter = $row['square_meter'];
    $property_type = $row['property_type'];
    $total_bedrooms = $row['total_bedrooms'];
    $floors = $row['floors'];
    $price_per_m2 = $row['price_per_m2'];
    $neighborhood = $row['neighborhood'];
    $zone_status = $row['zone_status'];

    $return_arr[] = array(
                    "id" => $id,
                    "list_header" => $list_header,
                    "price_selector" => $price_selector,
                    "square_meter" => $square_meter,
                    "property_type" => $property_type,
                    "total_bedrooms" => $total_bedrooms,
                    "floors" => $floors,
                    "price_per_m2" => $price_per_m2,
                    "neighborhood" => $neighborhood,
                    "zone_status" => $zone_status);
}

echo json_encode($return_arr);
mysqli_close($conn);