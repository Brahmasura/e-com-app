import { useState } from "react";

const SignUpForm = () => {
  //    initialising the form objects
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display email</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
