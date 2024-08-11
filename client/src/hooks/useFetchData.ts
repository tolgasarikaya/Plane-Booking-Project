// import { useState, useEffect, useCallback } from "react";
// import { FlightQueryParams } from "../interfaces/interfaces";

// // Define your request function type to accept parameters
// type RequestFn<T, P> = (params: P) => Promise<T>;

// interface UseFetchDataReturn<T> {
//   data: T | null;
//   error: Error | null;
//   loading: boolean;
//   refetch: (params: FlightQueryParams) => void; // Specify the refetch parameter type
// }

// function useFetchData<T>({
//   requestFn,
//   enabled,
// }: {
//   requestFn: RequestFn<T, FlightQueryParams>; // Set P to FlightQueryParams
//   enabled?: boolean;
// }): UseFetchDataReturn<T> {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchData = useCallback(
//     async (params: FlightQueryParams) => {
//       setLoading(true);
//       try {
//         const res = await requestFn(params); // Pass params to request function
//         setData(res);
//       } catch (error) {
//         setError(error as Error);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [requestFn],
//   );

//   useEffect(() => {
//     if (enabled) {
//       fetchData({}); // Call with empty parameters if needed
//     }
//   }, [enabled, fetchData]);

//   return { data, error, loading, refetch: fetchData };
// }

// export default useFetchData;

import { useState, useEffect, useCallback } from "react";
import { FlightQueryParams } from "../interfaces/interfaces";

// Define your request function type to accept parameters
type RequestFn<T, P> = (params: P) => Promise<T>;

interface UseFetchDataReturn<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  refetch: (params: FlightQueryParams) => Promise<T | null>; // Specify the refetch return type
}

function useFetchData<T>({
  requestFn,
  enabled,
}: {
  requestFn: RequestFn<T, FlightQueryParams>; // Set P to FlightQueryParams
  enabled?: boolean;
}): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (params: FlightQueryParams) => {
      setLoading(true);
      try {
        const res = await requestFn(params); // Pass params to request function
        setData(res);
        return res; // Return the result
      } catch (error) {
        setError(error as Error);
        return null; // Return null on error
      } finally {
        setLoading(false);
      }
    },
    [requestFn],
  );

  useEffect(() => {
    if (enabled) {
      fetchData({}); // Call with empty parameters if needed
    }
  }, [enabled, fetchData]);

  return { data, error, loading, refetch: fetchData };
}

export default useFetchData;
