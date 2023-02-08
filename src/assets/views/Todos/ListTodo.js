import React from 'react';
import Addtodo from './AddTodo';
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Videos' },
            { id: 'todo3', title: 'Fixing Bugs' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo]
            // listTodos: currentListTodo
        })

        toast.success("Đã thêm!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Đã xóa!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtpyObj = Object.keys(editTodo).length === 0;

        // save
        if (isEmtpyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update Succed!");
            return;
        }

        // edit
        this.setState({
            editTodo: todo
        })

    };

    handleOnChangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.editTodo };
        editTodoCoppy.title = event.target.value;
        this.setState({
            editTodo: editTodoCoppy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.props.listTodos;


        let isEmtpyObj = Object.keys(editTodo).length === 0;

        return (
            <div className='list-todo-container'>
                <Addtodo
                    addNewTodo={this.addNewTodo}
                />
                <div className='list-todo-content' >
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id} >
                                    {isEmtpyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmtpyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    &nbsp;&nbsp;
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ListTodo;