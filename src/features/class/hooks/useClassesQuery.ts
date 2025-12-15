import { useQuery } from "@tanstack/react-query";
import { fetchClasses } from "../apis/fetchClasses";

export const useClassesQuery = () => {
    return useQuery({
       queryKey: ["classes"],
       queryFn: fetchClasses
    });
}