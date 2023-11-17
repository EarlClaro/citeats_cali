import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const FavoriteContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;



const FindFav = styled.button`
  background-color: white;
  color: gold;
  padding: 10px 20px; 
  border-color:gold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 15px;
`;

const Favorites = () => {
  return (
    <div>
      <Header />
      <FavoriteContainer>
        
        <h1 style={{color:'gold',textAlign:'left',padding:'0 300px'}}>My Favorites</h1>

        <br></br>
        <br></br>
        <br></br>
        <h2>No Favorites Saved</h2>
        <p>You will see all your favorites here</p>

        <FindFav onClick={FindFav}>Let's find some favorites</FindFav>
    
      </FavoriteContainer>
    </div>
  );
};

export default Favorites;
