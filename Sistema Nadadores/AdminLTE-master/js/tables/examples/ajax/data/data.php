<?php
$data = array(
        "data"=>array(
            array(
                "name"=>"Peter",
                "lastname"=>"Griffin",
                "city"=>"Quahog",
                "gender"=>"male"
            ),
            array(
                "name"=>"Homer",
                "lastname"=>"Simpson",
                "city"=>"Springfield",
                "gender"=>"male"
            ),
            array(
                "name"=>"Turanga",
                "lastname"=>"Leela",
                "city"=>"New New York",
                "gender"=>"female"
            ),
			 array(
                "name"=>"Homer",
                "lastname"=>"Simpson",
                "city"=>"Springfield",
                "gender"=>"male"
            ),
			 array(
                "name"=>"Homer",
                "lastname"=>"Simpson",
                "city"=>"Springfield",
                "gender"=>"male"
            ),
			 array(
                "name"=>"Homer",
                "lastname"=>"Simpson",
                "city"=>"Springfield",
                "gender"=>"male"
            )
        )
);
 
header('Content-type: application/json');
echo json_encode($data);
?>