import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useAlbums = () =>
  useQuery({
    queryKey: ["albums"],
    queryFn: () => api.get("/albums").then(res => res.data),
  });
