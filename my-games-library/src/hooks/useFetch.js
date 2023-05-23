import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setIsPending(false);
        setData(res.data);
      })
      .catch(() => {
        setIsPending(false);
        setError("Sorry, something went wrong");
      });
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
