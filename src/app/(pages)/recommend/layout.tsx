import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: {
    default: "Recommend",
    template: "%s - Recommend | lounas",
  },
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main className={`${styles.main} ${notoSansJP.className}`}>{children}</main>
      <footer></footer>
    </>
  );
}
