import React from "react";
import styled from "styled-components";
import Header from '../components/Header';

const UserProfileContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 50px;
`;

const UserProfileHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: maroon;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  height: 250px;
  width: 600px;
  margin-right: 0px; /* Add margin-right to create space */
`;

const UserProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 40%;
  margin-right: 100px;
`;

const UserProfileName = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const UserProfileInfo = styled.div`
  flex: 1;
  margin-left: 50px;
  padding: 20px;
  width: 1200px;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 40px;
  margin-top: 0px; /* Add margin-top for space above UserProfileInfoItem */
  margin-bottom: 0px;
`;

const UserProfileInfoItem = styled.div`
  margin-bottom: 15px;
  margin-top: 10px; /* Add margin-top for space above UserProfileInfoItem */
`;

const UserProfileInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const UserProfileInfoValue = styled.span`
  font-size: 18px;
`;

const UserProfileButton = styled.button`
  width: 80%;
  height: 30px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const UserReviewsContainer = styled.div`
  width: 50%;
  text-align: left;
  padding: 0 80px; /* Add padding for space between UserProfileHeader and UserReviewsContainer */
  height: 600px;
  width: 1000px;
`;

const Review = styled.div`
  margin-bottom: 15px;
`;

const ReviewTitle = styled.h2`
  font-size: 18px;
  text-align:left;
`;

const ReviewRating = styled.span`
  font-size: 16px;
  margin-right: 100px;
  text-align:right;
  padding: 0 200px;
`;

const ReviewText = styled.p`
  font-size: 16px;
`;

const UserProfile = () => {
  return (
    <div>
      <Header />
      <UserProfileContainer>
        <UserProfileHeader>
          <UserProfileImage src="user.png" alt="User Profile Image" />
          <div>
            <UserProfileName>John Doe</UserProfileName>
            <UserProfileButton>Edit Profile</UserProfileButton>
          </div>
        </UserProfileHeader>

        <UserReviewsContainer>
          <Review>
            <h1>Your Reviews</h1>
            <ReviewTitle>Cebu's Original…             <ReviewRating>4.3/5</ReviewRating></ReviewTitle>
            <ReviewText>
              It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service.
              Staff are extremely knowledgeable and make great recommendations...
            </ReviewText>
          </Review>
          <Review>
            <ReviewTitle>McDonald's... <ReviewRating>4.6/5</ReviewRating></ReviewTitle>
            <ReviewText>
              This place is great! Atmosphere is chill and cool but the staff is also really friendly.
              They know what they’re doing and what they’re talking about, and you can tell making the customers happy.
            </ReviewText>
          </Review>
        </UserReviewsContainer>
      </UserProfileContainer>
      
      <UserProfileInfo>
        <UserProfileInfoItem>
          <UserProfileInfoLabel>Email:</UserProfileInfoLabel>
          <UserProfileInfoValue>john.doe@example.com</UserProfileInfoValue>
        </UserProfileInfoItem>
        <UserProfileInfoItem>
          <UserProfileInfoLabel>Phone:</UserProfileInfoLabel>
          <UserProfileInfoValue>123-456-7890</UserProfileInfoValue>
        </UserProfileInfoItem>
        <UserProfileInfoItem>
          <UserProfileInfoLabel>Address:</UserProfileInfoLabel>
          <UserProfileInfoValue>123 Main Street, Anytown, CA 12345</UserProfileInfoValue>
        </UserProfileInfoItem>
      </UserProfileInfo>
    </div>
  );
};

export default UserProfile;
