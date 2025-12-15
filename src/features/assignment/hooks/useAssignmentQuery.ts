import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAssignment } from "@/features/assignment/apis/mutateAssignments";
import { fetchAssignments } from "../apis/fetchAssignments";

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
        mutationFn: (params: { classId: number; title: string }) => 
            createAssignment(params.classId, params.title), // Call function with parameters
        onSuccess: (data, variables) => {
            // Invalidate specific query with classId
            queryClient.invalidateQueries({ 
                queryKey: ["assignments", variables.classId] 
            });
        }
    });
}