import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("object");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
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
            <h1 className="text-3xl font-bold">Login</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              New user?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
