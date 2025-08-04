import { Route, Routes } from "react-router";
import MessagePage from "./pages/MessagePage";
import ProtectedRote from "./components/auth/ProtectedRote";
import AuthSystem from "./pages/AuthSystem";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { use, useState } from "react";
import AuthLayout from "./layout/AuthLayout";
import { useContextData } from "./context/context";

function App() {
  const { isLoading } = useContextData();
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUpPage />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot"
          element={
            <AuthLayout>
              <ForgotPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/reset"
          element={
            <AuthLayout>
              <ResetPasswordPage />
            </AuthLayout>
          }
        />

        <Route path="/auth" element={<AuthSystem />} />
        <Route
          path="/messagePage"
          element={
            <ProtectedRote>
              <MessagePage />
            </ProtectedRote>
          }
        />
      </Routes>
    </>
  );
}

export default App;
