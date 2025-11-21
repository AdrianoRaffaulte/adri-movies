import { useQuery } from "@tanstack/react-query";

export function useMovies(searchTerm = "batman") {
  return useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=50015c5f&s=${searchTerm}`
      );
      const data = await res.json();

      if (data.Response === "False") return [];

      return data.Search;
    },
  });
}
