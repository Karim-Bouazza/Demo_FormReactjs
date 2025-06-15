import "./modal.css";

export default function Modal({isVisible, errorMessage}) {
  if(isVisible) {
        return (      
          <div className="modalContainer">
              <div style={{ background: "white", padding: "10px", borderRadius: "5px",}}>
                <h1 style={{color: errorMessage ? "red" : "green"}} >{errorMessage ? errorMessage : "The Form Has Been Submitted Successfully" }</h1>
              </div>
            </div>
      );
  } else {
    return <></>;
  }
}
