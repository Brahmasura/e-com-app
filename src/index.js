import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/categories.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* also note that here i have used the browser router in the index.js and not in the app.js file */}
    <BrowserRouter basename="/e-com-app">
      {/* now here is where we are using the UserProvider */}
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
      {/* now as we can see that the app compo is wrapped inside the userProvider and hence it can access the values inside it */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
