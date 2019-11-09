import React from "react";
import { ChildrenWrapper, Item } from "./Styled";
import RenderTree from "./RenderTree";
import Context, { RootContext } from "./Context";
import { usePrevious } from "react-use";
import { MdFolder } from "react-icons/md";
import { FaFileWord } from "react-icons/fa";

const Element = ({ value }) => {
  const { name } = value;
  const state = React.useState(null);
  const [current, setCurrent] = React.useContext(Context);
  const { onClickItem, hideFiles, currentPath, showAll } = React.useContext(
    RootContext
  );
  const [isFile] = React.useState(
    /^.*\.docx$/.test(name) && !value.children.length
  );
  const selected = currentPath === value.path;
  const prevPath = usePrevious(currentPath);
  React.useEffect(() => {
    if (prevPath !== currentPath && currentPath === value.path) {
      setCurrent(name);
    }
  }, [currentPath, prevPath, value.path, name, setCurrent]);
  const toggle = () => {
    if (!isFile) {
      if (current === name && selected) {
        state[1](null);
        setCurrent(null);
        onClickItem(null, false);
      } else {
        setCurrent(name);
        onClickItem(value.path, false);
      }
    }
  };
  const onChooseFile = () => {
    if (isFile) {
      onClickItem(value.path, true);
    }
  };
  const padding = `.25em 1em .25em ${value.path.split("/").length * 0.75 +
    0.75}em`;
  if (isFile && hideFiles) {
    return null;
  } else if (value.children.length && (current === name || showAll)) {
    return (
      <>
        <Item
          padding={padding}
          selected={selected}
          onClick={toggle}
          onDoubleClick={onChooseFile}
        >
          {isFile ? (
            <FaFileWord className="mr-2" />
          ) : (
            <MdFolder className="mr-2" />
          )}
          {name}
        </Item>
        <ChildrenWrapper>
          <Context.Provider value={state}>
            <RenderTree parent={`${value.path}/`} options={value.children}>
              {children =>
                children.map(child => (
                  <Element key={child.name} value={child} />
                ))
              }
            </RenderTree>
          </Context.Provider>
        </ChildrenWrapper>
      </>
    );
  }
  return (
    <Item
      padding={padding}
      selected={selected}
      onClick={toggle}
      onDoubleClick={onChooseFile}
    >
      {isFile ? <FaFileWord className="mr-2" /> : <MdFolder className="mr-2" />}
      {name}
    </Item>
  );
};

export default Element;
