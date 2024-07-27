"use client";
import { usePostData } from "@/components/context/PostDataProvider";
import React, { useEffect, useState } from "react";

const HomeController = (props: any) => {
  const { children, ...rest } = props;
  const commonClass =
    "p-4 bg-black-100 border-2 border-black-150 rounded-xl hover:shadow-xl";
  const { postData, changeShowLogin, showLogin, loading } = usePostData();

  const viewProps = {
    loading,
    commonClass,
    postData,
    changeShowLogin,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...rest, ...viewProps });
    }

    return child;
  });

  return <>{childrenWithProps}</>;
};

export { HomeController };
