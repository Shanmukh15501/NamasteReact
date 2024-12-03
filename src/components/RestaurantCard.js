
import { useState } from "react";
import {REST_CARD_IMG} from './utils/constants'

const RestaurantCard = (props) => {
    const {name,cuisines,rating,deliveryTime}=props.res.data;
    const [isHovered, setIsHovered] = useState(false);
    const rest_style = {
        // Define your styles here or import from a CSS file
        // Example:
        padding: '16px',
        textAlign: 'center',
        cursor: 'pointer',
        border: isHovered ? '2px solid #007bff' : 'none', 
    };

    return (
        <div className="restaurent-card" style={rest_style}
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)} 
        onMouseOver={() => console.log("mouse hovered")}
        >
        <img className="restaurent-card" src={REST_CARD_IMG}></img>

            <h1>{name}</h1>
            <img
                className="logoma"
                src=""
            />
            <h3>{cuisines}</h3>
            <h3>{rating}</h3>
            <h3>{deliveryTime}</h3>

        </div>
    );
};


export default RestaurantCard;