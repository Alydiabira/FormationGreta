<?php 

namespace App\Service;

class Calcul  
{
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
public function subtract(int $a, int $b): int
{
    return $a - $b;
}
public function multiply(int $a, int $b): int
    {
        return $a * $b;
    }
public function modulo(int $a, int $b): int
    {
        return $a % $b;
    }
    public function divide(int $a, int $b): int
    {
        return $a / $b;
    }


}