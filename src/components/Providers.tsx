"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

const queryClient = new QueryClient();

export const Providers: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
//
