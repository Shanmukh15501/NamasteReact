import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

// Check if the restaurant's rating is above 4
function check_rating(res_data) {
    return res_data.data.rating > 4;
}

// Fetch data from the API
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
    const [search, setsearch] = useState("");

    // Fetch data once when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData();
                setrestaurant_datan(data); // Set the fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Handle filter click to filter by rating
    const handleFilterClick = () => {
        const result = restaurant_datan.filter(check_rating);
        setrestaurant_datan(result);
    };

    // Handle search input change
    function handleSearchChange(event) {
        setsearch(event.target.value); // Update the search state with the input value
    }

    // Handle search button click
    async function handlesearchbutton() {
        if (search) {
            // Filter the restaurant data based on the search term
            const filtered_rest = restaurant_datan.filter((data) => {
                return data.data.name.toLowerCase().includes(search.toLowerCase());
            });
            setrestaurant_datan(filtered_rest); // Update the state with the filtered results
        } else {
            // If search is empty, fetch fresh data
            try {
                const data = await FetchData();
                setrestaurant_datan(data); // Reset the data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }

    return (
        <div className="body">
            <div className="searchbar" style={{ background: "grey" }}>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search by restaurant name"
                />
                <button onClick={handlesearchbutton}>Click Search</button>
            </div>
            <div className="filter-btn">
                <button onClick={handleFilterClick}>Filter by Rating</button>
            </div>
            <div className="res-container">
                {/* Display filtered or fetched restaurant data */}
                {restaurant_datan.length > 0 ? (
                    restaurant_datan.map((restaurant, index) => (
                        <RestaurantCard key={index} res={restaurant} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default Body;
