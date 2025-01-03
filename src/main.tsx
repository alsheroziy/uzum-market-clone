import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { CartContextProvider } from "./context/cart.context.tsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <MainLayout>
          <App />
          <ToastContainer />
        </MainLayout>
      </CartContextProvider>
    </BrowserRouter>
  </StrictMode>
);
