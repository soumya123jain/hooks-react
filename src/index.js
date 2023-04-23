import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { About } from "./View/About";
// import { Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container style={{ backgroundCcolor: "chocolate" }}>
          <Navbar.Brand href="/">Welcome to React Hooks Tutorial</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="/About">
              Implemented By: @ Soumya Jain
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
);
