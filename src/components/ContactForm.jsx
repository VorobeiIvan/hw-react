import React, { Component } from 'react';
import NameInput from './NameInput';
import NumberInput from './NumberInput';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <NameInput value={name} onChange={this.handleChange} />
        <NumberInput value={number} onChange={this.handleChange} />
        <button className="btn-add" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
