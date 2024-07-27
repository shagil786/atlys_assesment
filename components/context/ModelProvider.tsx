"use client";
import {
  formDataProps,
  itemsProps,
  ModelContextProps,
} from "@/components/interfaces/types/types";
import React, { createContext, useContext, useState } from "react";

const registerData: itemsProps = {
  header: "SIGN UP",
  subHeader: "Create an account to continue",
  inputHandler: [
    { name: "Email", label: "Enter your email", value: "email", type: "email" },
    {
      name: "Username",
      label: "Choose a preferred username",
      value: "username",
      type: "text",
    },
    {
      name: "Password",
      label: "Choose a strong password",
      value: "password",
      type: "password",
    },
  ],
  button: "Continue",
  others: null,
  redirect: "Alreay have an account?",
  redirectTo: "Login",
};

const loginData: itemsProps = {
  header: "WELCOME BACK",
  subHeader: "Log into your account",
  inputHandler: [
    {
      name: "Email or Username",
      label: "Enter your email or username",
      value: "email_username",
      type: "email",
    },
    {
      name: "Password",
      label: "Choose your password",
      value: "password",
      type: "password",
    },
  ],
  button: "Login now",
  others: "Forgot Password?",
  redirect: "Not regustered yet?",
  redirectTo: "Register",
};

const ModelContext = createContext<ModelContextProps | undefined>(undefined);

export const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [register, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState<formDataProps>();

  const onChangeType = () => {
    setRegister((prev) => !prev);
  };

  const onShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData: any) => {
      const updatedData = { ...prevData, [name]: value };

      if (value.trim() === "") {
        const { [name]: _, ...newData } = updatedData;
        return newData;
      }

      return updatedData;
    });
  };

  const addFormData = () => {
    console.log(formData);
    // add function to submit the data
  };

  const values: ModelContextProps = {
    onChangeType,
    item: register ? registerData : loginData,
    onShowPassword,
    showPassword,
    onChange,
    addFormData,
    value: formData!,
  };

  return (
    <ModelContext.Provider value={values}>{children}</ModelContext.Provider>
  );
};

export const useModelData = (): ModelContextProps => {
  const context = useContext(ModelContext);

  if (context === undefined) {
    throw new Error("use Model Data should be inside ModelContext");
  }

  return context;
};
