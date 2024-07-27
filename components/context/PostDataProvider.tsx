"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { PostData } from "@/service/posts";
import {
  postsProps,
  ProviderContextProps,
} from "@/components/interfaces/types/types";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PostDataContext = createContext<ProviderContextProps | undefined>(
  undefined
);

export const PostDataProvider = ({ children }: { children: ReactNode }) => {
  const [postData, setPostData] = useState<postsProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const {
    ref,
    isOpen: showLogin,
    toggleOpen: changeShowLogin,
    close,
  } = useOutsideClick();

  const getPostData = async () => {
    const { response, error } = await PostData.getPostsData("");
    if (response && response.length > 0) {
      setPostData(response);
    }
    if (error) {
      console.log("error");
    }
    setLoading(false);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const values: ProviderContextProps = {
    showLogin,
    changeShowLogin,
    postData,
    loading,
    ref,
    close,
  };

  return (
    <PostDataContext.Provider value={values}>
      {children}
    </PostDataContext.Provider>
  );
};

export const usePostData = (): ProviderContextProps => {
  const context = useContext(PostDataContext);

  if (context === undefined) {
    throw new Error("usePostData must be inside a PostProvider");
  }

  return context;
};
