"use client";
import React from "react";
import { usePostData } from "../context/PostDataProvider";
import useOutsideClick from "@/hooks/useOutsideClick";

const ModelLayout = ({ children }: { children: React.ReactNode }) => {
  const { showLogin } = usePostData();
  if (!showLogin) return null;
  return (
    <div className="fixed backdrop-blur-md w-full h-screen top-0 flex justify-center items-center z-10">
      {children}
    </div>
  );
};

export default ModelLayout;
