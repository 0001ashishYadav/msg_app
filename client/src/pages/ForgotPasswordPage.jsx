import React, { use, useState } from "react";
import FormContainer from "../components/formComponents/FormContainer";
import { ArrowLeft, KeyRound } from "lucide-react";
import Alert from "../components/auth/Alert";
import Input from "../components/formComponents/Input";
import Button from "../components/auth/Button";
import { useContextData } from "../context/context";

const ForgotPasswordPage = () => {
  const { success, errors, forgotForm, setForgotForm } = useContextData();
  return (
    <FormContainer
      icon={<KeyRound className="w-8 h-8 text-white" />}
      iconBg="bg-gradient-to-r from-amber-500 to-orange-600"
      title="Forgot password?"
      subtitle="No worries, we'll send you reset instructions"
    >
      <Alert type="success" message={success} onClose={() => setSuccess("")} />

      <form
        onSubmit={(e) => handleFormSubmit(e, "forgot")}
        className="space-y-6"
      >
        <div>
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={forgotForm.email}
            onChange={(e) =>
              setForgotForm({ ...forgotForm, email: e.target.value })
            }
            error={errors.email}
            autoComplete="email"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            We'll send a password reset link to this email
          </p>
        </div>

        <Button
          type="submit"
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 focus:ring-amber-500"
        >
          Send reset link
        </Button>
      </form>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setCurrentPage("login")}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 flex items-center justify-center mx-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </button>
      </div>
    </FormContainer>
  );
};

export default ForgotPasswordPage;
