
import {useState} from "react";

const Todo = ({todoList, setTodoList, filterTriger}) => {


    const setTodoComplete = (key) => {
        setTodoList([...todoList.map((todo, keys) =>
            keys === key ? {...todo, complete: !todo.complete} : {...todo}
        )])
    }
    const setTodoText = (key,text) => {
        setTodoList([...todoList.map((todo, keys) =>
            keys === key ? {...todo, title: text.trim()} : {...todo}
        )])
    }
    const deleteTodoText = (key) => {
        setTodoList([...todoList.filter((todo, keys) =>
            keys !== key
        )])
    }

    return (
        todoList.map((todo, key) => {

            if (filterTriger !== '') {
                if ( todo.complete  == (filterTriger === 'true') ) return ('')
            }

            return (
                <div className="input-group mb-3" key={key}>
                    <div className="input-group-text">
                        <input tabIndex="-1" className="form-check-input mt-0" type="checkbox"
                               checked={todo.complete}
                               onChange={() => setTodoComplete(key)}
                        />
                    </div>
                    <input type="text" tabIndex={key+1}
                           onChange={(e) => setTodoText(key, e.target.value)}
                           className={!todo.complete ? 'form-control' : 'form-control text-decoration-line-through'}
                           value={todo.title}/>
                    <span className="input-group-text">
                        <button onClick={() => deleteTodoText(key)} type="button"  tabIndex="-1" className="btn-close align-middle" aria-label="Close"/>
                    </span>
                </div>
            )
        })

    );
};

export default Todo;
