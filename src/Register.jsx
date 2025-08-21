import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import navigation
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const navigate = useNavigate(); // 👈 create navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Account Created Successfully!");

    // 👇 navigate to Account page after success
    navigate("/account");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handlesubmit}>
        <h2>Create Your PopX Account</h2>

        <div className="input-group">
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>
            Company <span className="required"></span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <label className="radio-cont">
          Are You an Agency? <span className="required">*</span>
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === "yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
