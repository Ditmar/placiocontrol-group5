import React from "react";
import TitleComponent from "../subcomponents/TitleComponent";
export default {
    title: 'ui/components/CardsLastDocuments/title-stories',
    component: TitleComponent
}
const Template = args => <TitleComponent  {...args} />
export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
    title: 'insert  new title',
    group: 'insert a new group'
}