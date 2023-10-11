import prisma from "@/lib/prisma";
import { verifyUuid } from "@/lib/verifyId";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const userId = params.id;

  const isIdValid = verifyUuid(userId);
  if (!isIdValid) return isIdValid;

  // TODO:user auth

  const visitHistories = await prisma.visitHistory.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const today = new Date();

  // performance？？？？？

  // const visitedBefore = visitHistories.filter(
  //   (history) => history.createdAt.getMonth() < today.getMonth()
  // );
  // const visitedThisMonth = visitHistories.filter(
  //   (history) => history.createdAt.getMonth() == today.getMonth()
  // );

  // const visitedBefore: VisitHistory[] = [];
  // const visitedThisMonth: VisitHistory[] = [];
  // visitHistories.forEach((history) => {
  //   if (history.createdAt.getMonth() < today.getMonth()) {
  //     visitedBefore.push(history);
  //   } else if (history.createdAt.getMonth() == today.getMonth()) {
  //     visitedThisMonth.push(history);
  //   }
  // });
  // const monthlyDiscoveries = visitedThisMonth.map((history) => {! visitedBefore.find((before) => before.dishId == history.dishId)});

  type VisitIdDictionary = Record<string, number>;
  const visitedBefore: VisitIdDictionary = {};
  const visitedThisMonth: string[] = [];

  visitHistories.forEach((history) => {
    if (history.createdAt.getMonth() < today.getMonth()) {
      visitedBefore[history.dishId] = 1;
    } else if (history.createdAt.getMonth() == today.getMonth()) {
      visitedThisMonth.push(history.dishId);
    }
  });

  const monthlyDiscoveries = visitedThisMonth.filter((dishId) => !visitedBefore[dishId]);

  return new Response(JSON.stringify(monthlyDiscoveries.length), { status: 200 });
}