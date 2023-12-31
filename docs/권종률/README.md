## 0904

![image](https://github.com/KwonJongryul/mirror/assets/122791001/f9ebb79f-2021-46b7-a53a-ea1a757dce59)
랭킹 피그마 추가, react 쿼리, react zustand

## 0905
![랭킹](https://github.com/KwonJongryul/mirror/assets/122791001/07294c88-7a97-42e3-9073-6a05aa1e60ae)
![랭킹(그룹)](https://github.com/KwonJongryul/mirror/assets/122791001/97e816e5-7794-4b4e-b813-397027400bf0)
![랭킹(그룹)-1](https://github.com/KwonJongryul/mirror/assets/122791001/7def0dca-0687-456a-8868-12a4530eee24)
![image](https://github.com/KwonJongryul/mirror/assets/122791001/26021aaa-ee98-4cab-b7ca-3a871507da65)

랭킹 피그마 수정, 개발 헤더 제작

## 0906
![image](https://github.com/KwonJongryul/mirror/assets/122791001/af806b2b-d466-4343-8ace-816f34a0f256)

로그인폼 작성

## 0907
![image](https://github.com/KwonJongryul/mirror/assets/122791001/b31ae176-3dd6-4a74-862b-80dd89c4af15)
회원가입폼 작성

## 0908
![image](https://github.com/KwonJongryul/mirror/assets/122791001/5f2c31b3-629b-404f-a84d-28a97f5378f8)
회원가입폼 작성중

## 0911
![image](https://github.com/KwonJongryul/mirror/assets/122791001/4526386f-ae34-4341-bd04-5765d0ac482e)
![image](https://github.com/KwonJongryul/mirror/assets/122791001/fa71f35e-6729-4343-afa8-55050fe9fd57)
회원가입, 로그인 폼 완성, 애니메이션 완성

## 0912
![image](https://github.com/KwonJongryul/mirror/assets/122791001/a79fbc58-390b-4a96-924e-fb34df1339f7)
헤더 프로필 사진, 드랍메뉴 추가

## 0913
![image](https://github.com/KwonJongryul/mirror/assets/122791001/dfe101c0-e603-4b67-ac0d-855c3bf08df1)
![image](https://github.com/KwonJongryul/mirror/assets/122791001/655cd37c-07d7-46b6-b389-7350d52303c9)
react hook form을 이용한 회원가입폼 유효성 검사
회원정보 변경 modal에 react-cropper 추가

## 0914
로그인, 회원가입 구현
회원가입시 제한사항 모두 적용
 - 제한사항
    비밀번호 8~16자, 숫자, 특수문자 혼용
    이름 숫자글자 혼용불가
    이메일 재발송 기능 추가
    닉네임 중복 제출 불가 기능 추가, 재검사 추가

## 0917
로그인, 로그아웃 변경된 로직 맞춰서 새로 구현
```
import { AxiosError, AxiosResponse, AxiosInstance } from "axios";
import { toast } from "react-toastify";
import useStore from "../store/store";

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const { accessToken } = useStore.getState();
      const { refreshToken } = useStore.getState();
      if (accessToken) {
        config.headers!["Authorization"] = `Bearer ${accessToken}`;
        config.headers!["RefreshToken"] = refreshToken;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터를 설정합니다.
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const { accessToken } = useStore.getState();
      const { setAccessToken } = useStore.getState();
      const { setRefreshToken } = useStore.getState();
      const { setUserInfo } = useStore.getState();
      const { config } = error;
      const { data } = error.response!;
      const { message } = data as { message: string };

      if (message === "REISSUE_ACCESS_TOKEN") {
        const originRequest = config!;
        setAccessToken(error.response!.headers.authorization);

        originRequest!.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originRequest);
      } else if (message === "ACCESS_DENIED") {
        return toast.error("권한이 부족합니다.");
      } else {
        console.log(message);
        window.location.assign("/login");
        setAccessToken(null);
        setRefreshToken(null);
        setUserInfo(null);
        return toast.error("세션이 만료되었습니다. 다시 로그인 해주세요.");
      }
    }
  );

  return instance;
};

```
인터셉터를 이용한 accessToken 재발급 구현
![image](https://github.com/KwonJongryul/mirror/assets/122791001/2236f70c-ae51-4601-9215-b3cbd941c899)
회원정보 변경 레이아웃 구현
