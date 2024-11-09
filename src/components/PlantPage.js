import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Aloe",
      image: "./images/aloe.jpg",
      price: 15.99,
      inStock: true,
    },
    {
      id: 2,
      name: "ZZ Plant",
      image: "./images/zz-plant.jpg",
      price: 25.98,
      inStock: true,
    },
    {
      id: 3,
      name: "Pilea Peperomioides",
      image: "./images/pilea.jpg",
      price: 5.99,
      inStock: false,
    },
    {
      "id": 4,
      "name": "Pothos",
      "image": "./images/pothos.jpg",
      "price": 12.11
    },
    {
      "id": 5,
      "name": "Jade",
      "image": "./images/jade.jpg",
      "price": 10.37
    },
    {
      "id": 6,
      "name": "Monstera Deliciosa",
      "image": "./images/monstera.jpg",
      "price": 25.99
    },
    {
      "id": 7,
      "name": "Fiddle Leaf Fig",
      "image": "./images/fiddle-leaf-fig.jpg",
      "price": 55
    }
    // More plants can be added here
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle adding a new plant
  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
