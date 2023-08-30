
// 주어진 배열의 요소길이의 갯수를 요소로, 주어진 배열의 요소의 최대길이만큼 인덱스를 갖는 새로운 배열을 리턴하는 함수만들기





function wordIndexing (wordList) {
    let answer = [];
    let lengthArr = [];

    for (i = 0; i < wordList.length; i++) { //lengthArr 배열에 testArr 요소의 length 넣기
        lengthArr[i] = wordList[i].length;
    }

    lengthArr.sort(function(a,b){  // lengthArr의 최대값 + 1만큼의 인덱스를 가진 배열 answer
                                   // 0부터 lengthAtt의 최대값까지 세야 하기 때문에 마지막에 +1
        if(a > b) return 1;
        if(a < b) return -1;
        else return 0;
    });
    answer.length = lengthArr[lengthArr.length - 1] + 1; 


    for(i = 0; i < answer.length; i++) { // answer 배열 돌면서 lengthArr 요소값의 갯수(count)값 채우기
        
        let count = 0;
        
        for(j = 0; j < lengthArr.length; j++){ // lengthArr 배열 순환
             if (i === lengthArr[j]){ // i값이 lengthArr[j]값과 같으면 count 1씩 증가 
                count++;
            }
        } // lengthArr 한번 돌고 난 후의 count값을 answer[i]에 각각 저장

        answer[i] = count;
    }

    return answer;
}     

let testArr = ['a', 'bbb', 'cc','ddddd','ejkskjaj','g','hhh',''];

console.log(wordIndexing(testArr));




// 주어진 배열의 문자열길이의 갯수를 요소로, 주어진 배열의 문자열의 길이만큼 인덱스를 갖는 새로운 배열을 리턴하는 함수만들기


function wordIndexing (wordList) {
    let answer = [];
    let lengthArr = [];

    for (i = 0; i < wordList.length; i++) { //lengthArr 배열에 testArr 요소의 length 넣기
        lengthArr[i] = wordList[i].length; //lengthArr는 worldList의 문자열 길이 배열
        answer[lengthArr[i]] = 1;
        console.log(answer);

        //answer[길이] = 갯수
    }
    
 
    return answer;
}     

let testArr = ['a', 'bbb', 'cc','ddddd','ejkskjddaj','g','hhh',''];

console.log(wordIndexing(testArr));

if(answer[i] >= 1) answer[i] += 1; 
else if (answer[i]) answer[i] = 1;
else answer[i] = 0;



if(answer[indexOf(lengthArr[i])]) anwer[i] += 1
if (answer[i].length === 0 && answer[i].length !== '') answer[i] = 0


// 다시 풀어보깅

function wordIndexing(wordList) {
   
    let answer = [];
    answer.length = Math.max(...wordList.map((el) => el.length)) + 1; // answer 배열의 길이를 wordList 요소들 길이중 가장 큰 값에 1더한 걸로해 (+1은 빈문자열도 세야되니까 하나 더 넣음)


    answer.fill(0) // 각 배열을 0으로 채워넣엉
    
    for(let i = 0; i < wordList.length; i++) { // answer에 wordList[i]값을 인덱스로로 갖는 요소 값을 하나씩 올령
        wordList[i] = wordList[i].length;
        answer[wordList[i]] +=1;
    }
    return answer;
    }
   
let testArr = ['a', 'bbb', 'cc','ddddd','ejkskjddaj','g','hhh',''];

console.log(wordIndexing(testArr));