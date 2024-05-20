import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import TimeTable from "./components/TimeTable";
import Exam from "./components/Exam";
import { ThemeProvider } from "./Contexts/ThemeContext";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
import Register from "./components/Register";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <SignedIn>
                    <Home />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="timetable"
              element={
                <>
                  <SignedIn>
                    <TimeTable />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="exam"
              element={
                <>
                  <SignedIn>
                    <Exam />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="change-password"
              element={
                <>
                  <SignedIn>
                    <ChangePassword />
                  </SignedIn>
                  <SignedOut>
                    <Navigate to="/login" />
                  </SignedOut>
                </>
              }
            />

            <Route
              path="register"
              element={
                <>
                  <SignedOut>
                    <Register />
                  </SignedOut>
                  <SignedIn>
                    <Navigate to="/" />
                  </SignedIn>
                </>
              }
            />
            <Route
              path="login"
              element={
                <>
                  <SignedOut>
                    <Login />
                  </SignedOut>
                  <SignedIn>
                    <Navigate to="/" />
                  </SignedIn>
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
