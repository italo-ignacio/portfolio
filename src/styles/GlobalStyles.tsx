import { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, textColor } from "../config/colors";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }
    body{
        font-family: 'Bitter', serif;
        line-height: 1.5;
    }
    html,body,#root{
        height:100%;
        background:  ${primaryDarkColor} ;
        color: ${textColor};
    }

    button{
        cursor:pointer;
        background: ${primaryColor};
        border: none;
        color: ${textColor};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        transition: all 300ms;
    }
    button:hover{
        filter: brightness(75%);
    }
    a{
        text-decoration:none;
        color:${primaryColor}
    }
    ul{
        list-style:none;
    }

`;
