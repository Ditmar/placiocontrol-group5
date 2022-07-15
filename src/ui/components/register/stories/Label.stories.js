import React from 'react';
import Label from '../subcomponents/Label/Label';
export default {
    title: 'ui/components/register/subcomponents/Label',
    component: Label
}
const Template = args => <Label  {...args}/>
export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
    text: 'Soy un Label :D'
}
