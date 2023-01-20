import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Prompt } from "@next/font/google";

const prompt = Prompt({
  weight: ["500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={prompt.className}>
    <Component {...pageProps} />
  </main>;
}
