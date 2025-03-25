import React,{useState} from "react";

const Contact = () => { 
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:'',
    phone:'' // Corrected the property name to match the form field name
  }); 

  const [isSent, setIsSent] = useState(false);
  
  const handleChange = (e) =>{
   const {name, value} = e.target;
   setFormData({
     ...formData, 
     [name]: value
   });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('FormData:', formData);
    setIsSent(true);

    setTimeout(() => {
      setFormData({
        firstName:'',
        lastName:'',
        email:'',
        message:'',
        phone:'' // Corrected the property name to match the form field name
      });
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label> {/* Updated the label htmlFor attribute */}
          <input
            type="tel"
            id="phone"
            name="phone" // Updated the name attribute
            placeholder="+961"
            value={formData.phone} // Updated the value attribute
            onChange={handleChange}
            pattern="^\+961[0-9]{8}$"
            required
          />
          <p>Format: +961XXXXXXXX</p>
        </div>
        <button type="submit">{isSent ? 'Sent ✔' : 'Submit'}</button>
      </form>
    </div>
  );
};
export default Contact;