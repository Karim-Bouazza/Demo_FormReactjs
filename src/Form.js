import { useState } from "react";
import "./Form.css";
import Modal from "./Modal";
import FormInput from "./FormInput";

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    isSalarieValid: false,
  });

  let isDisabled = info.name == "" || info.phone == "" || info.age == "" || info.isEmployee == false || info.isSalarieValid == false;

  function handleChangeInputName(value) {
    setInfo({ ...info, name: value })
  }
  function handleChangeInputPhone(value) {
    setInfo({ ...info, phone: value })
  }
  function handleChangeInputAge(value) {
    setInfo({ ...info, age: value })
  }

  return (
    <div style={{ paddingTop: "20px", zIndex: "1" }} onClick={hiddenModal}>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={display}>
   
        <FormInput title="Name" type="text" text="Enter your Name" value={info.name} handleChange={handleChangeInputName} />
        <FormInput title="Phone" type="number" text="Enter your Phone" value={info.phone} handleChange={handleChangeInputPhone} />
        <FormInput title="Age" type="number" text="Enter your Age" value={info.age} handleChange={handleChangeInputAge} />

  
        <label>Are you an Employee?</label>
        <input type="checkbox" style={{ transform: "scale(2)", margin: "10px", marginBottom: "20px",}} checked={info.isEmployee} onChange={(e) => { setInfo({ ...info, isEmployee: e.target.checked });}}/>

        <label>Salary</label>
        <select placeholder="Choose your salary" style={{ padding: "10px", marginBottom: "20px" }} value={info.isSalarieValid} onChange={(e) => { setInfo({ ...info, isSalarieValid: e.target.value });}}>
          <option value={false}>less than 500$</option>
          <option value={true}>more than 500$</option>
        </select>

        <div className="btn">
          <input className={isDisabled ? "disabled" : ""} type="submit" value={"Submit"} disabled={isDisabled}/>
        </div>
      </form>
      <Modal isVisible={showModal} errorMessage={showErrorMessage}/>
    </div>
  );
  function display(e) {
    e.preventDefault();
    setShowErrorMessage(null);
    if(info.age < 18 || info.age > 100) {
      setShowErrorMessage("Age is not allowed");
    } else if (info.phone.length < 9) {
      setShowErrorMessage("phone length is not allowed");
    }
    setShowModal(true)
  }
  function hiddenModal () {
    if(setShowModal) {
      setShowModal(false);
    }
  }
}
