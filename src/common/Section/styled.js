import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background-color: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;
`;

export const Content = styled.div`
    padding: 20px;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;