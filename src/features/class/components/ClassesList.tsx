import { useGlobalStore } from '@/shared/store/useStore';
import React from 'react'
import { useClassesQuery } from '../hooks/useClassesQuery';

const ClassesList: React.FC = () => {
  const { data: classes, isLoading, isError } = useClassesQuery();
  const selectedClassId = useGlobalStore((s) => s.selectedClassId);
  const setSelectedClassId = useGlobalStore((s) => s.setSelectedClassId);
  const setMainBarAction = useGlobalStore((s) => s.setMainBarAction);

  const handleClassClick = (id: number) => {
    setSelectedClassId(id);
    setMainBarAction("class");
  };

  if (isLoading) return <p className="p-4">Loading classes...</p>;
  if (isError) return <p className="p-4 text-red-500">Failed to load classes</p>;

  return (
    <div className="flex flex-col gap-2">
      {classes?.map((cls) => (
        <button
          key={cls.id}
          onClick={() => handleClassClick(cls.id)}
          className={`p-2 rounded hover:bg-gray-100 text-left text-[12px] ${
            selectedClassId === cls.id ? "bg-gray-200 font-bold" : ""
          }`}
        >
          {cls.name}
        </button>
      ))}
    </div>
  );
};

export default ClassesList;