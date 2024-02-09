import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utility";
import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";

const SignIn = () => {
  // following function for the google sign up option
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };

  // following function is for the google redirect
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <div>
      <h1>this is the Sign-In page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with google redirect
      </button>
      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignIn;
