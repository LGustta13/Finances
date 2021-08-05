// CORE
import React from 'react';
import { } from 'react-native';

// COMMUNITY


// MINE
import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon
} from './styles';


export const Dashboard = () => {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/67337459?v=4'}}/>
                        <User>
                            <UserGreetings>Olá, </UserGreetings>
                            <UserName>Luis Gustavo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="sign-out"/>

                </UserWrapper>
                
            </Header>
            
        </Container>
    )
};