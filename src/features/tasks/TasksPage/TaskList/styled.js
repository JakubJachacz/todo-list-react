import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    padding: 10px;
    padding-left: 0;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through
    `}
`;

export const Button = styled.button`
    color: white; 
    width: 30px;
    height: 30px;
    border: none;

    ${({ toggleDone }) => toggleDone && css`
        background: #1a7f1a;
        transition: 0.4s;
        
        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
     `}

     ${({ remove }) => remove && css`
         background: #e60838;
         transition: 1s;

         &:hover {
            background-color: hsl(347, 93%, 60%);
         }
    `}
`;