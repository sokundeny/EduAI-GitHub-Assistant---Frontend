import { useState } from "react";
import { useCreateAssignment } from "./useAssignmentQuery";

export const useCreateAssignmentForm = ( classId : number) => {
  const [title, setTitle] = useState("");
  const { mutate: createAssignment, isError, isPending: isLoading } = useCreateAssignment();

  console.log("update id:" , classId);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    createAssignment({classId, title});
    setTitle("");
  };

  return {
    title,
    setTitle,
    isError,
    isLoading,
    handleSubmit,
  };
};