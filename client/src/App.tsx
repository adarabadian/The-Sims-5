import "./App.css";
import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
    return (
        <div id="app">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
