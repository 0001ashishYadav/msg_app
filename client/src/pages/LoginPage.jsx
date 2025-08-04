import React, { useState } from "react";
import FormContainer from "../components/formComponents/FormContainer";
import Alert from "../components/auth/Alert";
import Input from "../components/formComponents/Input";
import Button from "../components/auth/Button";
import { User } from "lucide-react";
import SocialLoginButtons from "../components/auth/SocialLoginButtons";
import { useContextData } from "../context/context";
import { handleFormSubmit } from "../validation/formValidation";

const LoginPage = () => {
  const {
    setCurrentPage,
    errors,
    setSuccess,
    success,
    loginForm,
    setLoginForm,
  } = useContextData();
  return (
    <FormContainer
      icon={<User className="w-8 h-8 text-white" />}
      iconBg="bg-gradient-to-r from-indigo-600 to-purple-600"
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <Alert type="success" message={success} onClose={() => setSuccess("")} />

      <form
        onSubmit={(e) => handleFormSubmit(e, "login")}
        className="space-y-6"
      >
        <div className="space-y-4">
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            error={errors.email}
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            error={errors.password}
            showPasswordToggle={true}
            passwordField="loginPassword"
            autoComplete="current-password"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={loginForm.remember}
              onChange={(e) => {
                const checked = e.target.checked;
                setLoginForm({ ...loginForm, remember: checked });
              }}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage("forgot")}
            className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500"
        >
          Sign in
        </Button>
      </form>

      <SocialLoginButtons />

      <div className="text-center">
        <span className="text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
        </span>
        <button
          type="button"
          onClick={() => setCurrentPage("signup")}
          className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors duration-200"
        >
          Sign up
        </button>
      </div>
    </FormContainer>
  );
};

export default LoginPage;
