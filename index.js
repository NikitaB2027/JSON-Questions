import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]['# Pages']);

data.forEach(book=>{
    console.log(book['read?'])
});

for (let i=0; i<book.length; i++){
    sum+= book[i]['Time on TBR (days)'];
}

function avg(time){
    return sum/
}

if(book['read?']=="Yes"){
    for (let i=0; i<book.length; i++){
        sum+= book[i]['Time on TBR (days)'];
    }

}

/*avg time it takes me to read a book
% of books that are read
what are fav genre based on how many purchases
what year have i acauired the most books
come up with your own stat*/

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
