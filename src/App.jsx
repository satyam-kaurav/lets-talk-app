import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

// Lazy-loaded imports
const Login = lazy(() => import("./screen/Login"));
const ChatPanel = lazy(() => import("./screen/ChatPanel"));
const SignUp = lazy(() => import("./screen/SignUp"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="ChatPanel" element={<ChatPanel />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
