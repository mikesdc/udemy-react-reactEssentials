import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  const dynamicValue =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicValue} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
