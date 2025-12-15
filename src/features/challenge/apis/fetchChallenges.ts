import type { Challenge } from "@/shared/types/types";

export const fetchChallenges = (assignmentId: number): Promise<Challenge[]> =>
  new Promise((resolve) =>
    setTimeout(() => {
      // create 3 challenges per assignment
      const challenges: Challenge[] = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        assignmentId,
        content: `Challenge ${i + 1} content for assignment ${assignmentId}`,
      }));
      resolve(challenges);
    }, 1000)
  );
