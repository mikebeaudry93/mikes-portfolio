import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Axios, db } from "../../firebase/firebaseConfig";

import "./modal-body.scss";

export class ModalBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
    };
  }

  handleValidation() {
    let data = this.state.data;
    let errors = {};
    let formIsValid = true;

    if (!data["name"]) {
      formIsValid = false;
      errors["name"] = true;
    }

    if (!data["email"]) {
      formIsValid = false;
      errors["email"] = "Field is required";
    }
    if (typeof data["email"] !== "undefined") {
      let lastAtPos = data["email"].lastIndexOf("@");
      let lastDotPos = data["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          data["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          data["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (!data["message"]) {
      formIsValid = false;
      errors["message"] = "Field is required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(input, e) {
    let data = this.state.data;
    data[input] = e.target.value;
    this.setState({
      data,
    });
  }

  sendEmail = () => {
    const formData = this.state.data;
    Axios.post(
      "https://us-central1-mikes-portfolio.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Message Sent!");
      this.sendEmail();
      let data = {};
      data["name"] = "";
      data["email"] = "";
      data["message"] = "";
      this.setState({ data: data });
      console.log(this.state.data.name);
    }
  }

  render() {
    return (
      <div className="modal-container">
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <TextField
            className="txtfield"
            size="small"
            type="text"
            label="Name"
            value={this.state.data["name"]}
            onChange={this.handleChange.bind(this, "name")}
            autoComplete="none"
            error={this.state.errors["name"]}
            helperText={this.state.errors["name"] ? "Field is required" : ""}
          />
          <TextField
            refs="email"
            className="txtfield"
            size="small"
            type="email"
            label="Email"
            value={this.state.data["email"]}
            onChange={this.handleChange.bind(this, "email")}
            autoComplete="none"
            error={this.state.errors["email"]}
            helperText={
              this.state.errors["email"] ? "Incorrect email address" : ""
            }
          />
          <TextField
            refs="message"
            className="txtfield"
            multiline
            rows={7}
            type="text"
            label="Message"
            size="small"
            value={this.state.data["message"]}
            onChange={this.handleChange.bind(this, "message")}
            autoComplete="none"
            error={this.state.errors["message"]}
            helperText={this.state.errors["message"] ? "Field is required" : ""}
          />
          <div className="btn-box">
            <div className="btn-box-right">
              <Button type="button" onClick={this.props.handleClose}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalBody;
