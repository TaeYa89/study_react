import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";    // react-router-dom 5.3.0
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // react-router-dom 6.4.2
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        //<Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Detail />} />
        </Routes>
        //</Router>
    );
    // react-router-dom 5.3.0
    // return (
    //     <Router>
    //         <Switch>
    //             <Route path="/movie">
    //                 <Detail />
    //             </Route>
    //             <Route path="/">
    //                 <Home />
    //             </Route>
    //         </Switch>
    //     </Router>
    // );
    //     event.preventDefault();
    //     if (toDo === '') {
    //         return;
    //     }
    //     setTodo('');
    //     console.log(toDo);
    // };
    //
    // return (
    //     <div>
    //         <form onSubmit={onSubmit}>
    //             <input
    //                 value={toDo}
    //                 onChange={onChange}
    //                 type='text'
    //                 placeholder='Write your to do...'></input>
    //             <button>Add To Do</button>
    //         </form>
    //     </div>
    // );
}

export default App;
