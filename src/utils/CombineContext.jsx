import React from "react";

const CombineContext = ({ ...components }) => {
  const comp = [...Object.values(components)];
  return comp?.reduce(
    (Acc, CurrentComponent) => {
      return ({ children }) => (
        <Acc>
          <CurrentComponent>{children}</CurrentComponent>
        </Acc>
      );
    },
    ({ children }) => <React.Fragment>{children}</React.Fragment>
  );
};
export default CombineContext;
