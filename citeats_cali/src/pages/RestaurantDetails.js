import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const RestaurantDetailsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RestaurantDetailsHeader = styled.div`
  height: 300px;
  background-image: url('/Image 1.jpg'); 
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const RestaurantDetailsName = styled.h1`
  font-size: 24px;
  margin: 10px 0 0;
`;

const RestaurantDetailsInfo = styled.div`
  padding: 20px;
`;

const RestaurantDetailsInfoItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const RestaurantDetailsInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  display: inline-block;
  width: 200px;
`;

const RestaurantDetailsInfoValue = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const GoogleLocationImage = styled.img`
  width: 400px;
  height: 150px;
  margin-left: 10px;
`;

const RestaurantDetailsButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const RestaurantDetailsButton = styled.div`
  width: 250px;
  height: 150px;
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const ReviewContainer = styled.div`
  justify-content: center;
  margin-top: 20px;
  margin-left: 300px;
  margin-right: 300px;
`;

const SeeAllReviewsButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const ReviewCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 800px;
  align-items: center;
`;

const ReviewFormContainer = styled.div`
  margin-top: 30px;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const OverallRatingLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

const OverallRatingInput = styled.input`
  margin-bottom: 10px;
  width:100px;
`;

const ReviewTextarea = styled.textarea`
  margin-bottom: 10px;
  height: 100px;
  width:600px;
`;

const WriteReviewButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const RestaurantDetails = () => {
  return (
    <div>
        
      <Header />
      <br></br>
      <RestaurantDetailsContainer>
        <RestaurantDetailsHeader />
        <RestaurantDetailsName>McDonald's - Cebu Southroad</RestaurantDetailsName>

        <RestaurantDetailsInfo>
          <RestaurantDetailsButtonContainer>
            <RestaurantDetailsButton image="/menuimg.jpg">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
              <h3 style={{ color: 'black' }}>Menu</h3>
            </RestaurantDetailsButton>
            <RestaurantDetailsButton image="/ambienceimg.jpg">
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
              <h3 style={{ color: 'black' }}>Ambience</h3>
            </RestaurantDetailsButton>
            <RestaurantDetailsButton image="/foodimg.jpg">
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
              <h3 style={{ color: 'black' }}>Food</h3>
            </RestaurantDetailsButton>
          </RestaurantDetailsButtonContainer>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Address:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>
              Mambaling Cebu 5 Rd, Cebu City, Philippines
            </RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
          <GoogleLocationImage src="/googlelocation.jpg" alt="Google Location" />
        <br></br>
        <br></br>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Opening Hours:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>Mon - Sun 6:00 AM - 12:00 PM</RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Phone:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>+63 32 234 5678</RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Cuisine:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>Fast food</RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Rating:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>4.5 stars</RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
          <RestaurantDetailsInfoItem>
            <RestaurantDetailsInfoLabel>Reviews:</RestaurantDetailsInfoLabel>
            <RestaurantDetailsInfoValue>3,015</RestaurantDetailsInfoValue>
          </RestaurantDetailsInfoItem>
        </RestaurantDetailsInfo>
      </RestaurantDetailsContainer>

      <ReviewContainer>
        <SeeAllReviewsButton>See All Reviews</SeeAllReviewsButton>
        <br></br>
        <br></br>
        <ReviewCard>
          <p style={{ color: 'maroon', fontWeight: 'bold' }}>YEZETH</p>
          <p style={{ color: 'gold' }}>5.0</p>
          <p>1 month ago</p>
          <p>Great service! Great food!</p>
        </ReviewCard>
        <ReviewCard>
          <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kristhyn</p>
          <p style={{ color: 'gold' }}>5.0</p>
          <p>2 months ago</p>
          <p>Awesome as always!</p>
        </ReviewCard>
        <ReviewCard>
          <p style={{ color: 'maroon', fontWeight: 'bold' }}>Nikka</p>
          <p style={{ color: 'gold' }}>5.0</p>
          <p>2 months ago</p>
          <p>Gamay ra kaayo ang chicken</p>
        </ReviewCard>
        <ReviewCard>
          <p style={{ color: 'maroon', fontWeight: 'bold' }}>Therese</p>
          <p style={{ color: 'gold' }}>5.0</p>
          <p>3 months ago</p>
          <p>Excellent Food</p>
        </ReviewCard>
        <ReviewCard>
          <p style={{ color: 'maroon', fontWeight: 'bold' }}>Melanie</p>
          <p style={{ color: 'gold' }}>3.0</p>
          <p>3 months ago</p>
          <p>Dry ra gamay ang chicken</p>
        </ReviewCard>
      </ReviewContainer>

      <ReviewFormContainer>
        <h2>Tell us about our food</h2>
        <ReviewForm>
          <OverallRatingLabel htmlFor="overallRating">Overall Rating:</OverallRatingLabel>
          <OverallRatingInput type="number" id="overallRating" min="1" max="5" />
          <ReviewTextarea placeholder="Write here your review..." />
          <WriteReviewButton>Write Review</WriteReviewButton>
        </ReviewForm>
      </ReviewFormContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
