import styled from "styled-components";
import {
  primaryColor,
  secondaryDarkColor,
  textDarkColor,
} from "../../config/colors";

export const PatrimonyContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "image name cod"
    "image owner owner"
    "note note note"
    "note note note";
  width: 95%;
  margin-bottom: 20px;
  border: 5px solid ${primaryColor};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: break-all;
`;

export const PatrymonyImage = styled.div`
  grid-area: image;
  img {
    max-width: 140px;
    max-height: 140px;
  }
`;
export const PatrymonyName = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  color: ${textDarkColor};
  label {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  a {
    font-weight: bolder;
    color: ${textDarkColor};
  }
`;

export const PatrymonyCod = styled.div`
  grid-area: cod;
  display: flex;
  flex-direction: column;
  color: ${textDarkColor};
  label {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  a {
    font-weight: bolder;
    color: ${textDarkColor};
  }
`;
export const PatrymonyOwner = styled.div`
  grid-area: owner;
  display: flex;
  flex-direction: column;
  color: ${textDarkColor};
  label {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  a {
    font-weight: bolder;
    color: ${textDarkColor};
  }
`;
export const PatrymonyNote = styled.div`
  grid-area: note;
  display: flex;
  flex-direction: column;
  color: ${textDarkColor};
  label {
    border: 1px solid black;
    min-height: 40px;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
  a {
    font-weight: bolder;
    color: ${textDarkColor};
  }
`;
