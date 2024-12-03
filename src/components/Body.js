import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurant_data from "./utils/mockdata";

function  check_rating(res_data){
    console.log("res_datares_datares_data",res_data)
    console.log("res_data.res.data",res_data.data.rating)
    return res_data.data.rating>4
}



const Body = () => {

    const [restaurant_datan,setrestaurant_datan]=useState(restaurant_data)

  
    const handleFilterClick = () => {


        const result = restaurant_datan.filter(check_rating);
        setrestaurant_datan(result)

        console.log("result",result)


    };

    return (
        <div className="body">
            <div className="searchbar" style={{ background: "grey" }}>Search</div>
            <div className="filter-btn">
                {/* Fixed the onClick syntax */}
                <button onClick={handleFilterClick}>Filter</button>
            </div>
            <div className="res-container">
                {/* Iterating over restaurant data and rendering RestaurantCard */}
                {restaurant_datan.map((restaurant, index) => {
                    return <RestaurantCard key={index} res={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;
