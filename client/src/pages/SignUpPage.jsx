import React, { useState } from "react";
import FormContainer from "../components/formComponents/FormContainer";
import { UserPlus } from "lucide-react";
import Alert from "../components/auth/Alert";
import Input from "../components/formComponents/Input";
import PasswordStrengthIndicator from "../components/auth/PasswordStrengthIndicator";
import Button from "../components/auth/Button";
import SocialLoginButtons from "../components/auth/SocialLoginButtons";
import { useContextData } from "../context/context";

const SignUpPage = () => {
  const { setSuccess, success, errors, signupForm, setSignupForm } =
    useContextData();
  return (
    <FormContainer
      icon={<UserPlus className="w-8 h-8 text-white" />}
      iconBg="bg-gradient-to-r from-purple-600 to-pink-600"
      title="Create account"
      subtitle="Join us and start your journey"
    >
      <Alert type="success" message={success} onClose={() => setSuccess("")} />

      <form
        onSubmit={(e) => handleFormSubmit(e, "signup")}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First name"
            placeholder="John"
            value={signupForm.firstName}
            onChange={(e) =>
              setSignupForm({ ...signupForm, firstName: e.target.value })
            }
            error={errors.firstName}
            autoComplete="given-name"
          />
          <Input
            label="Last name"
            placeholder="Doe"
            value={signupForm.lastName}
            onChange={(e) =>
              setSignupForm({ ...signupForm, lastName: e.target.value })
            }
            error={errors.lastName}
            autoComplete="family-name"
          />
        </div>

        <Input
          label="Email address"
          type="email"
          placeholder="john@example.com"
          value={signupForm.email}
          onChange={(e) =>
            setSignupForm({ ...signupForm, email: e.target.value })
          }
          error={errors.email}
          autoComplete="email"
        />

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            value={signupForm.password}
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
            error={errors.password}
            showPasswordToggle={true}
            passwordField="signupPassword"
            autoComplete="new-password"
          />
          <PasswordStrengthIndicator password={signupForm.password} />
        </div>

        <Input
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
          value={signupForm.confirmPassword}
          onChange={(e) =>
            setSignupForm({ ...signupForm, confirmPassword: e.target.value })
          }
          error={errors.confirmPassword}
          showPasswordToggle={true}
          passwordField="confirmPassword"
          autoComplete="new-password"
        />

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              checked={signupForm.terms}
              onChange={(e) =>
                setSignupForm({ ...signupForm, terms: e.target.checked })
              }
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
              id="terms-agreement"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms-agreement"
              className="text-gray-700 dark:text-gray-300"
            >
              I agree to the{" "}
              <button
                type="button"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 underline"
                onClick={() => alert("Terms of Service would open here")}
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 underline"
                onClick={() => alert("Privacy Policy would open here")}
              >
                Privacy Policy
              </button>
            </label>
          </div>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.terms}
          </p>
        )}

        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500"
        >
          Create account
        </Button>
      </form>

      <SocialLoginButtons />

      <div className="text-center">
        <span className="text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
        </span>
        <button
          type="button"
          onClick={() => setCurrentPage("login")}
          className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium transition-colors duration-200"
        >
          Sign in
        </button>
      </div>
    </FormContainer>
  );
};

export default SignUpPage;
