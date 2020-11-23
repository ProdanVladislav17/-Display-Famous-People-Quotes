const quotes =[

    {
        quote:
        "Be the change that you wish to see in the world.",
       author: 
       "Mahatma Gandhi"
    },

    {
        quote:
        "A winning strategy must include losing.",
       author: 
       "Robert Kiyosaki"
    },

    {
        quote:
        "Thinking is the hardest work there is, which is probably the reason so few engage in it.",
       author:
        "Henry Ford"
    },

    {
        quote:
        "The way to get started is to quit talking and begin doing.",
       author: 
       "Walt Disney"
    },

    {
        quote:
        "Life is what happens when you're busy making other plans.",
       author:
        "John Lennon"
    },

]
  //btn generate quotes
const btn = document.querySelector('.generate');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author')
//add evnt list.
btn.addEventListener('click',() => {

    //random text
    let random = Math.floor(Math.random() * quotes.length);
    //console.log(random);

    //show text
    quote.innerText = quotes[random].quote;
    author.innerText= quotes[random].author;

});