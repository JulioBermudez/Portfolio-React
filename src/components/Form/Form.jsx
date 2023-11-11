import Button from "../Button/Button"
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Form = ()=>{
    const buttonTxt = "SEND EMAIL"

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oj444k2', 'template_uzo28mb', form.current, 'ytzvJKy6NY88Z6Nwd')
        .then((result) => {
            console.log(result.text);
            if (result.text === "OK") {
              const success = document.getElementById("verification")
              success.innerHTML = "Email Sended Succesfully"
            }
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    const valid = (e)=>{
      e.target.placeholder = "This Field Is Required"
    }
    return(
        <>
        <form className="col-10 col-sm-10 col-lg-5" ref={form} onSubmit={sendEmail}>
            <h2 className="white" id="verification">Just Say Hello!</h2>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="formGroupExampleInput"
                placeholder="Your Full Name"
                onBlur={valid}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="formGroupExampleInput2"
                placeholder="Your Email"
                onBlur={valid}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"></label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                rows="3"
                placeholder="Your Message"
                onBlur={valid}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center"><Button text={buttonTxt}/></div>
            
            <div className="mb-5"></div>
          </form>
        </>
    )
}
export default Form