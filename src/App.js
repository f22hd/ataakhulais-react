import React from "react";
import "./App.css";
import LandingPage from "./screens/landing-page";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
