import React, { useState } from "react";

const Toggle = ({
  defaultValue,
  action,
}: {
  defaultValue: boolean;
  action: (state: boolean) => void;
}) => {
  const [state, setState] = useState<boolean>(defaultValue);

  return (
    <div
      role="switch"
      aria-checked={state}
      className={`${state ? " bg-green-500" : " bg-strong-1"} flex h-6 w-12 items-center rounded-xl hover:cursor-pointer  `}
      onClick={() => {
        action(!state);
        setState((prev) => !prev);
      }}
    >
      <div
        className={`${state ? " translate-x-6 " : " translate-x-1"} h-[18px] w-[18px]  rounded-full bg-white transition-transform`}
      ></div>
    </div>
  );
};

export default Toggle;
