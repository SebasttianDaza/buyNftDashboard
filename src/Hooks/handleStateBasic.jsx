import {useState} from "react";

const useLocalState = (initialState) => {
  const [state, setState] = useState(initialState);
  return [state, setState];
};

export default useLocalState;
