import {useState} from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    staticallySetValue: staticValue => setValue(staticValue),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      }
    }
  };
};
