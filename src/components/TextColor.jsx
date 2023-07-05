import { useState } from "react";
import { CompactPicker } from "react-color";
import { styled } from "styled-components";

export const TextColor = ({ handleTextInfoChange }) => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
    handleTextInfoChange({ target: { value: color.hex } }, "textColor");
    setShowPicker(false);
  };

  const handlePickerButton = () => {
    setShowPicker(true);
  };

  const handleOverlayClick = () => {
    setShowPicker(false);
  };

  return (
    <>
      {showPicker && <Overlay onClick={handleOverlayClick} />}

      <TextColorContainer>
        <div>
          <label htmlFor="textColor">폰트 색상</label>
        </div>
        <div>
          <PickerButton
            onClick={handlePickerButton}
            currentColor={currentColor}
          ></PickerButton>
          {showPicker && (
            <Picker>
              <CompactPicker
                color={currentColor}
                onChange={handleColorChange}
              />
            </Picker>
          )}
        </div>
      </TextColorContainer>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TextColorContainer = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 800px) {
    margin: 12px 0;
  }
`;

const PickerButton = styled.button`
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.currentColor};
  margin: 0 160px 0 12px;
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Picker = styled.div`
  position: absolute;
  left: 5px;
  top: 30px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;
