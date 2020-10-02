import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: ''
        }

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                placeholder="Add a new todo"
                value={this.state.body}
                onChange={this.handleBodyChange}>
            </input>
            <button type="submit">Add</button>
        </form>
    }

    handleBodyChange(e) {
        const { value: body } = e.target;

        this.setState(() => ({
            body
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        const body = this.state.body.trim();

        if (body.length > 0) {
            this.props.onCreateTodo(body);
            this.setState(() => ({
                body: ''
            }));
        }
    }
}