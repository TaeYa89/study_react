import { useState, useEffect, memo } from 'react';

function Self() {
    const [cnt, setCnt] = useState(0);
    const [text, setText] = useState('');

    const onClick = () => setCnt((cur) => cur + 1);
    const onClick2 = () => setCnt(() => 0);
    const onClick3 = () => {
        const inpText1 = document.querySelector('#ipt1').value;
        const btn1 = document.querySelector('#btn2');

        btn1.innerText = inpText1;
    };

    useEffect(() => {}, []);

    function Btn(props) {
        return (
            <button id={props.parm.id} onClick={props.parm.fn1}>
                {props.parm.btnText}
            </button>
        );
    }

    const Mbtn = memo(Btn);

    return (
        <div>
            <h1>클릭횟수 : {cnt}</h1>
            <input id='ipt1' type='text' />
            <Mbtn
                parm={{
                    id: 'btn1',
                    btnText: '버튼명변경',
                    fn1: onClick3,
                }}
            />
            <div>
                <Mbtn
                    parm={{
                        id: 'btn2',
                        name: 'hyungtae kim',
                        btnText: '클릭',
                        fn1: onClick,
                    }}
                />
                <Mbtn
                    parm={{
                        id: 'btn3',
                        btnText: '초기화',
                        fn1: onClick2,
                    }}
                />
            </div>
        </div>
    );
}

export default Self;
