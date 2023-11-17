import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const RestaurantCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

const RestaurantSection = styled.div`
  margin: 20px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const FilterSection = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const BrowseRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const handleCheckboxChange = (cuisine) => {
    setSelectedCuisines((prevCuisines) =>
      prevCuisines.includes(cuisine)
        ? prevCuisines.filter((c) => c !== cuisine)
        : [...prevCuisines, cuisine]
    );
  };

  const renderRestaurantCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <RestaurantCard key={index}>
        <img src={`chickfront${index + 1}.jpg`} alt={`Restaurant ${index + 1}`} style={{ width: '150px', height: '100px' }} />
        <h4 style={{ color: 'maroon', fontWeight: 'bold' }}>Restaurant {index + 1}</h4>
        <p style={{ color: 'gold' }}>3.4/5 (300+)</p>
        <p>₱₱₱, Asian</p>
      </RestaurantCard>
    ));
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <RestaurantSection style={{ width: "20%" }}>
          <FilterSection>
            <h2>Filter</h2>
            <h3>Cuisines</h3>
            {[
              "American", "Asian", "BBQ", "Beverages", "Bread", "Burgers", "Cakes", "Chicken",
              "Coffee", "Desserts", "Donut", "Fast Food", "Filipino", "Fish", "Fries", "Ice Cream",
              "Indian", "Italian", "Japanese", "Korean", "Pizza", "Sisig", "Western", "Noodles",
              "Lechon", "Milk Tea", "Meat",
            ].map((cuisine) => (
              <div key={cuisine}>
                <input
                  type="checkbox"
                  id={cuisine}
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCheckboxChange(cuisine)}
                />
                <label htmlFor={cuisine}>{cuisine}</label>
              </div>
            ))}
          </FilterSection>
        </RestaurantSection>

   
        <div style={{ marginLeft: "20px", width: "70%" }}>
        <br></br>
        <br></br>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <RestaurantSection>
            <h2>Wild Pick</h2>
            <CardRow>{renderRestaurantCards(5)}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>Top 10 Rated Restaurants</h2>
            <CardRow>{renderRestaurantCards(10)}</CardRow>
          </RestaurantSection>

          <RestaurantSection>
            <h2>All Restaurants</h2>
            <CardRow>{renderRestaurantCards(20)}</CardRow>
          </RestaurantSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseRestaurants;
