import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useState } from "react";
import InputDatePicker from "../atoms/InputDatePicker";
import { SignupFormValue } from "../../../type/SignupForm";

/* eslint-disable max-lines-per-function */
const GeneralLogin = () => {
  const [showPassWord, setShowPassWord] = useState(false);

  const onToggleShowPassWord = () => {
    setShowPassWord((prev) => !prev);
  };
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm<SignupFormValue>();
  return (
    <form
      onSubmit={handleSubmit((data: SignupFormValue) => console.log(data))}
      className="flex flex-col items-center justify-center h-full"
    >
      <div className="w-10/12 mt-4">
        <label htmlFor="signupEmail" className="mt-5 text-left">
          <p className="my-2 font-regular">이메일</p>
        </label>
        <div className="flex justify-between items-center">
          <input
            id="signupEmail"
            type="email"
            placeholder="이메일을 입력해 주세요"
            className="signup-input w-full"
            {...register("email")}
          />
          {/* 이메일 인증 로직 */}
          <button
            className="primary-btn w-24 h-10 m-2"
            onClick={() => {
              const emailValue = getValues("email");
              console.log(emailValue);
            }}
          >
            인증하기
          </button>
        </div>
      </div>
      <div className="w-10/12 mt-4 grid grid-flow-col gap-2">
        <div>
          <label htmlFor="name" className="mt-5 text-left">
            <p className="my-2 font-regular">이름</p>
          </label>
          <div className="flex justify-between items-center">
            <input
              id="name"
              type="text"
              placeholder="이름을 입력해 주세요"
              className="signup-input w-full"
              {...register("name")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="nickName" className="mt-5 text-left">
            <p className="my-2 font-regular">닉네임</p>
          </label>
          <input
            id="nickName"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            className="signup-input w-full"
            {...register("nickName")}
          />
        </div>
      </div>
      <div className="w-10/12 mt-4 grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="birth" className="mt-5 text-left">
            <p className="my-2 font-regular">생년월일</p>
          </label>
          <div className="flex justify-between items-center">
            <InputDatePicker control={control} />
          </div>
        </div>
        <div>
          <p className="my-2 font-regular">성별</p>
          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <input {...register("gender")} id="male" type="radio" value={1} className="me-2" />
              <label htmlFor="male">남</label>
            </div>
            <div>
              <input {...register("gender")} id="female" type="radio" value={2} className="me-2" />
              <label htmlFor="female">여</label>
            </div>
            <div>
              <input {...register("gender")} id="none" type="radio" value={0} className="me-2" />
              <label htmlFor="none">선택안함</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mt-4">
        <label htmlFor="signupPassword" className="mt-5 text-left">
          <p className="my-2 font-regular ">비밀번호</p>
        </label>
        <div className="relative">
          <input
            id="signupPassword"
            type={showPassWord ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            className="w-full signup-input"
            {...register("password")}
          />
          <div
            className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-2"
            onClick={onToggleShowPassWord}
          >
            {showPassWord ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
      </div>
      <div className="text-center w-10/12 mt-11">
        <button
          type="submit"
          className="bg-mainDark w-full p-3 rounded-md text-white font-regular"
          disabled={isSubmitting}
        >
          회원가입
        </button>
      </div>
    </form>
  );
};
export default GeneralLogin;