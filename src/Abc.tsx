import React, { useEffect, useState } from "react";
import type { FC } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Abc: FC = () => {
  const [pinCode, setPinCode] = useState("");
  console.log("render");

  const value = useDebounce(pinCode, 2000);

  return (
    <div>
      <h1>Abc</h1>
      <input
        placeholder="Input ...."
        onChange={(e) => setPinCode(e.target.value)}
      ></input>
      <p>{value}</p>
    </div>
  );
};

// const Abc: FC = () => {
//   const [pinCode, setPinCode] = useState("");

//   useEffect(() => {
//     const getData = setTimeout(() => {
//       console.log({ pinCode });
//     }, 2000);

//     return () => {
//       clearTimeout(getData);
//       console.log("clear");
//     };
//   }, [pinCode]);

//   return (
//     <div>
//       <h1>Abc</h1>
//       <input
//         placeholder="Input ...."
//         onChange={(e) => setPinCode(e.target.value)}
//       ></input>
//     </div>
//   );
// };
export default Abc;
