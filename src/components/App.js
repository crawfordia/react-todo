import React from 'react';

import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.toggleTodoDone = this.toggleTodoDone.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    render() {
        return <React.Fragment>
            <h1>Todos</h1>
            <CreateTodoForm onCreateTodo={this.createTodo} />
            <TodoList 
                todos={this.state.todos} 
                onToggleDone={this.toggleTodoDone}
                onDelete={this.deleteTodo} 
            />
        </React.Fragment>
    }

    toggleTodoDone(id) {
        this.setState((prevState) => ({
            ...prevState,
            todos: prevState.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        }))
    }

    createTodo(body) {
        const newTodo = {
            id: (new Date()).getTime(),
            body,
            done: false
        }

        this.setState((prevState) => ({
            ...prevState,
            todos: [
                newTodo,
                ...prevState.todos
            ]
        }))
    }

    deleteTodo(id) {
        this.setState((prevState) => ({
            ...prevState,
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    }
}