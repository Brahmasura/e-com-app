import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utility";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";


const SignUpForm = () => {
  //    initialising the form objects
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // now the thing to be noticed above is that in order for sign up with email and password we want the displayName
  // and email to be store but not the password so that in case our firebase account gets hacked our password won't be
  // compromised and hence there there is a inbuilt auth mechanism provided by the firebase for that

  // setting the state for the form field
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructuring the form objects
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  // setting a function for the changing of the fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // now the following function is for the functionality for creating a user with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();

    // now the steps that we need to acoomplish are
    // 1. first check weather the password and confirm password matches
    // 2. do we get the auth from the function createAuthUserWithEmailAndPassword
    // 3. and finally take the value and create a user Document in the firestore database
    // let's go this was a challenge

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
      // we used return because then we don't want to proceed furthur in the code
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      alert("form submitted successfully!!");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot crete user, email already exists!!");
      } else {
        console.log("user creating encountered and error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
