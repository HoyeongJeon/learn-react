import { Dispatch, SetStateAction, useState, useCallback } from 'react';

const useInput = <T = any>(initialValue: T): [T, (e: any) => void, Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
