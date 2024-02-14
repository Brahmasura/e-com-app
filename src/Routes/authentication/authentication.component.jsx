// import {
// //   auth,
//   signInWithGooglePopup,
// //   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/Firebase.utility";

import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";





const Authentication = () => {
  // the following useEffect we are doing for the redirect functionality because once the user clicks on the
  // redirect button the user gets taken to a new page and here the app unmounts and we want to hold the redirect
  // results that happened on the other page in which the user had signed in, so comimg back to this page, on first
  // load of the page we want to get hold of those redirect results
//   useEffect( () => {
//     // i have to write the following function because the asynce is not working like in the video inside useEffect
//     const fetchingFunc = async () => {
//         const response = await getRedirectResult(auth);
//         console.log(response);

//         if(response){
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//         }
//      }

//      fetchingFunc();
    
//   }, []);



  // following function for the google sign up option has been moved onto sign-in-form component and has
  // modified there for the specific needs of the component
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   // console.log(user);
  // };

  return (
    <div className="authentication-container">

      <SignInForm/>
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
