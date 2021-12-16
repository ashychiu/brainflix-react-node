import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/videos/:videoId" component={HomePage} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
