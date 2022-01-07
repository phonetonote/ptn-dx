import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme } from "../styles/vars.css";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
