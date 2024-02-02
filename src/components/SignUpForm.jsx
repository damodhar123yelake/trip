import React, { useState } from "react";
import "./ContactFormStyles.css";
import Footer from "./Footer";
const SignUpForm = () => {
  return (
    <>
      <div className="form-container" style={{ paddingTop: 80 }}>
        <h1>sign up here!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email`" />
          <input type="tel" placeholder="mobile" />
          <button>SignUp</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;
