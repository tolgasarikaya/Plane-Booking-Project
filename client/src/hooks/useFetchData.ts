import { useState, useEffect, useCallback } from "react";
import { FlightQueryParams } from "../interfaces/interfaces";

type RequestFn<T, P> = (params: P) => Promise<T>;

interface UseFetchDataReturn<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  refetch: (params: FlightQueryParams) => Promise<T | null>;
}

function useFetchData<T>({
  requestFn,
  enabled,
}: {
  requestFn: RequestFn<T, FlightQueryParams>;
  enabled?: boolean;
}): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (params: FlightQueryParams) => {
      setLoading(true);
      try {
        const res = await requestFn(params);
        setData(res);
        return res;
      } catch (error) {
        setError(error as Error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [requestFn],
  );

  useEffect(() => {
    if (enabled) {
      fetchData({});
    }
  }, [enabled, fetchData]);

  return { data, error, loading, refetch: fetchData };
}

export default useFetchData;
