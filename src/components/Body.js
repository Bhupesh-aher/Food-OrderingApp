import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import User from "./User";

 
const Body = () =>{

  const [ListOfRestaurants, SetListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  useEffect(() => {
    fetchData(); 
  }, [])
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    
    SetListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
     return (
    <h1>
      Looks like you are offline!! Please check your internet connection
    </h1>)

  const {loggedInUser, setUserName} = useContext(UserContext);


 
  if(ListOfRestaurants.length === 0){
    return <Shimmer/>
  }
  
    return  (
       <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                  setSearchText(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                  const filteredRestaurant = ListOfRestaurants.filter((res) => 
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                  setFilterRestaurant(filteredRestaurant)

                }}>Search </button>
                
              </div>
                
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    filtredList = ListOfRestaurants.filter(res => res.info.avgRating > 4);
                    setFilterRestaurant(filtredList);
                  }}>
                      Top Rated Restaurant
                  </button>
                </div> 

                <div className="search m-4 p-4 flex items-center">
                  <label>UserName   </label>
                  <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div> 

                
            </div>
            <div className="flex flex-wrap"> 
             {
              filterRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
                {restaurant.info.promoted ? (
                    <RestaurantCardPromoted resData={restaurant}/>
                  ): (

                    <RestaurantCard  resData = {restaurant} /> 
                  )}
                </Link>
                 )) }    
             </div>
       </div>   
    )
  }; 

export default Body;   

