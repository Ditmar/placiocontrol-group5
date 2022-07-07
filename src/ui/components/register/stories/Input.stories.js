import React from "react";
import { Input }  from "../subcomponents/Input/Input";
import handleChange from "../Register";
export default {
    title: 'ui/components/register/subcomponents/Input',
    component: Input
}
const Template = args => <Input  {...args}/>
export const DefaultInput= Template.bind({});
const attributeUser = { id: 'correo', name: 'correo', type: 'email', placeholder: 'Email Address'}
DefaultInput.args = {
    attribute: attributeUser,
    handleChange: () => handleChange('correo', 'value'),
    param: false
}

export const AlertErrorInput= Template.bind({});
AlertErrorInput.args = {
    attribute: attributeUser,
    handleChange: () => handleChange('correo', 'value'),
    param: true
}