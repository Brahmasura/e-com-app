import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase.utility";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
// import { setCurrentUser } from "../../store/user/user.action";

const SignInForm = () => {

  // now we will be using the context values here in the component and for that we need the useContext and also the UserContext
  // but note that once we have imported the values from the context, we will only be using the
  // values that are being needed by us

  // const { setCurrentUser } = useContext(UserContext);

  //    initialising the form objects
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

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
    
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

     
      // and then in the end just make all the fields empty
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for the email");
          break;

        case "auth/user-not-found":
          alert("User not found, kindly sign up!!");
          break;

        default:
          console.log(error);
      }
    }
  };

  // following function for the google sign up option
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>already have an account?</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          {/* since buttons inside the form component are by defualt the submit so we have to explicitely 
          define the type= "button" to make it behave like a normal button, we did that because an alert of no
          user found was popping up once we close the google sign in popup */}
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
