import { useEffect, useState } from 'react';

import axios from '@/lib/axios';

interface Props {
  url: string;
  // headers?: { [key: string]: any };
  // body?: { [key: string]: any };
}

const useAsyncAxios = ({ url }: Props) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    errors: false,
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setState((state) => ({ data: state.data, loading: true, errors: false }));
    axios
      .get(url)
      .then((x) => x.data)
      .then((y) => {
        setState({ data: y, loading: false, errors: false });
      })
      .catch(() => setState({ data: null, loading: false, errors: true }));
  }, [url, setState]);

  return state;
};

export default useAsyncAxios;
