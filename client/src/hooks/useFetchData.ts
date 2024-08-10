import { useState, useEffect } from "react";

type RequestFn<T> = () => Promise<T>;

interface UseFetchDataReturn<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

function useFetchData<T>({
  requestFn,
}: {
  requestFn: RequestFn<T>;
}): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await requestFn();
        setData(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [requestFn]);

  return { data, error, loading };
}

export default useFetchData;
