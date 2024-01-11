"use client";

import { LoginForm } from "@/components/LoginForm";
import { Providers } from "@/components/Providers";
import { RoomList } from "@/components/RoomList";
import { useAPIGetToken } from "@/orval_api/api-auth/api-auth";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("API_KEY") ?? "";
  console.log({ token });

  const headers = request.headers;
  if (token && headers) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return {
    ...request,
    headers,
    baseURL: process.env.EXPO_PUBLIC_API_URL ?? "",
  };
});

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("API_KEY"));
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Providers>
      <div className="">
        {isLoggedIn ? <RoomList /> : <LoginForm onLogin={handleLogin} />}
      </div>
    </Providers>
  );
}
