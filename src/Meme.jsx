import { useState, useRef } from "react";
import { styled } from "styled-components";
import { ImageEdit } from "./components/ImageEdit";
import domtoimage from "dom-to-image";
import { MemeImageSelect } from "./components/MemeImageSelect";
import { Text } from "./components/Text";
import { TextFamily } from "./components/TextFamily";
import { TextSize } from "./components/TextSize";
import { TextColor } from "./components/TextColor";
import { TextBorder } from "./components/TextBorder";

export const Meme = () => {
  const imageRef = useRef(null);
  const [selectedMeme, setSelectedMeme] = useState("image_01");
  const [textInfo, setTextInfo] = useState({
    line: "",
    textFamily: "'Noto Sans KR', sans-serif",
    textSize: 25,
    textColor: "black",
    textBorder: "none",
  });

  const handleMemeSelect = (e) => {
    setSelectedMeme(e.target.value);
  };
  const handleTextInfoChange = (e, property) => {
    setTextInfo({ ...textInfo, [property]: e.target.value });
  };
  const handleDownload = () => {
    domtoimage.toBlob(imageRef.current).then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedMeme}.png`;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <h1 className="title">이경영 밈 생성기</h1>
          <MemeImageSelect handleMemeSelect={handleMemeSelect} />

          <div className="imageRef" ref={imageRef}>
            <ImageEdit selectedMeme={selectedMeme} textInfo={textInfo} />
          </div>

          <Horizontal>
            <div className="horizental">
              <Text handleTextInfoChange={handleTextInfoChange} />
            </div>

            <div className="horizental">
              <TextFamily handleTextInfoChange={handleTextInfoChange} />
              <TextSize handleTextInfoChange={handleTextInfoChange} />
            </div>

            <div className="horizental">
              <TextColor handleTextInfoChange={handleTextInfoChange} />
              <TextBorder handleTextInfoChange={handleTextInfoChange} />
            </div>
          </Horizontal>
          <button onClick={handleDownload}>밈 다운받기</button>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #272829;
  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: white;
    font-size: 32px;
    margin: 38px 0;
  }

  .memeImages {
    margin-bottom: 34px;
  }

  input {
    width: 414px;
    height: 34px;
    color: white;
  }

  select,
  input {
    margin-left: 12px;
    background-color: #545b5f;
    color: white;
    border: none;
    border-radius: 3px;
    padding-left: 6px;

    @media (max-width: 800px) {
      width: 320px;
      padding-left: 0;
      margin-left: 0;
    }
  }

  select[name="memeImages"] {
    height: 40px;
    width: 300px;

    @media (max-width: 800px) {
      width: 320px;
    }
  }

  select[name="memeText"] {
    height: 35px;
    width: 120px;
    margin-right: 64px;

    @media (max-width: 800px) {
      margin: 0;
      width: 100%;
    }
  }

  & > button {
    margin-top: 24px;
    width: 200px;
    height: 50px;
    border-radius: 12px;
    border: 1px solid #d0d3cc;
    cursor: pointer;
    font-size: 16px;
    background-color: inherit;
    color: white;
    transition: 0.3s;
    &:hover {
      background-color: #1e1e1e;
    }

    @media (max-width: 800px) {
      width: 320px;
    }
  }

  .imageRef {
    width: 600px;
    height: 350px;
  }
`;

const Horizontal = styled.div`
  margin-left: 50px;
  margin-top: 24px;
  padding: 18px 0;
  gap: 36px;
  display: grid;

  @media (max-width: 800px) {
    margin-left: 0;
    gap: 0;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    .horizental {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .horizental {
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      margin-top: 12px;
      gap: 15px;
    }
  }
`;
