import React from 'react';

const NameInput = ({ value, onChange }) => {
  return (
    <div className="wrapper">
      <label className="label">Name</label>
      <input
        className="input"
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name (Alex)"
      />
    </div>
  );
};

export default NameInput;
