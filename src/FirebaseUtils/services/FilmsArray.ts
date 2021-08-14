import {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';

type returnData = {
  loading: boolean;
  data: object | null | void;
  error: string | object;
};

const useFetch = (options: object): returnData => {
  const [data, setData] = useState<AxiosResponse | void | null | object>(null);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios(options);
        setData(res);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return {loading, data, error};
};

export default useFetch;
