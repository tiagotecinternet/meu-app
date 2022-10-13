# Conceitos gerais sobre React

## props

São parâmetros ou argumentos passados para os componentes React, normalmente usados para injeção de dados dinâmicos. As props funcionam como um objeto, e cada prop criada por você passa a ser uma propriedade deste objeto.

As props são criadas manualmente, embora também exista a prop 'children' que permite ler o conteúdo entre as tags de abertura/fechamento de um componente.

## React Hooks: O que são?

Hooks (ou "ganchos") são funções (iniciadas com "use") que permitem gerenciar estados e outras funcionalidades do ciclo de vida de um componente.

React possui diversos tipos de hooks, mas os principais são os de gerenciamento de estados (useState) e o de gerenciamento de efeitos colaterais (useEffect).

### useState

Função que retorna uma variável com o valor do estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.
