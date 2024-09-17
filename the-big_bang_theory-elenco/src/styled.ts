import styled from "styled-components";

export const HeaderB = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 8vh;
    background-color: #fff;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 1.8rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #333;
        margin: 0;
    }

    nav {
        ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 20px;
        }

        li {
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        h1 {
            margin-bottom: 20px;
        }

        nav {
            width: 100%;
            ul {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
        }
    }
`;

export const ImagesGerais = styled.img`
    width: 190px;
    padding: 20px;
    object-fit: cover; 
    border-radius: 24px;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.10);
    }
`;

export const DivRP = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around; 
    gap: 20px;
    margin-top: 20px;
`;

export const DivMae = styled.div`
    padding: 5% 10%; 
    
    @media (max-width: 768px) {
        padding: 5%; 
    }
`;

export const FooterRP = styled.footer`
    width: 100%;
    min-height: 8vh;
    background-color: #fff; 
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ddd; 
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); 
    
    h3 {
        font-size: 1.5rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #555;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
`;

export const ErrorTitle = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 20px;
`;

export const ErrorMessage = styled.h3`
    font-size: 1.5rem;
    color: #333;
`;

export const ErrorLink = styled.a`
    font-size: 1rem;
    color: black;
    text-decoration: none;
    margin-top: 10px;
    transition: 0.3s ;
    padding: 3px;
    box-shadow: 2px 2px 2px black;

    &:hover {
        transition: 0.10s;
        padding: 6px;
        box-shadow: 2px 2px 2px black;
    }
`;
