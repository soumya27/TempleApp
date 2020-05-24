import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
// import {register} from '../services/userService';

class RegisterForm extends Form {
    //todo: complete registration
    state = {
        data: {
            username: "",
            password: "",
            name:"",
        },
        errors:{}
    }

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label("Name")
    }

    doSubmit =  () => {
        console.log("Registered");
        // await register(this.state.data);
    };

    render() {
        return(
            <div className="container p-5">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                    {this.renderInput("name","Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
