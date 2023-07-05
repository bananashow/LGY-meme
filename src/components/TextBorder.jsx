export const TextBorder = ({ handleTextInfoChange }) => {
  return (
    <>
      <label htmlFor="textBorder">폰트 테두리</label>
      <select
        id="textBorder"
        name="memeText"
        onChange={(e) => handleTextInfoChange(e, "textBorder")}
      >
        <option value="none">없음</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
    </>
  );
};
