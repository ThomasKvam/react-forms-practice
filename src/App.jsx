import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState('')
  const [address, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contact, setContact] = useState(null)
  const [consent, setConsent] = useState(false)



  //TODO: Add your state fields here
  const handleName = (event) => {
    const inputValue = event.target.value
    setName(inputValue)
  }
  const handleAdress = (event) => {
    setAdress(event.target.value)
  }
  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleComplaint = (event) => {
    setComplaint(event.target.value)
  }

  const handleRadio = (event) => {
    setContact(event.target.value)
  }

  const handleConsent = (event) => {
    setConsent(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = {name, address, phone,
      email, complaint, contact, consent}
    console.log("Form submitted: ", {userData})
  }
  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" 
              name="name" 
              onChange={handleName}
              required />
          </label>
          <label>
            Address
            <input type="text" 
              name="address"
              onChange={handleAdress}/>
          </label>
          <label>
            Phone Number
            <input type="tel" 
              name="phone" 
              onChange={handlePhone}/>
          </label>

          <label>
            Email
            <input type="email" 
              name="email" 
              onChange={handleEmail}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" 
              name="contact" 
              value="phone"
              checked={contact === "phone"} 
              onChange={handleRadio}/>
              Phone
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="email"
              checked={contact === "email"} 
              onChange={handleRadio}/>
              Email
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="post"
              checked={contact === "post"} 
              onChange={handleRadio}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="none"
              checked={contact === "none"} 
              onChange={handleRadio}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" 
              name="consent" 
              id="consent" 
              checked={consent === true}
              onChange={handleConsent}/>
          </label>
        </div>
        <input type="submit" 
          value="Submit!" 
          onClick={handleSubmit}/>
      </form>
    </>
  );
}
