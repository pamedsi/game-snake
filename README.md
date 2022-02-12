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

-------------------------------------------------------------------------------------------------
English:

This is a classic snake game, originally created for mobile phones.
It was a challenge of a selection process that I participated, following the project requirements made by the company to which I applied:

- Use the rabbit emoji trying to eat the carrot.
- The rabbit's tail can be fixed one color, but then make it colored.
- When crossing the wall, appear on the other side of the screen.
- Start without a tail, just moving the rabbit.
- Detect the collision of the rabbit with the carrot.
- Draw a new position for the carrot (it cannot be in a position where the rabbit + tail is)
- Detect the rabbit's collision with its own tail, thus ending the game.
- Keep a variable called direction which can be UP, DOWN, LEFT, RIGHT, the rabbit moves based on it.
- Cannot change direction 180 degrees.
- Create an ai(intelligence) to play the game alone.

The Javascript runtime used was Deno, for the program to work, Deno must be installed.
Here are some instructions on how to install: https://deno.land/manual/getting_started/installation

The file that must be executed for the program to run is "play.js" inside the "main" folder.
The game is not playable by the user, it's just an artificial intelligence that makes the rabbit run after carrots,
accumulate points and generate a new carrot in a random place on the grid for each carrot that is eaten.
