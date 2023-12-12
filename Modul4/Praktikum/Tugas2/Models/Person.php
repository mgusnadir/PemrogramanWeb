<?php

namespace Models;

abstract class Person
{
    protected $name;
    protected $age;

    public function getName()
    {
        return $this->name;
    }

    public function getAge()
    {
        return $this->age;
    }

    abstract public function calculateCalories();
}
