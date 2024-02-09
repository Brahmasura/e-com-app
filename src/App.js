import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import SignIn from "./Routes/sign-in/Sign-In.component";



const Shop = () => {
  return (
     <div> 
        <h1>hi i am the shopping page </h1>
     </div> 
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signIn" element={<SignIn/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
