import React from 'react';
import { toast } from 'react-toastify';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';

const TosdoList = ({ todos, setTodos, setEditTodo }) => {

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);

    }

    const handleDelete = ({ id }) => {
        // console.log('>>>Delete: ', id);
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.success(`Đã xóa!`)
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        )
    }

    return (
        <div>
            {todos.map((todo) =>
                <li className='list-item' key={todo.id} >
                    <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                        <CheckCircleTwoToneIcon color=''></CheckCircleTwoToneIcon>
                    </button>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                        <DriveFileRenameOutlineTwoToneIcon color=''></DriveFileRenameOutlineTwoToneIcon>
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)} >
                        <DeleteTwoToneIcon color=''></DeleteTwoToneIcon>
                    </button>
                </li>)}
        </div>
    )
}

export default TosdoList;
