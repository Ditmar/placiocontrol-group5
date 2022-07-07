import React from 'react';

import img4 from '../assets/avatar/img/4.jpg'

import { ImageAvatar }  from '../subcomponents/ImageAvatar/ImageAvatar';
export default{
    title:"ui/components/listdocs/imageAvatar",
    component: ImageAvatar,
    args:{}
}

const Template = args => <ImageAvatar {...args} />
export const DefauldImage = Template.bind({});
DefauldImage.args = {
    urlImage:img4,
    sizeWidth:"44px",
    sizeHeight: "44px"
}