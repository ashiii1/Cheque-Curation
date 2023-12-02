import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const handleUpload = () => {
    const imageData = 'data:image/png;base64,iVBORw...'; 
    navigate('/Cart', { state: { image: imageData } });
  };

  return (
    <HomeContainer>
      <Navbar>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/About">About</NavLink>
        </NavLinks>
      </Navbar>

      <ContentContainer>
        <UploadImageContainer>
          <h2>Upload Image</h2>
          <input type="file" accept="image/*" />
          <GlowingButton onClick={handleUpload}>Upload</GlowingButton>
        </UploadImageContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
  }
  height: 100vh;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-color: #000080;
`;

const Navbar = styled.nav`
  background-color: #001f3f;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 10px;
  margin-bottom: 20px;
  padding: 28px 38px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #000080;
  outline: none;
  box-shadow: 0 0 1em 0.25em #007bff, 0 0 4em 1em rgba(191, 123, 255, 0.781),
    inset 0 0 0.75em 0.25em #007bff;
  text-shadow: 0 0 0.5em #007bff;
  transition: all 0.3s;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-left: 20px;
  padding: 5px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const UploadImageContainer = styled.div`
  background: linear-gradient(45deg, white, #0000ff, #ff1493);
  padding: 10px;
  margin-left: 350px;
  margin-right: 350px;
  margin-top: 7vh;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;

  h2 {
    margin-bottom: 20px;
    margin-top: 20px;
    color: white;
    font-size: 45px;
  }

  input {
    margin-top: 40px;
    margin-bottom: 20px;
    color: yellow;
  }
`;

const GlowingButton = styled.button`
  border: #0056b3 0.25rem solid;
  padding: 18px 28px;
  color: #fff;
  width: 100%;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  background-color: #640d87;
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em #007bff, 0 0 4em 1em rgba(191, 123, 255, 0.781),
    inset 0 0 0.75em 0.25em #007bff;
  text-shadow: 0 0 0.5em #007bff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Home;
