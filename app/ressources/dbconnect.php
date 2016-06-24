<?php 
$dsn = 'mysql:dbname=aston';
$user = 'root';
$password = '';
try {
    $pdo = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
}