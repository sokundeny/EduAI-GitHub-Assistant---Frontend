import React from "react";
import { useAssignmentQuery } from "../hooks/useAssignmentQuery";
import CreateAssignmentForm from "./CreateAssignmentForm";
import { useGlobalStore } from "@/shared/store/useStore";

const AssignmentList: React.FC = () => {
  const selectedClassId = useGlobalStore((s) => s.selectedClassId);

  // Only call the query if a class is selected
  const { data: assignments, isLoading, isError } = useAssignmentQuery(
    selectedClassId!
  );

  if (!selectedClassId) return <p className="p-4">Select a class to see assignments</p>;
  if (isLoading) return <p className="p-4">Loading assignments...</p>;
  if (isError) return <p className="p-4 text-red-500">Failed to load assignments</p>;

  return (
    <div className="p-4 flex flex-col gap-4 h-full overflow-auto">
      <div className="flex flex-col gap-2 justify-between items-center">
        <h2 className="text-lg font-bold">Assignments</h2>
        <CreateAssignmentForm classId={selectedClassId} />
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {assignments?.map((assignment) => (
          <li
            key={assignment.id}
            className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
          >
            {assignment.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;
