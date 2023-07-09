var score = 80; //변수 선언과 값의 할당
score = 90; // 값의 재할당


/* 

- 변수를 선언하고 값을 할당하는 것은 엄밀히 말하면 '재할당' 하는 것이다. (초기값 undefined 에서 80으로 재할당)
- 값을 재할당 하는 경우, 새로운 메모리 공간을 확보하고 그 공간에 재할당 값 90을 저장하여 score 이름표를 다시 붙인다.
- undefined와 80이 저장된 메모리공간은 더이상 사용하지 않는다.
- 이런 불필요한 값은 가비지 콜렉터(garbage collector)에 의해 메모리에서 자동 해재된다. (단, 언제 해제될지는 예측 불가)

*/