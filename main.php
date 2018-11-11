<?php
header("content-type: text/plain");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: "origin, x-requested-with, content-type"');
header('Access-Control-Allow-Methods "GET, POST, OPTIONS"');

  $host = getenv("MYSQL_HOST");
  $db = getenv("MYSQL_DB");
  $user = getenv("MYSQL_USER");
  $pass = getenv("MYSQL_PASS");
  $charset = 'utf8mb4';
  $dsn = "mysql:unix_socket=/cloudsql/$host;dbname=$db;charset=$charset";
    $options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
  ];
  try {
      $pdo = new PDO($dsn, $user, $pass, $options);
  } catch (\PDOException $e) {
      throw new \PDOException($e->getMessage(), (int)$e->getCode());
  }

/*
if(isset($_GET["addr"])) {
    $selectAll = $pdo->query('SELECT * FROM email_addr');

    $stmt = $selectAll;
    while ($row = $stmt->fetch()) {
        echo $row['addr'] . "<br>";
    }
} */
 if(isset($_POST)) {
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    $decoded = $decoded["email"];
    $decoded = urldecode($decoded);
    echo $decoded;

    if(filter_var($decoded, FILTER_VALIDATE_EMAIL)) {
      DeDup($decoded);
    } else {
      echo "That doesn't look like an email address to me!";
    }
} else {
	echo "there was a problem with the request, please let us know it broke.";
}


  function DeDup($msg) {
  	global $pdo;

    $selectAll = $pdo->query('SELECT * FROM email_addr');
    $counter = 0;

    while ($row = $selectAll->fetch()) {
      if($msg === $row['addr']) {
        $counter ++;
        break;
      }
    }

    if(!$counter > 0 ) {
      DbInsert($msg);

    } else {
      echo "You have already registered!";
    }
  }

  function DbInsert($msg) {
    global $pdo;

    $sql = "INSERT INTO email_addr(addr) VALUES (?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$msg]);
    echo $msg . ", thank you for subscribing to the coolest email list!";
  }
  ?>