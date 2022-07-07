import React from 'react';
import   {Input}     from '../subcomponents/input/Input';
import handleChange from '../ListDocs'
export default {
    title:'ui/components/listdocs/Input',
    component:Input
}

const Template = args => <Input {...args} />
export const DefaultInputFilter= Template.bind({})
const attributeFilter ={name:'name',type:'text', placeholder:''}

DefaultInputFilter.args = {
    attribute: attributeFilter,
    handleChange: () =>handleChange('name','text'),
    param: false
}