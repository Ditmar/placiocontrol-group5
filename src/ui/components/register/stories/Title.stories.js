import React from "react";
import Title  from "../subcomponents/Title/Title";
export default {
    title: 'ui/components/register/subcomponents/Title',
    component: Title
}
const Template = args => <Title  {...args}/>
export const DefaultTitle= Template.bind({});
DefaultTitle.args = {
    text: 'Soy un titulo :D'
}
