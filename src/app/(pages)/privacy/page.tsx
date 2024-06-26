"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

import type { DataAgreementRequest } from "@/app/api/v-beta/user/data-agreement";
import { RectButton } from "@/components/buttons/RectButton";
import { DialogInfo } from "@/components/dialogs/DialogInfo";
import { LottiePrivacy } from "@/components/lottie";
import { fetcher } from "@/lib/swr";

import styles from "./page.module.scss";

export default function Page() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data, error, isLoading } = useSWR<DataAgreementRequest>(
    "/api/v-beta/user/data-agreement",
    fetcher
  );

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    await fetch("/api/v-beta/user/data-agreement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataUsageAgreed: e.currentTarget.value ? true : false,
      } as DataAgreementRequest),
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Error!", res.status);
          throw new Error(res.statusText);
        }
        console.log(
          "%cWe appreciate for your agreement! 🚀",
          "color: #fff; font-size: 1.25rem; background-color: #07f; padding: 0.25rem 0.5rem; border-radius: 0.5rem;"
        );
      })
      .catch((err) => console.error("Error!", err))
      .finally(() => {
        router.push("/webapp/home");
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>データ利用</h1>
        <div className={styles.description}>
          <p>このアプリではユーザーがより便利にお使いいただくために情報提供をお願いしています。</p>
          <button className={styles.dialoginfo} onClick={() => setIsOpen((prev) => !prev)}>
            <span>私たちが考えるプライバシーについて詳しく知る</span>
          </button>
        </div>
        <div className={styles.animation}>
          <LottiePrivacy />
        </div>
        <div className={styles.choice}>
          <div className={styles.query}>
            <span>同意いただけない場合は</span>
            <span>一部の機能に制限がございます。</span>
          </div>
          <div className={styles.button}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <RectButton color="red" onClick={handleClick}>
              同意しない
            </RectButton>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <RectButton color="blue" onClick={handleClick} value="agreed">
              同意する
            </RectButton>
          </div>
          <div className={styles.status}>
            <span className={styles.text}>現在のあなたの設定：</span>
            {isLoading && !data ? (
              !error ? (
                <span className={styles.agreed}>読み込み中...</span>
              ) : (
                <span className={styles.agreed}>エラー</span>
              )
            ) : (
              <span className={styles.agreed}>{data ? "同意する" : "同意しない"}</span>
            )}
          </div>
        </div>
      </div>
      <DialogInfo title="私たちが考えるプライバシー" isOpen={isOpen} setIsOpen={setIsOpen}>
        <article className="grid h-full w-full gap-8 text-sm">
          <section className="grid gap-3">
            <p>
              私たちは、より良いユーザーエクスペリエンスを提供するために一部のデータを収集しています。
            </p>
            <p>このデータは新機能の開発・レコメンドの最適化に使用されます。</p>
            <p>私たちの考えるデータ利用は以下です。</p>
          </section>
          <ol className="mx-auto grid w-[90%] list-decimal gap-4">
            <li>
              <div className="grid gap-1">
                <p>アクティビティの収集</p>
                <p>
                  私たちは、ユーザーの選択・データを収集することでレコメンドの最適化を行います。
                </p>
                <p>また、個人を特定できる情報は収集いたしません。</p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <p>サードパーティとのデータ共有</p>
                <p>
                  私たちは、信頼できるパートナーとデータを分析することでレコメンドの最適化・新機能の実装を行います。
                </p>
                <p>ただし、個人を特定できる情報は共有いたしません。</p>
              </div>
            </li>
          </ol>
          <section className="grid gap-2">
            <p>プライバシーとセキュリティは、私たち、また、お客様にとって非常に重要です。</p>
            <p>私たちは収集されたデータを厳格に管理し、第三者には適切な 安全保護措置を講じます。</p>
          </section>
          <section>
            <p>
              データ利用の同意は任意であり、アプリ内の設定からオプトイン・オプトアウトできます。
            </p>
          </section>
          <section>
            <p>ご不明な点や懸念事項がありましたら、いつでもお問い合わせください。</p>
          </section>
        </article>
      </DialogInfo>
    </>
  );
}
