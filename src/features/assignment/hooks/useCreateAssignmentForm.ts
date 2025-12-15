import { useState } from "react";
import { useCreateAssignment } from "./useAssignmentQuery";
import { useAssignmentUIStore } from "../stores/useAssignmentStore";

export const useCreateAssignmentForm = (classId : number) => {
  const [title, setTitle] = useState("");
  const { mutate: createAssignment, isError, isPending: isLoading } = useCreateAssignment();
  const { setCreateDialogOpen} = useAssignmentUIStore()

  console.log("update id:" , classId);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    createAssignment({classId, title},
      {
        onSuccess: () => {
          setTitle("");
          setCreateDialogOpen(false);
        }
      }
    );
  };

  return {
    title,
    setTitle,
    isError,
    isLoading,
    handleSubmit,
  };
};