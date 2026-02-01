import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ users, setUsers }) {
  //hook to navigate to another route
  const navigate = useNavigate();

  //state to store form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //State to set error message and success message
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //Function to handle input field changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    //Use call back to update the changed field while keeping the previous data intact
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page refresh

    // Validate password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    //Check if the email already exists in the users array
    const userExists = users.some((user) => user.email === formData.email);

    if (userExists) {
      setError("User already exists");
      return;
    }

    // Add new user to the users array
    setUsers([
      ...users,
      { email: formData.email, password: formData.password },
    ]);

    //clear errors and show success message
    setError("");
    setSuccess("Sign up successful! Redirecting to login...");

    //Redirect user to log in page after 1.5 seconds
    setTimeout(() => {
      navigate("/login", {
        state: { message: "Please log in to continue" },
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-gray-800 text-2xl">
          Welcome to NexusFLow
        </h1>
        <p className="text-gray-500 text-sm">Sign up to Access Premium Tools from One Dashboard</p>
      </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

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
            className="w-full mb-3 px-3 py-2 border rounded"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:opacity-80"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center mt-5">
          <p className="text-gray-700">
            Have an Account?{" "}
            <strong
              className="cursor-pointer hover:text-green-500"
              onClick={() => navigate("/login")}
            >
              Log In
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
