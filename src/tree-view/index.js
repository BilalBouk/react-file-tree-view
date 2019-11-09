import React from "react";
import RootElement from "./RootElement";
import FooterElement from "./FooterElement";
import HeaderElement from "./HeaderElement";
import { Root } from "./Styled";

const Main = props => {
  const state = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState(null);
  const [options, setOptions] = React.useState([...props.options]);
  const onClickItem = (path, isFile) => {
    if (!isFile) {
      setCurrentPath(path);
    } else if (props.onChooseFile) {
      props.onChooseFile(path);
    }
  };
  const args = {
    state,
    currentPath,
    setCurrentPath,
    options,
    defaultOptions: props.options,
    setOptions,
    onClickItem,
    hideFiles: props.hideFiles
  };
  return props.children(args);
};

export default {
  Main,
  RootElement,
  FooterElement,
  HeaderElement,
  Wrapper: Root
};
