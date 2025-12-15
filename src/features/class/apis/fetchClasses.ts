import type { Class } from "@/shared/types/types";

export const fetchClasses = () =>
  new Promise<Class[]>(resolve =>
    setTimeout(() => {
      resolve([
        { id: 1, name: "Math" },
        { id: 2, name: "Physics" },
        { id: 3, name: "Chemistry" },
      ]);
    }, 1000)
  );
