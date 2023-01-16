import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function Hello() {
    useEffect(() => {
        console.log('hi in arrow');

        // 생성된 컴포넌트가 삭제될 때 return을 통해 [console.log('bye in arrow')] 실행
        // 메모리 누수가 발생하지 않도록 정리(clean-up)하기 위함
        return () => console.log('bye in arrow');
    }, []);

    // 위의 화살표 함수와 동일한 기능을 function으로 구현
    // useEffect(function () {
    //     console.log('hi in function');
    //     return function () {
    //         console.log('bye in function');
    //     };
    // }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [showing, setShowing] = useState(false);

    const onClick = () => setValue((prev) => prev + 1);
    const onClick2 = () => setShowing((prev) => !prev);
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    console.log('항상 실행');

    useEffect(() => {
        console.log('한번만 실행');
    }, []);

    useEffect(() => {
        if (keyword !== '' && keyword.length > 5) {
            console.log('SEARCH FOR', keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log('클릭할 때 ', counter);
    }, [counter]);

    useEffect(() => {
        console.log('검색어 변경 혹은 클릭할 때 ');
    }, [counter, keyword]);

    return (
        <div>
            <div>
                <input
                    value={keyword}
                    onChange={onChange}
                    type='text'
                    placeholder='Search here...'></input>
                <h1 className={styles.title}>
                    Welcome back! counter : {counter}
                </h1>
                <button onClick={onClick}>Click Me</button>
                <Button text={'Continue'} />
            </div>
            <div>
                <button onClick={onClick2}>{showing ? 'Hide' : 'Show'}</button>
                {showing ? <Hello /> : null}
            </div>
        </div>
    );
}

export default App;
