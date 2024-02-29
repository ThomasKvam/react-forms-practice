import { useState } from "react";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({name: "", 
    address: "", 
    phone: "",
    email: "", 
    complaint: "", 
    contact: "", 
    consent: ""
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    if (inputName ==="name"){
      setUserData({...userData, name: inputValue})
    }
    if (inputName ==="address"){
      setUserData({...userData, address: inputValue})
    }
    if (inputName ==="phone"){
      setUserData({...userData, phone: inputValue})
    }
    if (inputName ==="email"){
      setUserData({...userData, email: inputValue})
    }
    if (inputName ==="complaint"){
      setUserData({...userData, complaint: inputValue})
    }
    if (inputName ==="contact"){
      setUserData({...userData, contact: inputValue})
    }
    if (inputName ==="consent"){
      setUserData({...userData, consent: event.target.checked})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
              value={userData.name} 
              onChange={handleChange}
              required />
          </label>
          <label>
            Address
            <input type="text" 
              name="address"
              value={userData.address} 
              onChange={handleChange}/>
          </label>
          <label>
            Phone Number
            <input type="number" 
              name="phone"
              value={userData.phone}  
              onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" 
              name="email"
              value={userData.email}  
              onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userData.complaint} 
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" 
              name="contact" 
              value="phone"
              checked={userData.contact === "phone"} 
              onChange={handleChange}/>
              Phone
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="email"
              checked={userData.contact === "email"} 
              onChange={handleChange}/>
              Email
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="post"
              checked={userData.contact === "post"} 
              onChange={handleChange}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="none"
              checked={userData.contact === "none"} 
              onChange={handleChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" 
              name="consent" 
              id="consent" 
              checked={userData.consent}
              onChange={handleChange}/>
          </label>
        </div>
        <input type="submit" 
          value="Submit!" 
          onClick={handleSubmit}/>
      </form>
    </>
  );
}
