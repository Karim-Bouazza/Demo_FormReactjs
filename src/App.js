import "./App.css";
import Form from "./Form";

const App = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <h1 style={{paddingBottom: "10px"}}>Requesting Form</h1>
        <hr></hr>
        <Form />
      </div>
    </div>
  );
};

export default App;
