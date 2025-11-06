import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]['# Pages']);

data.forEach(book=>{
    //console.log(book['read?'])
    //console.log(data.avgTime);

});

//Question 1
const avgTime= data.filter(myTime);
function myTime(book){
    return book['read?']=="Yes" && book['Time on TBR (years)']<110 && book['Time on TBR (years)']>-1 && book['Time on TBR (days)']!=="N/A";
}

const avgDays= avgTime.reduce((sum,book)=>sum+book['Time on TBR (days)'],0)/avgTime.length;

console.log("Average time to read a book (in days): "+avgDays);

//Question 2
const readbooks= data.filter(myRead);
function myRead(book){
    return book['read?']=="Yes";
}

const allBooks=data.filter(myAll);
function myAll(book){
    return book['read?']=="Yes" || book['read?']=="No";
}

function myPercent(book){
    return (readbooks.length/allBooks.length)*100;
}

console.log(readbooks.length);
console.log(allBooks.length);
console.log("Percentage of books read: "+myPercent()+"%");

const dateBought= data.filter(myDate);
function myDate(book){
    return book['Date Bought']!=="zzzzzz" && book['Date Bought']==Text.length>7;
}

console.log (dateBought.length);
/*avg time it takes me to read a book
% of books that are read
what are fav genre based on how many purchases
what year have i acauired the most books
come up with your own stat*/

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
