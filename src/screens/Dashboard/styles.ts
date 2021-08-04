import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${(provider) => provider.theme.colors.secondary};
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${(provider) => provider.theme.colors.title};
`;
