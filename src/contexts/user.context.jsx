/* now i have already used the context functionality in the gradabroad site
here we are making the context in a separate place in a bit different style
, apart from that, the concepts are the same */

import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/Firebase.utility";

// now i need to understand do we really need to pass the values inside the createContext, cause we are
// already doing that in the userProvider function
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // now here we are making the values that we want to be used by other low tier components, avoiding prop drilling
  const [currentUser, setCurrentUser] = useState(null);
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
      if(user){
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
