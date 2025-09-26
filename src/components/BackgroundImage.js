import React from "react";
import styled from "styled-components";

//  styled component
const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="no internet connection"
      />
    </BackgroundContainer>
  );
};

export default BackgroundImage;
