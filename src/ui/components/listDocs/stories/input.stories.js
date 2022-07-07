import React from 'react';
import Input from '../subcomponents/input/Input';
import handleChange from '../../listDocs/tableListTesis/TableListTesis'
export default {
    title:'ui/components/listdocs/Input',
    component:Input,
   
}

const Template = args => <Input {...args} />
export const DefaultInputFilter= Template.bind({})
const attributeFilter ={name:'inputFiltername',type:'text', placeholder:''}

DefaultInputFilter.args = {
    attribute: attributeFilter,
    handleChange: () =>handleChange('inputFiltername'),
    param: false
}