export default function FormInput({title, type, text, value, handleChange}) {
    return (
     <>
       <label>{title}</label>
       <input type={type} placeholder={text} style={{ padding: "10px", marginBottom: "15px" }} value={value} onChange={(e) => { handleChange(e.target.value )}}/>
     </>
    )
}