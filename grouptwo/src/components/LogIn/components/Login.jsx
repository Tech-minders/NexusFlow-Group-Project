import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login({ users }) {
  //declare navigation hooks
  const navigate = useNavigate();
  const location = useLocation();

  //Message passed from Sign up page to improve UI experience
  const message = location.state?.message;

  //state for login form values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //State for error and success message
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    //update the corresponding input field
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //function to handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload

    //check if email and password match an existing user
    const validUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );
    //if user doesn't exist/match, show error
    if (!validUser) {
      setError("Invalid email or password");
      setSuccess("");
      return;
    }
    //if user exists, clear error and show success message
    setError("");
    setSuccess("Login successful! Redirecting...");

    //redirect to dashboard after 1.5 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-gray-800 text-2xl">
          Welcome to NexusFLow
        </h1>
        <p className="text-gray-500 text-sm">Log In to Access Premium Tools from One Dashboard</p>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Log In</h1>

        {message && (
          <p className="text-blue-600 mb-3 font-semibold">{message}</p>
        )}

        {error && <p className="text-red-500 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-3 px-3 py-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:opacity-80"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center items-center mt-5">
          <p className="text-gray-700">
            Don't have an Account?{" "}
            <strong
              className="cursor-pointer hover:text-green-500"
              onClick={() => navigate("/signup")}
            >
              Signup
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
