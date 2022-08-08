O NodeJs foi escolhido como tecnologia para o backend porque:
- tem muito conteúdo disponível para aprendizado e em caso de erros/dúvidas
- flexibilidade e leveza (principalmente por ser single thread) ao rodar em diferentes sistemas operacionais e não consome tanto da máquina
- facilidade de trabalho e aprendizado para execução.

A API foi construída consumindo um JSON já existente e populado na pasta data do projeto o process.json. Essa escolha decorreu da facilidade de trabalhar com um arquivo já existente. Mas, com maior tempo, poderia ter realizado uma conexão com o mongoDB pela disponibilidade de conteúdo para estudo e uso em maior para produção de APIs com NodeJs. Ainda, acrescentaria rotas (POST) que possibilitassem o cadastro de novos processos. Pensando em uma evolução ainda maior poderia considerar um perfil de administrado com suas devidas credenciais que poderia editar e deletar processos no sistema, configurando a adição de rotas PUT, DELETE. 

Foi considerado o uso do GraphQL para o projeto, apesar de possuir vantagens como resolver o problema do clássico overfetching que acontece quando a API retorna mais dados do que a aplicação usa, para esse projeto base e objetivos uma API rest já é suficiente e não causa muitas perdas. 

A arquitetura de pastas utilizada é a MVC adaptada às necessidades do projeto. Não foram criados models justamente porque não está sendo utilizado nenhum banco de dados nessa aplicação. Essa arquitetura permite uma busca/exibição muito clara do projeto, pois contém pastas e arquivos organizados por função/objetivo, facilitando a manutenção e até escalabilidade do projeto. 