/* eslint-disable react/prop-types */
import "../Button/Button.css"
const Button = (props)=>{
    return (
        <>
        <button className="btn" onClick={props.cvPath} >
              <span className="white">{props.text}</span>
            </button>
        </>
    )
}
export default Button