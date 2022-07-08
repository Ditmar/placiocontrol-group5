import React from "react";
import ListComponent from "../subcomponents/ListComponent";
export default {
    title: 'ui/components/CardsLastDocuments/list-stories',
    component: ListComponent
}
const Template = args => <ListComponent  {...args} />
export const DefaultList = Template.bind({});
DefaultList.args = {
    description: 'insert  new description',
    pages: 'insert pages'
}