<?php
function printFrequency($string) {
    $n = strlen($string) - 1;
    $i = 0;
    for ($i=0; $i <= $n; $i++) { 
        $count=1;
        while($i < $n && $string[$i] == $string[$i+1]){
            $count++;
            $i++;
        }
        echo $string[$i] . $count;
    }
}
// Cách 2
// function printFrequency($string) {
//     $n = strlen($string) - 1;
//     $i = 0;
//     $count=1;
//     while($i <= $n) {
//         if($i < $n && $string[$i] == $string[$i+1]){
//             $count++;
//         }else{
//             echo $string[$i] . $count;
//             $count=1;
//         }
//         $i++;
//     }
// }
$string = 'aadee';
printFrequency($string);