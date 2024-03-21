import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!email) {
      setEmailError("Email cannot be empty");
    }
    if (!password) {
      setPasswordError("Password cannot be empty");
    }

    if (email && password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Password must contain an uppercase letter, a number, and be at least 8 characters long"
        );
      } else {
        if (password === "SmartServTest@123") {
          // Reset fields after submission
          setEmail("");
          setPassword("");
          window.location = "/dashboard";
        } else {
          //   setPasswordError("Invalid password");
          setEmail("");
          setPassword("");
        }
      }
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen p-4 flex justify-center items-center">
      <div className="bg-black p-8 sm:p-16 rounded-md max-w-md w-full">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1711036402/Screenshot_2024-03-21_212027_dpsn3x.png"
            alt="Logo"
            className="w-48 h-32 mb-8"
          />
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md mb-4"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <div className="text-center text-sm text-gray-300">
            {/* Aligning the "Forgot Password" link at the center */}
            <div className="mb-4">
              <a href="#" className="underline">
                Forgot Password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
