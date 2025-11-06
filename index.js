import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]['# Pages']);

data.forEach(book=>{
    //console.log(book['read?'])
    //console.log(data.avgTime);

});


const avgTime= data.filter(myTime);
function myTime(book){
    return book['read?']=="Yes" && book['Time on TBR (days)']!==121.5863014 && book['Time on TBR (years)']!==-121.5863014 && book['Time on TBR (days)']!=="N/A";
}

const avgDays= avgTime.reduce((sum,book)=>sum+book['Time on TBR (days)'],0)/avgTime.length;

/*avgTime.forEach(book => {
  console.log(book['Time on TBR (days)'], typeof book['Time on TBR (days)']);
});


//console.log(avgDays);


/*for (let i=0; i<book.length; i++){
    sum+= book[i]['Time on TBR (days)'];
}

function avg(value){
    return sum/value.length;
}

if(book.myTime){
    if(book['Time on TBR (years)']=-121.5863014||book['Time on TBR (years)']==121.5863014){

    }
    else{
        console.log(book['Time on TBR (days)'].avg);
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
