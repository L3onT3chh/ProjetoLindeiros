import React from "react";

// Interface
import { IfaceProps } from "interfaces/IfaceProps";

const BlockItem = (props: IfaceProps) => {
  return (
    <>
      <div className="block">${props.children}</div>
    </>
  );
};

export default BlockItem;
