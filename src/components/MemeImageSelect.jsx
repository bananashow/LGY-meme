export const MemeImageSelect = ({ handleMemeSelect }) => {
  return (
    <>
      <select
        name="memeImages"
        className="memeImages"
        onChange={(e) => handleMemeSelect(e)}
      >
        <option value="image_01">진행시켜</option>
        <option value="image_02">읏짜</option>
        <option value="image_03">졸라 고독하구만</option>
        <option value="image_04">재밌겠네</option>
        <option value="image_05">옳지</option>
        <option value="image_06">싸대기</option>
        <option value="image_07">내 승질 까먹은 모양이네</option>
        <option value="image_08">닥쳐 이 병신새끼야</option>
      </select>
    </>
  );
};
