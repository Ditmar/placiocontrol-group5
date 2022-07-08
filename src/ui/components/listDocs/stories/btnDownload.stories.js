import React from 'react';
import { BtnDownload } from '../subcomponents/btnDownloader/BtnDownloader';
export default {
    title: 'ui/components/listdocs/BtnDownload',
    component: BtnDownload,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <BtnDownload  {...args}/>
export const DefaultBtnDownload = Template.bind({});
DefaultBtnDownload.args = {
    label: 'Normal',
    backgroundColor: '#29CC97',
    isShadow: true,
    size: 'md'
}

export  const PrimaryBtnDownload = Template.bind({});
PrimaryBtnDownload.args = {
    label: 'Low',
    backgroundColor: '#FEC400',
    isShadow: false,
    size: 'lg'
}

export  const HeighyBtnDownload = Template.bind({});
HeighyBtnDownload.args = {
    label: 'High',
    backgroundColor: '#F12B2C',
    isShadow: false,
    size: 'lg'
}


