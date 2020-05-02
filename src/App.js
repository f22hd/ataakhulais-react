import React from "react";
import "./App.css";
import LandingPage from "./screens/landing-page";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import LoadingHeaderIndicator from "./components/loading-header-indicator";
import { connect } from "react-redux";

function App({ isLoading }) {
  return (
    <div>
      {isLoading && (
        <div className="loading-indicator-container">
          <LoadingHeaderIndicator />
        </div>
      )}

      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default connect((isLoading) => {
  return {
    isLoading,
  };
})(App);
