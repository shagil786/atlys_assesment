"use client";
import React from "react";
import ModelLayout from "./layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClose,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { usePostData } from "../context/PostDataProvider";
import { inputType, modelProps } from "@/components/interfaces/types/types";
import { useModelData } from "../context/ModelProvider";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const ModelPage = () => {
  const { ref, changeShowLogin, close } = usePostData();
  const {
    item,
    onChangeType,
    onShowPassword,
    showPassword,
    onChange,
    addFormData,
    value,
  } = useModelData();
  return (
    <ModelLayout>
      <div
        className="relative bg-black-1000 p-4 py-10 rounded-md md:w-[50vmin] w-4/5 border border-gray-400"
        ref={ref}
        onClick={changeShowLogin}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-0 p-2 rounded-full bg-black right-2 top-2 md:right-4 md:top-4 cursor-pointer"
          onClick={close}
        />
        <h2 className="text-center text-gray-400">{item?.header}</h2>
        <h1 className="text-center font-semibold text-xl">{item?.subHeader}</h1>
        <div className="flex flex-col gap-6 p-4 pt-10">
          {item?.inputHandler?.map((each: inputType, index: number) => (
            <div
              className="relative flex flex-col gap-2"
              key={`${index}_${each?.name}`}
            >
              <label htmlFor={each?.value} className="text-sm text-gray-300">
                {each?.name}
              </label>
              <input
                placeholder={each?.label}
                name={each?.value}
                className="bg-black-1000 border border-gray-500 h-12 px-3 text-gray-300 placeholder:text-gray-500 rounded-md"
                type={showPassword ? each?.type : ""}
                onChange={onChange}
                value={value?.[each?.value] ?? ""}
              />
              {each?.type === "password" && (
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute right-4 translate-y-1/3 top-1/2 cursor-pointer text-gray-300"
                  onClick={onShowPassword}
                />
              )}
            </div>
          ))}
          <button
            className="text-white bg-blue-500 p-2 px-10 rounded-md hover:bg-blue-400 active:translate-y-0.5 mt-1"
            onClick={addFormData}
          >
            {item?.button}
          </button>
        </div>
        <div
          className="flex gap-1 items-center px-4 text-sm cursor-pointer"
          onClick={onChangeType}
        >
          <p className="text-gray-400">{item?.redirect}</p>
          <p>{item?.redirectTo}</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </ModelLayout>
  );
};

export default ModelPage;
