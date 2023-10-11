"use client";

import { useRouter } from "next/navigation";

import type { Dish } from "@/app/api/v-beta/dish/[id]";
import { VisitRegisterRequest } from "@/app/api/v-beta/user/visit/new";
import { RectButton } from "@/components/buttons/RectButton";

export function DecideButton({ dish }: { dish: Dish }) {
  const router = useRouter();

  // ここに行くボタンを押したときの処理
  const handleClick = async () => {
    const visitLogPayload: VisitRegisterRequest = {
      dishId: dish.id,
      date: new Date(),
    };
    await fetch(`/api/v-beta/user/visit/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitLogPayload),
    });

    /**
     * @todo エラーが起きた場合どうするか？
     * 現在: エラーが起きても、とりあえず次のページに遷移する→履歴が登録されない
     * ゆくゆく: エラーが起きたら、「記録できませんでした」「もう一度試す」「記録せずナビを表示する」を表示する
     */
    router.push(`/restaurant/${dish.restaurant.id}/navi`);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <RectButton color="blue" onClick={handleClick}>
      ここに行く
    </RectButton>
  );
}
