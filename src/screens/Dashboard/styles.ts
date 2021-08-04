import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${(provider) => provider.theme.colors.secondary};
`;

// Para acessar deve executar uma array function
export const Title = styled.Text`
    font-family: ${(object) => object.theme.fonts.bold}; 
    font-size: 30px;
    color: ${(provider) => provider.theme.colors.title};
`;
