// CORE
import React from "react";

// COMMUNITY

// MINE
import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction, 
} from "./styles";

export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>
                    Entrada
                </Title>

                <Icon name="arrow-up-circle"/>
            </Header>

            <Footer>
                <Amount>R$</Amount>
                <LastTransaction>Última entrada</LastTransaction>
            </Footer>

        </Container>
    )
}