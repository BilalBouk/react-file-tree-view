import React from "react";
import Element from "./Element";
import RenderTree from "./RenderTree";
import { ChildrenWrapper } from "./Styled";
import Context, { RootContext } from "./Context";

export default props => {
  const { state, currentPath, options, onClickItem, hideFiles } = props;
  return (
    <RootContext.Provider
      value={{
        onClickItem,
        currentPath,
        hideFiles,
        showAll: props.options.length < props.defaultOptions.length
      }}
    >
      {!options.length && (
        <div
          style={{
            minHeight: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          no options
        </div>
      )}
      {options.length > 0 && (
        <Context.Provider value={state}>
          <ChildrenWrapper
            className="root-element"
            style={{ margin: ".25em 0" }}
          >
            <RenderTree parent="" options={options}>
              {children =>
                children.map(child => (
                  <Element key={child.name} value={child} />
                ))
              }
            </RenderTree>
          </ChildrenWrapper>
        </Context.Provider>
      )}
    </RootContext.Provider>
  );
};
