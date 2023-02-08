import React from 'react';
import { toast } from 'react-toastify';

class FormEdit extends React.Component {

    // state = {
    //     listResults: [
    //         { id: this.props.dataCoppy.id, name: this.props.dataCoppy.name }
    //     ]
    // }


    handleChangeInputEdit = (event) => {
        event.preventDefault();
        this.props.handleChangeInputEdit(event);
    }

    handleSave = (event) => {
        event.preventDefault();
        this.props.handleSave(event);
    }

    render() {
        return (
            <form >
                {console.log('>>>dataCoppy: ', this.props.dataCoppy)}
                <input onChange={(event) => this.handleChangeInputEdit(event)}
                    placeholder="Edit User..." defaultValue={this.props.dataCoppy.name}>
                </input>
                <button onClick={(event) => this.handleSave(event)}>Save</button>
            </form>

        )
    }

}
export default FormEdit;
