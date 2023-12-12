<?php

function generator($number) {
    for ($index = 1; $index <= $number; $index++) {
        $output = '';

        if ($index % 3 == 0) {
            $output .= "Hello";
        }

        if ($index % 5 == 0) {
            $output .= "World";
        }

        echo ($output !== '') ? $output : $index;
        echo "\n";
    }
}

generator(15);
