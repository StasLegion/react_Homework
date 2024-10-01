import CheckboxText from "./components/CheckboxText/CheckboxText.js";
import checkMarkImg from "./components/CheckboxText/pn.png";

function App() {
  return (
    <div className="App">
      <CheckboxText text="Неограниченое количество учеников" imageSrc={checkMarkImg}></CheckboxText>
        <CheckboxText text="Производительную связь с учениками " imageSrc={checkMarkImg}></CheckboxText>
        <CheckboxText text="Сообщества" imageSrc={checkMarkImg}></CheckboxText>
        <CheckboxText text="Конфидециальность и защита" imageSrc={checkMarkImg}></CheckboxText>
    </div>
  );
}

export default App;
