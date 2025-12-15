import { useQuery } from "@tanstack/react-query";
import { fetchChallenges } from "../apis/fetchChallenges";

export const useChallenge = (assignmentId: number | null) => {
  return useQuery({
    queryKey: ["challenge", assignmentId],
    queryFn: () => fetchChallenges(assignmentId!),
    enabled: !!assignmentId, // only fetch if assignmentId exists
  });
};
