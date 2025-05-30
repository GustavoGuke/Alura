### CRIAÇÃO DOS MODELS

npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

### Migração
npx sequelize-cli db:migrate

### Visualisar o sqlite pela extensão
Abri a paleta de comandos (ctrl + shift + p)
Digite "Open user settings (JSON)"
E adicionei a seguinte configuração:
"sqlite.sqlite3": ".sequelizerc",

### Seeder
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all


### Comandos
Comando:	                                    Descrição:
sequelize db:migrate	                        Executa todas as migrações pendentes para atualizar o banco de dados
sequelize db:migrate:schema:timestamps:add	    Atualiza uma tabela de migração para ter marcação de data/hora
sequelize db:migrate:status	                    Exibe o status de todas as migrações
sequelize db:migrate:undo	                    Reverte a migração mais recente do banco de dados
sequelize db:migrate:undo:all	                Reverte todas as migrações executadas
sequelize db:seed	                            Executa um seeder específico
sequelize db:seed:undo	                        Deleta os últimos dados inseridos via seeds do banco de dados
sequelize db:seed:all	                        Executa todos os seeders
sequelize db:seed:undo:all	                    Deleta todos os dados inseridos via seeds do banco de dados
sequelize db:create	                            Cria um banco com uma configuração específica
sequelize db:drop	                            Exclui o banco de dados especificado na configuração
sequelize init	                                Inicia um projeto
sequelize init:config	                        Inicia as configurações
sequelize init:migrations	                    Inicia as migrações
sequelize init:models	                        Inicia os modelos
sequelize init:seeders	                        Inicia os seeders
sequelize migration:generate	                Gera um novo arquivo de migração
sequelize model:generate	                    Gera uma model e sua migração [alias: model:create]
sequelize seed:generate	                        Gera um novo arquivo de seed