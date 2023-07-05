export const Text = ({ handleTextInfoChange }) => {
  return (
    <>
      <label htmlFor="line">텍스트</label>
      <input
        id="line"
        type="text"
        onChange={(e) => handleTextInfoChange(e, "line")}
      ></input>
    </>
  );
};
