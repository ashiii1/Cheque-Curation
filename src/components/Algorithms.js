import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import styled from 'styled-components';

const Cart = ({ location }) => {
  const [extractedText, setExtractedText] = useState('');

  const handleOCR = async () => {
    try {
      // Check if location and location.state exist
      if (location && location.state) {
        const { data: { text } } = await Tesseract.recognize(
          location.state.image,
          'eng',
          { logger: info => console.log(info) }
        );

        setExtractedText(text);
      } else {
        console.error('Image not found in location state');
      }
    } catch (error) {
      console.error('Error performing OCR:', error);
    }
  };

  return (
    <CartContainer>
      <h2>Cart Page</h2>
      {location && location.state && (
        <ImageContainer>
          <img src={location.state.image} alt="Uploaded" />
        </ImageContainer>
      )}
      <OCRButton onClick={handleOCR}>Perform OCR</OCRButton>
      {extractedText && <ExtractedText>{extractedText}</ExtractedText>}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
`;

const OCRButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ExtractedText = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export default Cart;
