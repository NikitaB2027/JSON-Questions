import data from './rawBooks.json' with { type: 'json' };
console.log(data[57]['# Pages']);

data.forEach(book=>{
    //console.log(book['read?'])
    //console.log(data.avgTime);


});

//Question 1
const avgTime= data.filter(myTime);
function myTime(book){
    return book['read?']=="Yes" && book['Time on TBR (years)']<50 && book['Time on TBR (years)']>-1 && book['Time on TBR (days)']!=="N/A" && book['Time on TBR (days)']!=="zzzzzz";
}

console.log(avgTime)

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

const genreCount={};

data.forEach(book=>{
    const genre=book.category;

    if(genreCount[genre]){
        genreCount[genre]+=1;
    } else {
        genreCount[genre]=1;
    }
});

console.log(genreCount);

let bestGenre=null;
let maxCount=0;

for (const genre in genreCount){
    if(genreCount[genre]>maxCount){
        maxCount=genreCount[genre];
        bestGenre=genre;
    }
}
//used chatGPT for this function for this question
console.log("Favorite genre based on purchases: "+bestGenre);

const yearCount={};
data.forEach(book=>{
    const dateBought=book['Date Bought'];
    if(dateBought !=="zzzzzz" && dateBought.length>=7){
        const year=dateBought.slice(-4);
        if(yearCount[year]){
            yearCount[year]+=1;
        } else {
            yearCount[year]=1;
        }
    }
});

console.log(yearCount);

let mostYear=null;
let mostCount=0;

for (const year in yearCount){
    if(yearCount[year]>mostCount){
        mostCount=yearCount[year];
        mostYear=year;
    }
}

console.log("Year with most books acquired: "+mostYear);

const avgFilter= data.filter(myFilter);
function myFilter(book){
    return book['# Pages']>=1 && book['Time on TBR (days)']!=="zzzzzz";
}

console.log(avgFilter)

const avgPages= avgFilter.reduce((sum,book)=>sum+book['# Pages'],0)/avgFilter.length;

console.log("Average number of pages in a book: "+avgPages);



/*avg time it takes me to read a book
% of books that are read
what are fav genre based on how many purchases
what year have i acauired the most books
come up with your own stat
------avg page count of all the books*/

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
