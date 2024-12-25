import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

function check_rating(res_data) {
    // Assuming res_data has a nested structure and res_data.data.rating is a valid path
    return res_data.data.rating > 4;
}

async function FetchData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/masters/bank/");
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        let result = await response.json();
        return result;
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
        throw error;
    }
}

function Body() {
    const [restaurant_datan, setrestaurant_datan] = useState([]);
    
    // Fetch data once when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData();
                setrestaurant_datan(data); // Set the fetched data
            } catch (error) {
                // Handle the error accordingly
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const handleFilterClick = () => {
        // Filter the restaurant data based on rating
        const result = restaurant_datan.filter(check_rating);
        setrestaurant_datan(result);
    };

    return (
        <div className="body">
            <div className="searchbar" style={{ background: "grey" }}>Search</div>
            <div className="filter-btn">
                <button onClick={handleFilterClick}>Filter</button>
            </div>
            <div className="res-container">
                {restaurant_datan.map((restaurant, index) => {
                    return <RestaurantCard key={index} res={restaurant} />;
                })}
            </div>
        </div>
    );
}

export default Body;
