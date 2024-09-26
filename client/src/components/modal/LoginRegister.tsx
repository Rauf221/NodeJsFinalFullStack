"use client";

import axios from 'axios';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from "@/context/AuthContext";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

export default function LoginModal({ isOpen, toggleModal }: Props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",  // Track email for register
  });

  const [isRegisterMode, setIsRegisterMode] = useState(false);  // Track if in register mode
  const { loading, error, dispatch } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const api = isRegisterMode 
      ? "http://localhost:2000/auth/register" 
      : "http://localhost:2000/auth/login";

    const headers = {
      "Content-Type": "application/json",
    };

    dispatch({ type: isRegisterMode ? "REGISTER_START" : "LOGIN_START" });

    try {
      const response = await axios.post(api, credentials, { headers });
      if (isRegisterMode) {
        registerSuccessHandler(response.data);
      } else {
        loginSuccessHandler(response.data);
      }
    } catch (error: any) {
      const errorMsg = error.response
        ? error.response.data.message
        : "Something went wrong!";
      loginFailureHandler(errorMsg);
      alert(errorMsg);
    }
  };

  const loginSuccessHandler = (data: any) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    setCredentials({ username: "", password: "", email: "" });
    toggleModal();

    if (data?.isAdmin) {
      router.push("/products");
    } else {
      router.push("/home");
    }

    alert("Login successful!");
  };

  const registerSuccessHandler = (data: any) => {
    alert("Registration successful!");
    setIsRegisterMode(false);  // Switch back to login mode
    setCredentials({ username: "", password: "", email: "" });
    toggleModal();
  };

  const loginFailureHandler = (errorMsg: string) => {
    dispatch({ type: isRegisterMode ? "REGISTER_FAILURE" : "LOGIN_FAILURE", payload: errorMsg });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleRegisterMode = () => {
    setIsRegisterMode(!isRegisterMode); // Switch between login and register modes
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-10 shadow-md w-[500px] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={toggleModal}
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">
              {isRegisterMode ? "Register" : "Login"}
            </h2>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Username*"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onChange={handleChange}
                  value={credentials.username}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onChange={handleChange}
                  value={credentials.password}
                />
              </div>

              {isRegisterMode && (
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email*"
                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onChange={handleChange}
                    value={credentials.email}
                  />
                </div>
              )}

              <div className="text-right">
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-black text-white hover:bg-[#1e1e1e]"
                disabled={loading}
                onClick={handleClick}
              >
                {loading ? (isRegisterMode ? "Registering..." : "Logging in...") : (isRegisterMode ? "Register" : "Login")}
              </button>
            </form>

            {error && <div className="text-red-500 text-center mt-4">{error}</div>}

            <div className="mt-6">
              <button
                onClick={toggleRegisterMode}
                className="w-full py-2 border border-black transition text-black hover:bg-black hover:text-white"
              >
                {isRegisterMode ? "Switch to Login" : "Create Account"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
