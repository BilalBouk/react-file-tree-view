import React from "react";
import { useDebounce } from "react-use";
import { StyledInput } from "./Styled";

export default props => {
  const { setOptions, defaultOptions } = props;
  const [val, setVal] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");
  const ref = React.useRef(null);

  useDebounce(
    () => {
      setDebouncedValue(val);
    },
    500,
    [val]
  );
  React.useEffect(() => {
    if (debouncedValue.trim() !== "") {
      setOptions(
        defaultOptions.filter(option =>
          new RegExp("^.*" + debouncedValue + ".*$").test(option)
        )
      );
    } else {
      setOptions(defaultOptions);
    }
  }, [debouncedValue]);

  React.useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div style={{ padding: ".5em" }}>
      <StyledInput
        value={val}
        innerRef={ref}
        onChange={e => setVal(e.target.value)}
        placeholder="Chercher..."
      />
    </div>
  );
};
