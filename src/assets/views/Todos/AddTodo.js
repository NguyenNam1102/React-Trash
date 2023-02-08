import React from 'react';
import { toast } from 'react-toastify';

class Addtodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (events) => {
        this.setState({
            title: events.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Vui lòng nhập đủ thông tin!`)
            return;
            // if(undefined/null/empty) => false
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title

        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type='button' className='add'
                    onClick={() => this.handleAddTodo()}
                > Add </button>
            </div>
        )
    }
}

export default Addtodo;












