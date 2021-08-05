// CORE
import React from 'react';
import { } from 'react-native';

// COMMUNITY


// MINE
import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName
} from './styles';


export const Dashboard = () => {
    return (
        <Container>
            <Header>
                <UserInfo>
                    <Photo source={{uri: 'https://avatars.githubusercontent.com/u/67337459?v=4'}}/>
                    <User>
                        <UserGreetings>Olá, </UserGreetings>
                        <UserName>Luis Gustavo</UserName>
                    </User>
                </UserInfo>

            </Header>
            
        </Container>
    )
};