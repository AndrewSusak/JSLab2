let obj = {
    className: 'open menu'
  };
let str ='';

document.getElementsByTagName("p")[1].innerHTML=`Input:${obj.className}`;
addClass(obj,'new');
document.getElementsByTagName("p")[2].innerHTML=`Answer:${obj.className}`;

document.getElementsByTagName("p")[5].innerHTML=`Input:-my-short-string`;
document.getElementsByTagName("p")[6].innerHTML=`Answer:${camelize('-my-short-string')}`;

document.getElementsByTagName("p")[9].innerHTML=`Input:${obj.className}`;
removeClass(obj, 'new');
document.getElementsByTagName("p")[10].innerHTML=`Answer:${obj.className}`;

let arr = [1,1,2,4,5,7,8,88,0,86,3,7,89,4,3,65,8765];
document.getElementsByTagName("p")[13].innerHTML=`Input:${arr}`;
filterRangeInPlace(arr, 3, 9)
document.getElementsByTagName("p")[14].innerHTML=`Answer:${arr}`;

document.getElementsByTagName("p")[17].innerHTML=`Input:${arr}`;
document.getElementsByTagName("p")[18].innerHTML=`Answer:${findCouple(arr,11)}`;

const arr1 = ['Капуста', 'Капітал'];
document.getElementsByTagName("p")[21].innerHTML=`Input:${arr1}`;
document.getElementsByTagName("p")[22].innerHTML=`Answer:${startingSubstring(arr1)}`;

const array = [1, 2, 3, 4, 5,6,7,8,9];
document.getElementsByTagName("p")[25].innerHTML=`Input:${array}`;
sort(array);    
document.getElementsByTagName("p")[26].innerHTML=`Answer:${array}`;

const jhon = { name: "Jhon", age: 23 };
const bill = { name: "Bill", age: 18 };
const donald = { name: "Donald", age: 6 };

const people = [ jhon, bill , donald ];

document.getElementsByTagName("p")[29].innerHTML=`Input:${people}`;
sortByAge(people);
document.getElementsByTagName("p")[30].innerHTML=`Answer:${people}`;


const strings = ["C++", "C#", "C++", "С#",
  "C", "C++", "JavaScript", "C++", "JavaScript"
];

document.getElementsByTagName("p")[33].innerHTML=`Input:${strings}`;
document.getElementsByTagName("p")[34].innerHTML=`Answer:${unique(strings)}`;

let art = new Article('udk', 'name', 'author', 'journal');

let hashTable = {
    array: new Array(100),
    date: null,
    length: function () {
        return array.length;
    }

};

saveInHashTable(art, hashTable)

document.getElementsByTagName("p")[37].innerHTML=`Input:${art}`;
document.getElementsByTagName("p")[38].innerHTML=`Answer:${hashTable}`;