import React, { useState } from "react";
import ReactDOM from "react-dom/client";




const Header = () => {
    return (
        <div className="header">
            <div className="logobro">
                <img src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
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
        >
            <h1>{props.name}</h1>
            <img
                className="logoma"
                alt="logoma"
                src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            />
            <h3>{props.cuisines}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.deliveryTime}</h3>

        </div>
    );
};
const Body = () =>
{
    return (

        <div className="body">
            <div className="searchbar" style={{background:"grey"}} >Search</div>
            <div className="res-container">
                <RestaurantCard 
                            name="Meghana Foods" 
                            cuisines="Biryani, Snacks & More" 
                            rating="4.3" 
                            deliveryTime="39 min" 
                />

                <RestaurantCard 
                    name="KFC" 
                    cuisines="Fried Chicken, Burgers, and Sides" 
                    rating="4.5" 
                    deliveryTime="25 min" 
                />

                <RestaurantCard 
                    name="MC-D" 
                    cuisines="Burgers, Fries, and Desserts" 
                    rating="4.0" 
                    deliveryTime="30 min" 
                />

                <RestaurantCard 
                    name="Subbaya Gari Hotel" 
                    cuisines="South Indian, Biryani, Curries" 
                    rating="4.2" 
                    deliveryTime="45 min" 
                />

                <RestaurantCard 
                    name="Sizzling Grills" 
                    cuisines="Grilled Meats, Kebabs, and Salads" 
                    rating="4.4" 
                    deliveryTime="35 min" 
                />

                <RestaurantCard 
                    name="The Bowl House" 
                    cuisines="Asian, Rice Bowls, Sushi" 
                    rating="4.6" 
                    deliveryTime="40 min" 
                />

                <RestaurantCard 
                    name="Pasta Bella" 
                    cuisines="Italian, Pasta, Pizza" 
                    rating="4.7" 
                    deliveryTime="25 min" 
                />

                <RestaurantCard 
                    name="FreshBites Café" 
                    cuisines="Healthy Salads, Smoothies, Sandwiches" 
                    rating="4.5" 
                    deliveryTime="20 min" 
                />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
