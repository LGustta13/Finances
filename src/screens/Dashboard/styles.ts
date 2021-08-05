// CORE

// COMMUNITY
import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

// MINE

// Para acessar deve executar uma array function
export const Container = styled.View`
    flex: 1;
    background-color: ${(provider) => provider.theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    width: 100%
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(52)}px;
    height: ${RFValue(52)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 18px;

`;

export const UserGreetings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

// Modificando a biblioteca FontAwesome
export const Icon = styled(FontAwesome)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(28)}px;
`;