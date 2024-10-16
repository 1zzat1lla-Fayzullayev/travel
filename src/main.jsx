/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

import ScrollToTop from "./components/ScrollToTop.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentTransfer from "./pages/StudentTransfer.jsx";
import Contacts from "./pages/Contacts.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Question from "./pages/Question.jsx";
import WorkTravel from "./pages/WorkTravel.jsx";
import TRStories from "./pages/TRStories.jsx";
import Destinations from "./pages/Destinations.jsx";
import ApplicationProcess from "./pages/ApplicationProcess.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/student-transfer" exact element={<StudentTransfer />} />
          <Route path="/work-and-travel" exact element={<WorkTravel />} />
          <Route path="/destinations" exact element={<Destinations />} />
          <Route path="/true-stories" exact element={<TRStories />} />
          <Route path="/application" exact element={<ApplicationProcess />} />
          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/question" exact element={<Question />} />
        </Routes>
        <Footer />
      </HashRouter>
    </LanguageProvider>
  </ChakraProvider>
);
