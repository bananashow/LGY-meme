export const TextFamily = ({ handleTextInfoChange }) => {
  return (
    <>
      <label htmlFor="textFamily">폰트 종류</label>
      <select
        id="textFamily"
        name="memeText"
        onChange={(e) => handleTextInfoChange(e, "textFamily")}
      >
        <option value="'Noto Sans KR', sans-serif">Noto Sans</option>
        <option value="'Nanum Gothic', sans-serif">나눔고딕</option>
        <option value="'Noto Serif KR', serif;">궁서체</option>
        <option value="'Gowun Batang', serif">고운 바탕체</option>
        <option value="'Song Myung', serif">송명체</option>
      </select>
    </>
  );
};
