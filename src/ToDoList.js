import { useState, useEffect, memo } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();

        if (toDo === "") {
            return;
        }

        setToDos((currentArray) => [...currentArray, toDo]);
        setToDo("");
    };

    // 버튼 클릭을 통한 li 삭제 추가
    // 아직 react에 익숙하지 않아 list와 li 둘 다 삭제하려 했음
    // toDos만 삭제하면 re-rendering 하여 li도 삭제됨
    const onClick = (index) => {
        setToDos((curToDos) => {
            return curToDos.filter((item, curIndex) => curIndex !== index);
        });
    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <button onClick={() => console.log(toDos)}>toDos 로그</button>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onClick(index)}>제거</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
