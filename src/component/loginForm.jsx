import React from "react";
import Form from "../common/form";
import Joi from 'joi-browser';

class LoginForm extends Form {

    state = {
        data :{
            username: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    doSubmit = () =>{
        console.log("Submitted");
    }

    render() {
        return (
            <div className="container p-5">
                <h1>Login</h1>
                <div className="container ">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username","Username",)}
                        {this.renderInput("password","Password","password")}
                        {this.renderButton("Login")}
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
