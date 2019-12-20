function addClass(obj, cls) {
    let regex = new RegExp('\\b' + cls + '\\b', 'i');
    if (!regex.test(obj.className)) {
        obj.className += ' ' + cls;
    }
}
// const obj = {
//     className: 'open menu'
//   };
// addClass(obj,'new');
// console.log(obj);

function camelize(text) {
    let array = text.split(/-+/);
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i].charAt(0).toUpperCase() + array[i].substr(1)
    }
    if (array[0] != '')
        str = str.charAt(0).toLowerCase() + str.substr(1);
    text = str;
    return text;
}

function removeClass(obj, cls) {     //
    let str = String(obj.className);
    let regex = new RegExp(`(\\s|\\b)${cls}(\\s|\\b)`, 'g')
    obj.className = str.replace(regex, '');
    return str;
}

// removeClass(obj,'new');
// console.log(obj);
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[arr.length - i - 1] > b || arr[arr.length - i - 1] < a) {
            arr.splice(arr.length - i - 1, 1);
            i--;
        }
    }
}

function findCouple(array1, num) {
    let arr = [];
    for (let i = 0; i < array1.length; i++) {
        fNum = num - array1[i];
        for (let j = 0; j < array1.length; j++) {
            if (fNum == array1[j]) {
                let lever = true;
                for (let y = 0; y < arr.length; y++) {
                    if (arr[y] == `${fNum}+${array1[i]}` || arr[y] == `${array1[i]}+${fNum}`)
                        lever = false;
                }
                if (lever) {
                    arr.push(`${fNum}+${array1[i]}`);
                }
            }
        }
    }
    return arr;
}
function startingSubstring(array) {
    let result = '';
    let i = 0;
    while (true) {
        let lever = true;
        let char = array[0].charAt(i);
        for (let j = 0; j < array.length; j++) {
            if (char != array[j].charAt(i))
                lever = false;
        }
        if (lever) {
            result += char;
        }
        else
            break;
        i++;
    }
    return result;
}
const a1 = { age: 1 };
const a2 = { age: 2 };
const a3 = { age: 3 };

function sortByAge(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].age > arr[j + 1].age) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Number((Math.random() * 100) % arr.length));
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
}

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

function Article(udk, name, author, journal) {
    this.udk = udk;
    this.name = name;
    this.author = author;
    this.journal = journal;
}

// let hashTable = {
//     array: new Array(10),
//     date: null,
//     length: function () {
//         return array.length;
//     }

// };

function hash(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;

}

function saveInHashTable(article, hashTable) {
    hashTable.array[hash(article.name) % hashTable.length()] = article;
    let date = new Date();
    hashTable.date = date.getDate();
}
