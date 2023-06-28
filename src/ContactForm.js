import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

class ContactForm extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };
  required = val => val && val.length;
  render() {
    return (
      <LocalForm model="user" onSubmit={this.handleSubmit}>
        <label>Your Name: </label>
        <Control.text
          model=".yourname"
          validators={{ required: this.required }}
        />

        <span className="error">
          <Errors
            model=".yourname"
            show="touched"
            message={{ required: "Name is required" }}
          />
        </span>

        <button type="submit">Submit</button>
      </LocalForm>
    );
  }
}

export default ContactForm;
