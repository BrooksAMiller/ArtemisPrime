<?php
    include("../scripts/dataBaseConnection.php");

    class ViewProperties {
        //properties
            public $id;
            public $listHeader;
            public $priceSelector;
            public $squareMeters;
            public $propertyType;
            public $totalBedrooms;
            public $floors;
            public $pricePerSquareMeter;
            public $neighborhood;
            public $addressLocation;
            public $zoneStatus;
            public $constructionYear;
            public $heatingSystem;
            public $energyClass;
            public $levels;
            public $kitchens;
            public $livingRooms;
            public $bathrooms;
            public $residentialStatus;
            public $residentialType;
            public $urbanPlan;
            public $buildingCoefficient;
            public $coverageRatio;

        //constructor
        public function __construct($id){
            $this->id = $id;
            $this->listHeader = $listHeader;
            $this->priceSelector = $priceSelector;
            $this->squareMeters = $squareMeters;
            $this->propertyType = $propertyType;
            $this->totalBedrooms = $totalBedrooms;
            $this->floors = $floors;
            $this->pricePerSquareMeter = $pricePerSquareMeter;
            $this->neighborhood = $neighborhood;
            $this->addressLocation = $addressLocation;
            $this->zoneStatus = $zoneStatus;
            $this->constructionYear = $constructionYear;
            $this->heatingSystem = $heatingSystem;
            $this->energyClass = $energyClass;
            $this->levels = $levels;
            $this->kitchens = $kitchens;
            $this->livingRooms = $livingRooms;
            $this->bathrooms = $bathrooms;
            $this->residentialStatus = $residentialStatus;
            $this->residentialType = $residentialType;
            $this->urbanPlan = $urbanPlan;
            $this->buildingCoefficient = $buildingCoefficient;
            $this->coverageRatio = $coverageRatio;
        }
        

        //methods
    }

?>