import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <p>
              ALready have anaccount??{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Plz Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
