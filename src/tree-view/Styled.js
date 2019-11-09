import styled from "styled-components";
import { Input } from "reactstrap";

export const Root = styled.div`
  background-color: #eeeeee;
  min-width: 300px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
`;

export const ChildrenWrapper = styled.div`
  flex-grow: 1;
  &.root-element {
    max-height: 350px;
    overflow-y: auto;
  }
`;

export const Item = styled.div`
user-select: none;
flex-grow: 1;
  cursor: pointer;  
  padding: ${props => props.padding};
  font-size: 16px;  
  color: #212121;
  font-family: 'Roboto';
  background-color: ${props => (props.selected ? "#bdbdbd" : "initial")}
  &:hover {
    background-color: ${props => (props.selected ? "#bdbdbd" : "#e0e0e0")}
  }
`;

export const AddButton = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-left: 0.25em;
  min-width: 32px !important;
  height: 32px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Footer = styled.div``;

export const StyledInput = styled(Input)`
  &:focus {
    border-color: #2684ff !important;
    border-width: 2px !important;
    box-shadow: initial !important;
    padding: 6px 12px !important;
  }
  padding: 7px 13px !important;
  font-size: 0.875rem !important;
  line-height: 1.5 !important;
  border-radius: 0.2rem !important;
  height: 32px !important;
`;
