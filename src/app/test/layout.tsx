import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Test",
  description: "A root page of test for Team PROJECT PIPLUP",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main className={`${styles.main} ${notoSansJP.className}`}>{children}</main>
      <footer></footer>
    </>
  );
}
