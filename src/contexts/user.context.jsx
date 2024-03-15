/* now i have already used the context functionality in the gradabroad site
here we are making the context in a separate place in a bit different style
, apart from that, the concepts are the same */

import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/Firebase.utility";

// now i need to understand do we really need to pass the values inside the createContext, cause we are
// already doing that in the userProvider function
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// reducer functionality begins

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
// The above object is to store the user action types

// now below is where we will define the initial values of the state

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log("dispatched");
  console.log("action", action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

// reducer functionality ends

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log("current user", currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  // above we will be using the useReducer hook

  // now here we are making the values that we want to be used by other low tier components, avoiding prop drilling
  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // we are writing the following code so that once the userProvider mounts we want the user to automatically sign out
  // signOutUser();
  // but we just used that once to change the default auth user State

  // now this useEffect hook we are using for the first load of the page
  // we are using this mainly for the onAuthStateChanged method and we will be
  // passing a callback function to it which will get invoked on every auth state change i.e.
  // when a user signs in or a user signs out
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
