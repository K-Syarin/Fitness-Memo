import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  InputText,
  SecondButton,
  PartsButton,
  LinkContainerTop
} from "../components/UIkit/index";
import {LinkContainer} from '../components/index';
import { signUp } from "../reducks/users/operations";

const SignUp = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const fillIn =
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "";
  const addClass = fillIn ? "b-center m-color" : "b-center";

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <>
    <div className="m-center">
      <LinkContainerTop label={"アカウント登録"} />
      <div className={"sign-box sign-border"}>
      <InputText
          label={"ユーザー名"}
          fullWidth={true}
          onChange={inputUsername}
          type={"text"}
          width={"280px"}
        />
        <InputText
          label={"メールアドレス"}
          fullWidth={true}
          onChange={inputEmail}
          type={"email"}
          width={"280px"}
        />
        <InputText
          label={"パスワード"}
          fullWidth={true}
          onChange={inputPassword}
          type={"password"}
          width={"280px"}
        />
        <InputText
          label={"パスワード(再確認)"}
          fullWidth={true}
          onChange={inputConfirmPassword}
          type={"password"}
          width={"280px"}
        />
        <div className={addClass}>
          <SecondButton
            label={"アカウント登録"}
            fullWidth={true}
            onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
          />
        </div>
      </div>
      <LinkContainer label={"ログイン"} buttonLabel={"アカウントをお持ちの方はこちら"} link={"/signin"} />
      <LinkContainer label={"パスワード再設定"} buttonLabel={"パスワードをお忘れの方はこちら"} link={"/reset"} />
      <LinkContainer label={"テストログイン"} buttonLabel={"テストユーザーでログインする"} />
    </div>
    </>
  );
};

export default SignUp;
