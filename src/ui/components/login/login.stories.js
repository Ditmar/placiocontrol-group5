import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";

import { Login } from "../../../context/Login/Login";
export default{
    title: "Storybook-Login",
    component:Login
}

const Template = (args) => <Login {...args}/>
export  const log_in= Template.bind({}); 
log_in.args = {
    isLoading: true,
    label: "this is the login", 
    errors: false
}
