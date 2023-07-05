import { styled } from "styled-components";
import "../assets/font.css";

export const ImageEdit = ({ selectedMeme, textInfo }) => {
  const imageURL = require(`../assets/images/${selectedMeme}.jpg`);
  return (
    <ImageContainer>
      <img src={imageURL} alt="meme" />
      <LineContainer textInfo={textInfo}>{textInfo.line}</LineContainer>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 600px;
  height: 350px;

  img {
    vertical-align: middle;
  }
`;

const LineContainer = styled.div`
  width: 100%;
  position: absolute;
  justify-content: center;
  bottom: 16px;
  display: flex;
  font-weight: 700;
  overflow: hidden;

  font-family: ${(props) => props.textInfo.textFamily};
  font-size: ${(props) => props.textInfo.textSize}px;
  color: ${(props) => props.textInfo.textColor};
  text-shadow: -1px 0 ${(props) => props.textInfo.textBorder},
    0 1px ${(props) => props.textInfo.textBorder},
    1px 0 ${(props) => props.textInfo.textBorder},
    0 -1px ${(props) => props.textInfo.textBorder};
`;
