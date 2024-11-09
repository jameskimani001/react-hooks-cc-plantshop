import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.length === 0 ? (
        <li>No plants found</li> // If no plants match the search, show a message
      ) : (
        plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))
      )}
    </ul>
  );
}

export default PlantList;
