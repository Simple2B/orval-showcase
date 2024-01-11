import { useAPIGetToken } from "@/orval_api/api-auth/api-auth";
import React, { useState } from "react";

type Props = {
  onLogin: () => void;
};

export const LoginForm = ({ onLogin }: Props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useAPIGetToken({
    mutation: {
      onSuccess: (res) => {
        localStorage.setItem("API_KEY", res.data.access_token);
        onLogin();
      },
    },
  });

  const handleLogin = () => {
    mutate({ data: { username: userName, password } });
  };

  return (
    <div className="flex flex-col gap-1 w-48 bg-slate-400 p-10 justify-center">
      <input
        className="text-black"
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="text-black"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};
