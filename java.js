const quotecontainer= document.getElementById('contain')

const quoteTEXT= document.getElementById('qoute')

const author= document.getElementById('author')
const quotebutton= document.getElementById('btn')



let apiQUOTE=[];
function newquote(){
    const quote=apiQUOTE[Math.floor(Math.random()*apiQUOTE.length)]
    console.log(quote)
    author.textContent=quote.author
    quoteTEXT.textContent=quote.text
    

  

}   
async function getQuotes() {
    const apiurl='https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response=await fetch(apiurl);
        apiQUOTE=await response.json();
        newquote();
        console.log(apiQUOTE)

    } catch (error) {
        
    }
}
getQuotes();