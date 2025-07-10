import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useComments = () =>
  useQuery({
    queryKey: ["comments"],
    queryFn: () => api.get("/comments").then(res => res.data),
  });
