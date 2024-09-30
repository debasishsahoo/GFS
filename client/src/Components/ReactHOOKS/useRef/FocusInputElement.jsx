import { useRef } from "react";

const FocusInputElement = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
     <input type="text" ref={inputElement}/>
     <br/>
     <br/>
     <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default FocusInputElement;
