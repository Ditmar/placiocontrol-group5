import React from 'react';
import { Register } from "../Register";
export default {
    title: 'ui/components/register',
    component: Register,
}
const Template = args => <Register  {...args}/>
export const DefaultRegister = Template.bind({});