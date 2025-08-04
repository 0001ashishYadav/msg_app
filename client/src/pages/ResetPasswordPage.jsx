import React, { use, useState } from "react";
import FormContainer from "../components/formComponents/FormContainer";
import { ArrowLeft, Shield } from "lucide-react";
import Alert from "../components/auth/Alert";
import Input from "../components/formComponents/Input";
import PasswordStrengthIndicator from "../components/auth/PasswordStrengthIndicator";
import Button from "../components/auth/Button";
import { useContextData } from "../context/context";

const ResetPasswordPage = () => {
  const { success, errors, resetForm, setResetForm } = useContextData();
  return (
    <FormContainer
      icon={<Shield className="w-8 h-8 text-white" />}
      iconBg="bg-gradient-to-r from-green-500 to-teal-600"
      title="Reset password"
      subtitle="Enter your new password below"
    >
      <Alert type="success" message={success} onClose={() => setSuccess("")} />

      <form
        onSubmit={(e) => handleFormSubmit(e, "reset")}
        className="space-y-6"
      >
        <div>
          <Input
            label="New password"
            type="password"
            placeholder="Enter new password"
            value={resetForm.password}
            onChange={(e) =>
              setResetForm({ ...resetForm, password: e.target.value })
            }
            error={errors.password}
            showPasswordToggle={true}
            passwordField="resetPassword"
            autoComplete="new-password"
          />
          <PasswordStrengthIndicator password={resetForm.password} />
        </div>

        <Input
          label="Confirm new password"
          type="password"
          placeholder="Confirm new password"
          value={resetForm.confirmPassword}
          onChange={(e) =>
            setResetForm({ ...resetForm, confirmPassword: e.target.value })
          }
          error={errors.confirmPassword}
          showPasswordToggle={true}
          passwordField="resetConfirmPassword"
          autoComplete="new-password"
        />

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
            Password requirements:
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <li>• At least 8 characters long</li>
            <li>• Contains uppercase and lowercase letters</li>
            <li>• Contains at least one number</li>
            <li>• Contains at least one special character</li>
          </ul>
        </div>

        <Button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700 focus:ring-green-500"
        >
          Update password
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

export default ResetPasswordPage;
