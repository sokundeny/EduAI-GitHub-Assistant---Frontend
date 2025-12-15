import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAssignment } from "@/features/assignment/apis/mutateAssignments";
import { fetchAssignments } from "../apis/fetchAssignments";
import type { Assignment } from "@/shared/types/types";

export const useAssignmentQuery = (classId: number) => {
    return useQuery({
       queryKey: ["assignments", classId], // Fixed typo and added classId
       queryFn: () => fetchAssignments(classId), // Call function with parameter
       enabled: !!classId, // Optional: only fetch when classId is provided
    });
}

export const useCreateAssignment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAssignment,
    onSuccess: (data) => {
      queryClient.setQueryData<Assignment[]>(
      ["assignments", data.classId],
      (old = []) => [...old, data]
    );

    },
  });
};
