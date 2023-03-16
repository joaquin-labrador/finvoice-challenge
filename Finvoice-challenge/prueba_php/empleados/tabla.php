<?php
//need import $empleados from empleados.php

require_once 'empleados.php';

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
<table border="1">
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Area</th>
        <th>Correo</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($empleados as $key => $value) : ?>
        <?php if ($key % 2 != 0) : ?>
            <tr>
                <td><?php echo $value["Nombre"] ?></td>
                <td><?php echo $value["Apellido"] ?></td>
                <td><?php echo $value["Edad"] ?></td>
                <td><?php echo $value["Area"] ?></td>
                <td><?php echo $value["Correo"] ?></td>
            </tr>
        <?php endif; ?>
    <?php endforeach; ?>
    </tbody>
</table>
</body>

</html>



