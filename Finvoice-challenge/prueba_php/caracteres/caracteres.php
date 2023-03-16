<?php

//5. Crea una función llamada “cantidad_caracteres” que retorne el número de caracteres de un texto.


$texto = "Hola mi nombre es Joaquin Labrador y tengo 24 años y me gusta el desarrollo backend";

function cantidadDeCaracteres($texto)
{
    if ($texto == "") {
        return 0;
    }

    if ($texto == null) {
        echo "El texto no puede ser nulo";
        return null;
    }

    $texto_sin_espacios = explode(" ", $texto);
    $total = 0;


    foreach ($texto_sin_espacios as $key => $value) {
        $cantidad_caracteres = strlen($value);

        $total += $cantidad_caracteres;


    }

    return $total;
}

$totalCaracteres = cantidadDeCaracteres($texto);

echo "El total de caracteres es: " . $totalCaracteres;

/*
 * Asumi que el texto no puede ser nulo, y que si es vacio el total de caracteres es 0.
 * Tambien asumi que los espacios no cuentan como caracteres.
 * */

?>