# Catálogo de Fragmentos - Exordion

Um catálogo interativo para visualizar os fragmentos obtidos ao quebrar itens no servidor Exordion. Interface web moderna com design responsivo e dados organizados dinamicamente.

## 📖 Como Executar
Você pode acessar o projeto de duas formas:  

1. **Via GitHub Pages** (mais prático):  
   👉 [Acesse aqui](https://tsb89.github.io/catalogo-fragmento-exordion/)  

2. **Localmente no navegador**:  
   - Clone o repositório ou baixe os arquivos.  
   - Abra o arquivo `index.html` no navegador.  

## 🎯 Funcionalidades

- **Catálogo Dinâmico**: Exibição automática de todos os itens catalogados
- **Estatísticas em Tempo Real**: Contadores automáticos de itens e fragmentos
- **Interface Responsiva**: Design adaptável para desktop e mobile
- **Visual Imersivo**: Tema dark com gradientes e efeitos hover
- **Dados Organizados**: Sistema baseado em arrays JavaScript para fácil manutenção

## 📁 Estrutura do Projeto

```
projeto/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e tema visual
├── script.js           # Lógica JavaScript e dados
├── Imagens/            # Pasta com imagens dos fragmentos
│   ├── fate orb fragment.gif
│   ├── enchant orb fragment.gif
│   ├── shuffle orb fragment.gif
│   ├── cleaner orb fragment.gif
│   ├── upgrade orb fragment.gif
│   └── ancient orb fragment.gif
└── README.md           # Documentação
```

## 🚀 Como Usar

1. **Instalação**:
   - Clone ou baixe os arquivos do projeto
   - Certifique-se de que a pasta `Imagens/` contém os GIFs dos fragmentos
   - Abra o `index.html` em qualquer navegador web

2. **Navegação**:
   - Visualize todos os itens catalogados na grade principal
   - Confira as estatísticas gerais na seção superior
   - Use hover nos cards para efeitos visuais interativos

## ⚙️ Adicionando Novos Itens

Para adicionar um novo item ao catálogo, edite o array `items` no arquivo `script.js`:

```javascript
{
    name: "🗡️ Nome do Item",
    power: 120,
    rarity: "Epic",
    fate: [min, max],        // [35, 40] ou [35, null] se máximo desconhecido
    enchant: [min, max],     // [15, 20]
    shuffle: [min, max],     // [0, 0] se não dropa
    cleaner: [min, max],     // [8, 10]
    upgrade: [min, max],     // [12, 15]
    ancient: [min, max]      // [5, 7]
}
```

### Exemplos de Formatos de Quantidade:
- `[0, 0]` → Exibe "0x"
- `[5, 5]` → Exibe "5x"
- `[3, 7]` → Exibe "3x - 7x"
- `[10, null]` → Exibe "10x - ?x"

## 📊 Tipos de Fragmentos

O sistema suporta 6 tipos de fragmentos:

| Fragmento | Código | Descrição |
|-----------|--------|-----------|
| Fate Fragment | `fate` | Fragmento de Destino |
| Enchant Fragment | `enchant` | Fragmento de Encantamento |
| Shuffle Fragment | `shuffle` | Fragmento de Reorganização |
| Cleaner Fragment | `cleaner` | Fragmento de Limpeza |
| Upgrade Fragment | `upgrade` | Fragmento de Melhoria |
| Ancient Fragment | `ancient` | Fragmento Antigo |

## 🎨 Personalização

### Modificando Estilos
Edite o arquivo `style.css` para alterar:
- Cores do tema (gradientes, bordas, textos)
- Tamanhos de fonte e espaçamentos
- Animações e efeitos hover
- Layout responsivo

### Adicionando Novos Fragmentos
Para adicionar um novo tipo de fragmento:

1. Adicione no objeto `fragmentTypes` em `script.js`:
```javascript
novoTipo: { 
    name: "Nome do Fragmento", 
    image: "Imagens/novo_fragmento.gif" 
}
```

2. Adicione a propriedade nos itens do array:
```javascript
{ name: "Item", /*...*/, novoTipo: [min, max] }
```

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **JavaScript ES6**: Lógica de renderização dinâmica
- **Design Responsivo**: Grid CSS e media queries

## 📈 Estatísticas Automáticas

O sistema calcula automaticamente:
- **Total de Itens**: Quantidade de itens catalogados
- **Tipos de Fragmentos**: Quantidade de fragmentos diferentes
- **Média de Fragmentos**: Fragmentos por item

## 🔧 Funcionalidades Técnicas

### Renderização Dinâmica
- Cards de itens gerados automaticamente via JavaScript
- Formatação inteligente de quantidades
- Atualização automática de estatísticas

### Sistema Modular
- Dados separados da lógica de apresentação
- Funções reutilizáveis para criação de elementos
- Estrutura preparada para extensões futuras

## 📱 Compatibilidade

- ✅ Chrome/Chromium (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (responsive)

## 🛠️ Possíveis Melhorias Futuras

- [ ] Sistema de filtros por raridade
- [ ] Busca por nome de item
- [ ] Ordenação por diferentes critérios
- [ ] Exportação de dados para CSV
- [ ] Modo claro/escuro
- [ ] Gráficos de estatísticas avançadas
