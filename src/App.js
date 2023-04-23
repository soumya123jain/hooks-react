import Form from "./Components/Form";
// import Parent from "./Components/useImperative/Parent";
import InputBox from "./Components/UseDiffered/InputBox";
import "./styles.css";
import Transition from "./Components/useTrasition/Transition";
import Email from "./Components/useId/Email";
import Main from "./Components/UseDebug/Main";
import Store from "./Components/UseSyncExternalStore/Store";
import { Color } from "./Components/useInsertionEffect/Color";
import Consumer from "./Components/UseContext/Cosumer";
import { DropDown } from "./View/DropDown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function App() {
  return (
    <div className="App">
      <br />
      <DropDown />
    </div>
  );
}
