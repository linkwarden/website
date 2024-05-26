import React from "react";

type Props = {
  className?: string;
};

const Seperator = ({ className }: Props) => {
  return (
    <div
      className={
        "h-[1px] bg-gradient-to-r from-transparent via-outline to-transparent " +
          className || ""
      }
    ></div>
  );
};

export default Seperator;
