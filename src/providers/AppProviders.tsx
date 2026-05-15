import React from "react";
import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";
interface Props {
  children: React.ReactNode;
}
export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
