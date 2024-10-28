import { ThemeProvider } from "@/context/theme-provider";
import { ReactNode } from "react";

const ThemeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
