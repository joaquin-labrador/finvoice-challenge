<?php
//4. Dado el siguiente array de objetos obtener los datos de la persona con la mayor edad encontrada.

$personas = array("Juan" => 8, "Pérez" => 15, "Sebastian" => 5, "Hans" => 9, "Gabriel" => 7, "Rocío" => 5);

$max_edad = max($personas);

$persona_mas_longeva = array_search($max_edad, $personas);



echo "La persona con mayor edad es: " . $persona_mas_longeva . " con " . $max_edad . " años.";

/*
 * Decidi resolver el problema con meteto max() y array_search() para obtener el valor y la clave del array.
 * ya que con bucles for o foreach el rendimiento es menor.
 * */

?>
