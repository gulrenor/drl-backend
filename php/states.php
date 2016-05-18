<?php

// Setup (this requires MySQL 4.1+ password authentication)
$queryFile = 'states.query.php';
if (is_file($queryFile)) {
  include $queryFile;

  // Connect, query, and output JSON
  $connect = mysqli_connect($host, $user, $pw, $db);
  $result = mysqli_query($connect, $query);

  $data = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }

  header('Content-type: application/json');
  print json_encode($data);


} else {
  // Catch error
  $errorMsg = 'There was an error retrieving the data.';
  header('Content-type: application/json');
  print json_encode($errorMsg);
}

?>
