
const disemvowel = () => {
    const el = document.querySelector("#name-to-disemvowel");//is input
   let p = document.querySelector(".disemvowel-string");//output
    const str = el.value;
    console.log(el.value)
    let output = "";
    const vowels = "aeiouAEIOU"; 
    for(const char of str) {
        if(!vowels.includes(char)) {
            output += char;
        }
    }
    p.textContent = output;
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;//input
    const p = document.querySelector("#is-palindrome-p");//output
    let result = "true"; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - i - 1]) {
            result = "false"
        }
    }
     p.textContent = result ;
}
const sum = (arr) => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num
    }
    return sum; 
}
const average = (arr) => {
    // arr = [1, 2, 3];
    let sumOfNums = sum(arr) 
    return sumOfNums / arr.length; 
}

const onlyOdds = arr => {
    return arr.filter(num => num % 2 === 1)
}

const favoriteNumbers = () => {
    let list = document.querySelectorAll("#favorite-numbers > li");
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })
    const sumNum = sum(arr);//output is total sum 
    const averageOfNums = average(arr);//output of total average
    const onlyOddsOfNums = onlyOdds(arr);//output of this is an array

    const sumOfFav = document.querySelector("#sum-of-favorite-nums");//output
    sumOfFav.textContent = `Sum:${sumNum}`; 

    const aveOfFav = document.querySelector("#average-of-favorite-nums");//output
    aveOfFav.textContent = `Average: ${averageOfNums}`; 

    const oddList = document.querySelector("#list-of-odd-favorite-nums");//output
    
    onlyOddsOfNums.forEach((odd) => {
    const li = document.createElement("li");
    li.innerText = odd;
      oddList.appendChild(li);
    });
}

      favoriteNumbers();

const incrementCount = () => {
    const counter = document.querySelector("#click-count");//output
    counter.textContent = Number(counter.textContent) + 1;
}

const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.textContent = 0;
}

const addItem = () => {
    let input = document.querySelector("#add-item")//input
    //input.innerHTML =""
    const shoppingList = document.querySelector(".shopping-list");//ul
    let item = input.value;//input value
    let listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.parentNode.removeChild(button)

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}