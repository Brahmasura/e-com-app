import {  Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import Authentication from "./Routes/authentication/authentication.component";




const Shop = () => {
  return (
     <div> 
        <h1>hi i am the shopping page </h1>
     </div> 
  )
}


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
