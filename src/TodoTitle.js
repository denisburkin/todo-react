import React from 'react';

const TodoTitle = ({todoList}) => {
    return (
        <span className="position-relative btn btn-primary mb-4 text-center">Todo List
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {todoList.length}
                <span className="visually-hidden">unread messages</span>
            </span>
        </span>
    );
};

export default TodoTitle;
