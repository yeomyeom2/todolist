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


# HOOK

## useState
* 상태 관리 시 사용
* 배열의 첫번째 원소는 상태 값, 두번째 원소는 상태를 설정하는 함수
* 이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트 리렌더링
~~~
const [value, setValue] = useState(0);
~~~

# useEffect
* 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
1. 렌더링 될 때마다
~~~
useEffect(() => {
	console.log('렌더링 될 때마다 실행');
});
~~~

2. 마운트 될 때만(컴포넌트가 화면에 맨 처음 렌더링 될 때만)
~~~
useEffect(() => {
	console.log('함수의 두번째 파라미터로 비어있는 배열을 넣어라.');
}, []);
~~~

3. 특정 값이 업데이트 될 때만
~~~
useEffect(() => {
	console.log('함수의 두번째 파라미터로 검사하고 싶은 값을 넣어라. props로 전달받은 값을 넣어도 됨.');
}, [name]);
~~~

4. 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 수행하고 싶을 때
~~~
useEffect(() => {
	console.log('name이 업데이트 될 때');
	return () => {
		console.log('cleanup 함수 반환');
	};
}, [name]);
~~~
~~~
useEffect(() => {
	console.log('effect');
	return () => {
		console.log('unmount 될 때만 실행');
	};
}, []);
~~~

## useReducer
* useState보다 더 다양한 컴포넌트 상황에 따 다양한 상태를 다른 값으로 업데이트 할 때 사용
* useReducer의 첫번째 파라미터에는 리듀서 함수, 두번째 파라미터에는 해당 리듀서의 기본값 입력
* 이 Hook 사용 시 state 값(현재 가리키고 있는 상태), dispatch 함수(액션을 발생시키는 함수)를 받아옴
* 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수 호출
~~~
const [state, dispath] = useReducer(reducer, {
	name: '',
	nickname: ''
});
~~~

## useMemo
* 함수 컴포넌트 내부에서 발생하는 연산을 최적화
* memo = memoization 해서 렌더링 될 때마다 실행 X, 기존에 연산된 값을 재사용 
* 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행, 원하는 값이 바뀌지 않았다면 이전 결과를 다시 사용
~~~
const avg = useMemo(() => {
	console.log('첫번째 파라미터: 콜백함수, 두번째 파라미터: 의존성 배열 / 빈 배열을 넘겨주면 마운트 될 때만 계산');
}, []);
~~~

## useCallback
* useMemo와 유사, 함수 재사용
~~~
const onChange = useCallback(e => {
	console.log('첫번째 파라미터: 생성하고 싶은 함수, 두번째 파라미터: 배열');
}, []); //컴포넌트가 처음 렌더링 될때만 함수 생성

const onChange = useCallback(e => {

}, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성
~~~

## useRef
* 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함
* 추가로 컴포넌트 로컬 변수를 사용해야 할 때에도 사용(로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값)
* useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
~~~
const inputEl = useRef();
<input ref={inputEl} />

const id = useRef(1);
const setId = (n) => {
	id.current = n;
};
~~~

