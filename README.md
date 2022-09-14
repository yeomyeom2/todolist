# 배열 추가 관련 함수 정리

## push
* 기존 배열 끝에 하나 이상의 요소를 추가하고 배열의 새 길이 반환
~~~
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
~~~

## concat
* 둘 이상의 배열을 병합하는 데 사용. 기존 배열을 변경하지 않고 새 배열 반환
~~~
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
~~~

**결론**
리액트에서는 '불변성 유지'를 위해 state 내부의 값을 직접 수정하면 안됨.<br>
상태 업데이트 시 기존 상태를 그대로 두고 새로운 값을 상태로 설정해야 함. 이것을 불변성 유지라 하며, 성능 최적화를 위함<br>
push 함수 사용으로 state 변경 시 리렌더링 되므로<br>
변화가 잦은 데이터는 원형 데이터 유지를 위해 concat() 사용<br>
push 외 원본 배열 변경 함수: pop, splice, sort 등<br>
원본 배열 복사 후 새로운 배열 생성: contact, slice, map, filter 등

출처: https://chanie.tistory.com/6


useRef Hook은 DOM을 선택하는 용도 외에도, 다른 용도가 한가지 더 있습니다.
바로, 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리하는 것입니다. 
 
useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.

출처: https://bbangson.tistory.com/66 [뺑슨 개발 블로그:티스토리]

