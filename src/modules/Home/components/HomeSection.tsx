import React from "react";
import HomeTitle from "./HomeTitle";
import CreatePost from "./CreatePost";
import { HomeSectionProps, postsProps } from "@/src/interfaces/types/types";
import Posts from "./Posts";
import Loader from "@/components/loader/Loader";

const HomeSection: React.FC<HomeSectionProps> = (props) => {
  const { loading, postData, commonClass, changeShowLogin } = props;
  return (
    <div
      className="flex flex-col h-full gap-8 w-full md:w-[62vmin]"
      onClick={changeShowLogin}
    >
      <HomeTitle />
      <CreatePost {...props} />
      {loading ? (
        <Loader />
      ) : (
        postData?.map((post: postsProps, index: number) => (
          <Posts
            key={`${index}_${post?.name}_${post?.created_at}`}
            commonClass={commonClass}
            {...post}
          />
        ))
      )}
    </div>
  );
};

export { HomeSection };
