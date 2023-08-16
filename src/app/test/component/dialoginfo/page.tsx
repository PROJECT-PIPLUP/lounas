"use client";

import { useState } from "react";

import { DialogInfo } from "@/components/dialogs/DialogInfo";

export default function TestDialogInfo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full h-screen flex flex-col space-y-4">
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！１！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！</p>
        <p>こんにちは！！！！！！！！！！！！！！！！</p>
        <button onClick={() => setIsOpen(!isOpen)}>利用規約はこちら</button>
      </div>
      <DialogInfo header="確認コードが届きません。" isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>
          １．利用目的 本校は、収集した個人情報について、以下の目的のために利用いたします。
          ①成績管理、学籍管理、進路指導、就職活動支援、奨学金管理、課外活動支援など、生徒の指導管理に関する業務のため
          ②成績表送付、学費納入通知、口座情報管理、保護者説明会の運営など、保護者への通知などに関する業務のため
          ③卒業・成績・在籍の証明、調査書発行、同窓会運営など、卒業した生徒との連携に関する業務のため
        </p>
        <p>
          ２．第三者提供 本校は、以下の場合を除いて、個人データを第三者へ提供することはしません。
          ①保護者などから同意を得ている場合 ②法令に基づく場合
          ③人の生命・身体・財産を保護するために必要で、本人から同意を得ることが難しい場合
          ④国の機関や地方公共団体、その委託者などによる法令事務の遂行にあたって協力する必要があり、かつ本人の同意を得ることで事務遂行に影響が生じる可能性がある場合
          ⑤PTA・後援会・同窓会などの活動にかかわる場合
        </p>
        <p>
          ３．開示請求
          貴殿の個人情報について、ご本人には、開示・訂正・削除・利用停止を請求する権利があります。手続きにあたっては、ご本人確認のうえ対応させていただきますが、代理人の場合も可能です。詳細については、以下「個人情報相談窓口」へご連絡ください。
          個人情報相談窓口
        </p>
      </DialogInfo>
    </>
  );
}
