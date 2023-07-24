export const TextSize = ({ handleTextInfoChange }) => {
  return (
    <>
      <label htmlFor="textSize">폰트 사이즈</label>
      <select
        id="textSize"
        name="memeText"
        onChange={(e) => handleTextInfoChange(e, "textSize")}
        defaultValue="25"
      >
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25" defaultValue>
          25
        </option>
        <option value="30">30</option>
      </select>
    </>
  );
};
