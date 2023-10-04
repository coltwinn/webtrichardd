<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" type="text/css" href="css/adms.css">
</head>
<body>
    <div>
        <h1>Administrador</h1>
        <input type="text" placeholder="Nome">
        <br><br>
        <input type="password" placeholder="Senha">
        <br><br>
        <button><a href="tadm.html">Entrar</a></button>
    </div>
</body>

<form action="adm.php" method="post">
    nome 
    <input type="text" name="fname" id="fname"> <br> <br>
    Senha 
    <input type="text" name="Ipassword" id="Ipassword"> <br> <br>
    <input type="submit"> 
</form>

<?php
$servername = "localhost"; // Correção do nome da variável
$username = "root";
$password = "";
$dbname = "admbd";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fname = $_POST['fname'];
$Ipassword = $_POST['Ipassword'];

// Usando instrução preparada para evitar injeção de SQL
$stmt = $conn->prepare("INSERT INTO adms (fname, Ipassword) VALUES (?, ?)");
$stmt->bind_param("ss", $fname, $Ipassword);

if ($stmt->execute()) {
    echo "New record added";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>



</html>