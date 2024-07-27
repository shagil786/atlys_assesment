import { postsProps } from "@/components/interfaces/types/types";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Posts: React.FC<postsProps & { commonClass: string }> = (props) => {
  const {
    commonClass,
    user_image,
    name,
    created_at,
    isEdited,
    post,
    emoji,
    comments,
  } = props;
  return (
    <div className={`${commonClass} flex flex-col gap-2`}>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src={user_image}
            alt="user_image"
            className="rounded-full h-12 w-12 object-cover"
          />
          <div className="flex flex-col justify-cebter">
            <p>{name}</p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>{created_at}</span>
              {isEdited && (
                <>
                  <p className="w-1 h-1 bg-gray-400 rounded-full inline-block" />
                  <span>Edited</span>
                </>
              )}
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
      </div>
      <div className="rounded w-full bg-black h-20 flex gap-4 items-center rounded-md h-auto p-4 text-left">
        <span className="bg-black-1000 p-3 rounded-full">{emoji}</span>
        <span>{post}</span>
      </div>
      <div className="flex gap-2 items-center text-gray-400 text-sm cursor-pointer">
        <FontAwesomeIcon icon={faMessage} />
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

export default Posts;
