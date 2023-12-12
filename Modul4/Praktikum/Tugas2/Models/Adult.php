<?php

namespace Models;

class Adult extends Person
{
    private $dailyCaloricIntake;

    public function __construct($name, $age, $dailyCaloricIntake)
    {
        $this->name = $name;
        $this->age = $age;
        $this->dailyCaloricIntake = $dailyCaloricIntake;
    }

    public function calculateCalories()
    {
        if ($this->age >= 4 && $this->age <= 8) {
            return $this->calculateCaloriesForRange(1200, 1400, 1600);
        } elseif ($this->age >= 9 && $this->age <= 13) {
            return $this->calculateCaloriesForRange(1600, 1800, 2000);
        } elseif ($this->age >= 14 && $this->age <= 18) {
            return $this->calculateCaloriesForRange(1800, 2000, 2200);
        } elseif ($this->age >= 19 && $this->age <= 30) {
            return $this->calculateCaloriesForRange(2400, 2600, 2800);
        } elseif ($this->age >= 31 && $this->age <= 50) {
            return $this->calculateCaloriesForRange(2200, 2400, 2600);
        } elseif ($this->age >= 51) {
            return $this->calculateCaloriesForRange(2000, 2200, 2400);
        }

        return $this->dailyCaloricIntake;
    }

    private function calculateCaloriesForRange($sedentary, $moderatelyActive, $active)
    {

        if ($this->dailyCaloricIntake == "Sedentary") {
            return $sedentary;
        } elseif ($this->dailyCaloricIntake == "Moderately Active") {
            return $moderatelyActive;
        } elseif ($this->dailyCaloricIntake == "Active") {
            return $active;
        }

        return $sedentary;
    }
}

