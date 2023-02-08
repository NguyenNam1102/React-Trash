import React from 'react';
import AddTodoClass from './AddTodoClass';
import FormEdit from './FormEdit';
import { toast } from 'react-toastify';


class FormTodo extends React.Component {

    state = {
        listName: [
            { id: '01', name: 'Nguyen Van A' },
            { id: '02', name: 'Nguyen Van B' },
            { id: '03', name: 'Nguyen Van C' },
        ],
        editTodo: {},
        title: '',
        updateTitle: '',
        nameSave: '',
        showForm: false.valueOf
    }

    handleChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            title: event.target.value,
        })
    }

    handleAdd = () => {
        if (!this.state.title) {
            toast.error(`Vui lòng nhập đủ thông tin!`)
            return;
        }
        // if(undefined/null/empty) => false

        let todo = { id: Math.floor(Math.random() * 10000), name: this.state.title }

        let currentListTodo = this.state.listName;
        currentListTodo.push(todo);

        this.setState({
            listName: currentListTodo
        })
    }

    handleDelete = (item) => {
        // console.log(item.id);
        let updateList = this.state.listName;
        updateList = updateList.filter((itemUser) => itemUser.id !== item.id)
        //console.log(this.props.data)
        //console.log(updateList)
        this.setState({
            listName: updateList
        })
    }

    handleEdit = (item) => {
        let updateList = item.name;
        // console.log(updateList)
        this.setState({
            updateList: this.state.updateTitle
        })
    }

    handleChangeInputEdit = (event) => {
        event.preventDefault();
        const updateName = event.target.value;
        console.log('updateName: ', updateName);
        this.setState({
            nameSave: updateName
        });
    }

    handleSave = (event) => {
        event.preventDefault();
    }



    render() {
        { console.log('nameSave: ', this.state.nameSave) }

        return (
            <>
                <input type="text" placeholder="Enter a Todo..."
                    // value={this.state.updateTitle}
                    onChange={(event) => this.handleChangeInput(event)} />
                <button onClick={() => this.handleAdd()}>
                    Add
                </button>
                <AddTodoClass data={this.state.listName} handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit} handleChangeInputEdit={this.handleChangeInputEdit}
                    handleSave={this.handleSave} />

            </>

        )
    }
}

export default FormTodo;