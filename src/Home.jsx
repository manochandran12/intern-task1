import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h2>Welcome to PopX</h2>
      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipisicing elit.
      </p>
      <button className="Login-btn1" onClick={() => navigate("/register")}>
        Create Account
      </button>
      <br />
      <button className="Login-btn2" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;
