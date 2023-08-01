import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useAppSelector } from "../store/hooks/redux-hooks";
import { getCharacters } from "./requests";

export const DataHook = () => {
  const dataState = useAppSelector((state) => state.dataSliceReducer);
  const { isPaginationEnabled, currentPage } = dataState;
  const {
    data: infiniteData,
    isError: isInfiniteDataError,
    fetchNextPage,
    isLoading: isInfiniteDataLoading,
    isFetching,
  } = useInfiniteQuery("infiniteCharacters", getCharacters, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.info.next) {
        return pages.length + 1;
      }
      return undefined;
    },
    enabled: !isPaginationEnabled,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });

  const {
    data: paginatedData,
    isLoading: isPaginatedDataLoading,
    isError: isPaginatedDataEror,
  } = useQuery(
    ["paginatedCharacters", currentPage],
    () => getCharacters({ pageParam: currentPage }),
    { enabled: isPaginationEnabled, refetchOnWindowFocus: false }
  );

  const infiniteCharacters = infiniteData?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  const paginatedCharacters = paginatedData?.results;
  const nextPage = paginatedData?.info.next;
  const prevPage = paginatedData?.info.prev;
  const pagesArray = Array(paginatedData?.info.pages).fill(0);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      50
    )
      fetchNextPage();
  };

  useEffect(() => {
    if (!isPaginationEnabled) {
      document.addEventListener("scroll", scrollHandler);
      return function () {
        document.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [isPaginationEnabled]);

  const charactersData = isPaginationEnabled
    ? paginatedCharacters
    : infiniteCharacters;
  const loading = isInfiniteDataLoading || isPaginatedDataLoading || isFetching;
  const error = isInfiniteDataError || isPaginatedDataEror;
  return { charactersData, pagesArray, nextPage, prevPage, loading, error };
};
