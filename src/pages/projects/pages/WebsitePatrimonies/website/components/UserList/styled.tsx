import styled from "styled-components";
import {
  primaryColor,
  secondaryDarkColor,
  secondaryColor,
} from "../../config/colors";

interface IS {
  selected: boolean;
}
export const PrimaryContainer = styled.div<IS>`
  margin-bottom: 10px;
  border: 1px solid
    ${(props) => (props.selected ? `${secondaryColor} ` : `${primaryColor}`)};
  color: ${(props) =>
    props.selected ? `${secondaryColor}` : `${primaryColor}`};
  font-weight: ${(props) => (props.selected ? `bold` : `normal`)};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: break-all;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
