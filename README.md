# game-snake

Portuguese:

Este é um clássico jogo da cobrinha, originalmente criado para celulares.
Foi um desafio de um processo seletivo que participei, seguem os requisitos do projeto feitos pela empresa à qual eu me candidatei:

- Utilizar o emoji do coelho tentando comer a cenoura.
- A cauda do coelho pode ser fixa de uma cor, mas depois fazê-la colorida.
- Ao atravessar a parede, aparecer do outro lado da tela.
- Começar sem cauda, apenas movimentando o coelho.
- Detectar a colisão do coelho com a cenoura.
- Sortear uma nova posição pra cenoura (não pode ser numa posição onde o coelho + cauda esteja)
- Detectar colisão do coelho coma própria cauda, encerrando assim o jogo.
- Manter uma variável chamada direction que pode ser UP, DOWN, LEFT, RIGHT, o coelho se move baseado nela.
- Não pode mudar 180 graus de direção.
- Criar uma ai(inteligência) para jogar o jogo sozinho.

O ambiente de desenvolvimento Javascript utilizado foi Deno, pra o programa funcionar, é necessário que o Deno esteja instalado.
Aqui têm algumas instruções de como instalar: https://deno.land/manual/getting_started/installation

O arquivo que deve ser eecutado para o programa rodar é o "play.js" dentro da pasta "main".
O jogo não é jogável pelo usuário, é só uma inteligência artificial que faz o coelho corre atrás de cenoura, 
acumula pontos e gera uma nova cenoura em um lugar aleatório do grid a cada cenoura que é comida.
