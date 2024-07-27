import Image from "next/image";
import React from "react";
import postIcon from "../../../../public/postIcon.svg";
import icon from "../../../../public/💬.png";

const CreatePost = (props: any) => {
  const { commonClass, value, handleChange } = props;
  return (
    <div className={`${commonClass} flex flex-col gap-4`}>
      <h2>Create Post</h2>
      <div className="relative rounded w-full bg-black h-20 rounded-md">
        <input
          className="border-none focus:border-none focus:outline-none w-full active:border-none h-full bg-black text-gray-200 pl-20 rounded-md"
          value={value}
          onChange={handleChange}
          placeholder="How are you feeling today?"
        />
        <div className="absolute -translate-y-1/2 top-1/2 left-4 w-12 h-12 rounded-full bg-black-1000 z-1" />
        <Image
          src={icon}
          alt="icon"
          width={18}
          className="absolute -translate-y-1/2 top-1/2 left-8 z-10"
        />
      </div>
      <button className="text-white bg-blue-500 w-fit ml-auto mr-0 p-2 px-10 rounded-md hover:bg-blue-400 active:translate-y-0.5">
        Post
      </button>
    </div>
  );
};

export default CreatePost;
