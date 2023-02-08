import React from "react";
import './Demo.scss';
import { toast } from 'react-toastify';


class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent default: ngăn chặn hành động mặc định (submit)
        if (!this.state.title || !this.state.salary) {
            toast.error(`Vui lòng nhập đủ thông tin!`)
            return;
        }
        console.log('>>> check data input:', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: '',
        })
        toast.success(`Thêm thành công!`)

    }

    render() {
        return (
            <div>
                <form>
                    <label
                        htmlFor="fname"> Job's title:
                    </label> <br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)} />
                    <br />
                    <label
                        htmlFor="lname"> Salary:
                    </label> <br />
                    <input type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} />
                    <br />
                    <input className="btn-submit" type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </div>
        )
    }
}

export default AddComponent;