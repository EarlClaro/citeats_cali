import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReviewsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewsHeader = styled.div`
  height: 80px;
  background-color: #333;
  color: #fff;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ReviewsTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ReviewsContent = styled.div`
  padding: 20px;
`;

const ReviewCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 1000px;
  margin-left: 5px;
  margin-right: 10px;
  align-items: center;
`;

const Reviews = () => {
  return (
    <div>
      <Header />
      <br></br>
      <ReviewsContainer>
        <ReviewsHeader>
            <br></br>
        <ReviewsTitle>McDonald's - Cebu Southroad </ReviewsTitle>

        </ReviewsHeader>
        <br></br>
        <h2 style={{textAlign:'left'}}>All Reviews </h2>
        <h3 style={{textAlign:'left'}}>Overall Rating 4.4</h3>
        <ReviewsContent>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>YEZETH</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>1 month ago, reviewed </p>
            <p>Great service! Great food!</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kristhyn</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>2 months ago, reviewed </p>
            <p>Awesome as always!</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Nikka</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>2 months ago, reviewed </p>
            <p>Gamay ra kaayo ang chicken</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Therese</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>3 months ago, reviewed </p>
            <p>Excellent Food</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Melanie</p>
            <p style={{ color: 'gold' }}>3.0</p>
            <p>3 months ago, reviewed </p>
            <p>Dry ra gamay ang chicken</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Bianca</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>4 months ago, reviewed </p>
            <p>Great experience and very friendly riders</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Meggie</p>
            <p style={{ color: 'gold' }}>3.5</p>
            <p>5 months ago, reviewed </p>
            <p>Medyo dugay ang preparation sa food</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kimberly</p>
            <p style={{ color: 'gold' }}>4.5</p>
            <p>6 months ago, reviewed </p>
            <p>Great food and services</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Beth</p>
            <p style={{ color: 'gold' }}>2.5</p>
            <p>6 months ago, reviewed </p>
            <p>Not sure if mo order pako balik dinhi...</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Miguel</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>8 months ago, reviewed </p>
            <p>Very good experience</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Earl</p>
            <p style={{ color: 'gold' }}>4.0</p>
            <p>3 months ago, reviewed </p>
            <p>Ok raman sya</p>
          </ReviewCard>
        </ReviewsContent>
      </ReviewsContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default Reviews;
