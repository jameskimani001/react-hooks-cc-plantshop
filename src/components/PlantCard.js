import React,{useState} from "react";

function PlantCard({ plant , onStockClick}) {
  const { name, image, price } = plant;
  const[inStock, setinStock ] = useState(true);
const handleClick = () => {
  setinStock (!inStock)
  if(onStockClick) {
    onStockClick(plant.id);
  }
};
  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={handleClick}   className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
