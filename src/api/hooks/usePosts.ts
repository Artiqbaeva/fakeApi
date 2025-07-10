import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get("/posts").then(res => res.data),
  });
