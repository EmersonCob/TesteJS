/*   Buscando e contando dados em Arrays
        
        * Contar o número de categorias e o número de 
        livros em cada categoria
        * Contar o número de autores
        * Mostrar libros de autor Augusto Cury
        * Transformar a função acima em uma função que 
        irá receber o nome do autor e devolver os livros 
        desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [ 
            {   
                title: "Os segredos da mente milionária",
                author: "T. Havr Eker",
            },
            {   
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {   
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiuosaki e Sharon L. Lechter",
            },
        ],
    },  
    {
        category: "Inteligência Emocional",
        books: [ 
            {   
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {   
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {   
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)