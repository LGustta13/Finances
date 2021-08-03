Aplicação utilizando EXPO
Definição: é um framework que simplifica o ambiente de trabalho mobile, sem que seja feitas configurações
Expo Client: responsável por receber os pacotes em javascript e passar para o dispositivo fixo em Java ou para o emulador
Documentação: docs.expo.io
Workflow: managed (é um estilo de desenvolvimento onde limita-se em questão de funcionalidades nativas mais específicas, porém o gerenciamento é mais simples por conta do expo, e é possível utilizar somente as bibliotecas disponibilizadas pelo expo em sua documentação) e bare (possibilita que funcionalidades mais específicas para cada plataforma seja criada, além disso as pastas android e ios são criadas no diretório do projeto)
Inicialização: expo init nome_do_projeto, qualquer biblioteca será instalada e gerenciada com o expo-cli. Com o emulador aberto, basta acessar a opção Run on Android Emulator na página do desenvolvedor

Styled Component
Definição: é uma biblioteca usada no react native para trabalhar com as propriedades de estilização semelhantes ao CSS na web. Basicamente será criado um componente de estilização, ao invés de ser uma propriedade para style.
Instalação: yarn add styled-components; yarn add @types/styled-components-react-native -D (tipagem no react native)
Documentação: https://styled-components.com/
Dicas: as propriedades em cascata ficam no formato pascal-case e dentro de uma `literal string` (não camelCase nem snake_case)
