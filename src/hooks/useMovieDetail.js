import { useQuery } from "@tanstack/react-query";

export function useMovieDetail(id) {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=50015c5f&i=${id}&plot=full`);
      const data = await res.json();
      return data;
    },
    enabled: !!id,
  });
}
