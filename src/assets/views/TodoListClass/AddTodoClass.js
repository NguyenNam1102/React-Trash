import React from 'react';
import FormEdit from './FormEdit';
import { toast } from 'react-toastify';


class AddTodoClass extends React.Component {

    state = {
        updateList: {},
        showForm: false,
        nameCoppy: {},
    }

    handleDelete = (item) => {
        this.props.handleDelete(item);
    }

    handleEdit = (item) => {
        this.props.handleEdit(item);
        this.setState({
            showForm: true,
            nameCoppy: { ...this.state.nameCoppy, ...item }
        });
    }

    handleChangeInputEdit = (event) => {
        event.preventDefault();
        this.props.handleChangeInputEdit(event);
    }

    handleSave = (event) => {
        event.preventDefault();
        this.setState({
            showForm: false,
        })
        this.props.handleSave(event);
    }

    render() {
        return (
            <>
                <ul>
                    {this.props.data.map((item, index) => {
                        return (
                            <li key={index}>STT: {index + 1} ---  Name: {item.name}
                                &nbsp; <button onClick={() => this.handleEdit(item)}>Edit</button>
                                &nbsp; <button onClick={() => this.handleDelete(item)}>Delete</button>
                            </li>
                        )
                    })
                    }

                </ul>
                {this.state.showForm && <FormEdit dataCoppy={this.state.nameCoppy}
                    handleSave={this.handleSave} handleChangeInputEdit={this.handleChangeInputEdit} />}
            </>
        )
    }
}

export default AddTodoClass;