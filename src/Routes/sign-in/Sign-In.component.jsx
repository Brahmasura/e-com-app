import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase.utility";
import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(user);
    }

    return (

        <div>
            <h1>this is the Sign-In page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;