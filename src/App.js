import Todo from "./Todo";
import TodoTitle from "./TodoTitle";

import {useState} from "react";


function App() {

    const [todoList, setTodoList] = useState([])
    // const [filterTodoList, setFilterTodoList] = useState([])
    const [filterTriger, setFilterTriger] = useState('');

    const heandlerTodoSubmit = (e) => {
        if (e.key === "Enter") {
            setTodoList([...todoList, {
                title: e.currentTarget.value.trim(),
                complete: false
            }])
            e.currentTarget.value = ''
        }
    }
    const toduLitsFilters = (triger) => {

        let newToduList = todoList

        if (triger && triger !== '') {
            newToduList = [...todoList.filter((todo, keys) =>
                todo.complete === triger
            )]
        }

        return newToduList
    }

    return (
        <div className="container m-4">
            <div className="row justify-content-md-center">
                <div className="col-8 ">

                    <TodoTitle todoList={todoList}/>

                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Новая задача ..."
                               onKeyPress={heandlerTodoSubmit}
                        /> <label htmlFor="floatingInput">Новая задача ...</label>
                    </div>
                    <hr/>

                    <div className="input-group mb-4">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">фильтр</label>
                        <select onChange={(e) => setFilterTriger(e.target.value)} className="form-select" id="inputGroupSelect01" name="filter">
                            <option value="">Все</option>
                            <option value="true">Актальное</option>
                            <option value="false">Выполнено</option>
                        </select>
                    </div>
                    <hr/>

                    <Todo
                        todoList={todoList}
                        filterTriger={filterTriger}
                        setTodoList={setTodoList}/>
                </div>
            </div>
        </div>
    );
}

export default App;
