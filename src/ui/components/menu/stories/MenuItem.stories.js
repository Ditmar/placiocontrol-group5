import React from 'react';
import { MenuItem } from '../wrapper/Menu/MenuItem/MenuItem';
export default {
    title: 'ui/components/menuglobal/wrapper/menu/menuitem',
    component: MenuItem,
}

const Template = args => <MenuItem {...args}/>
export const DefaultMenuItem = Template.bind({});
DefaultMenuItem.args = {
    title: 'Inicio',
    image: 'https://cdn-icons-png.flaticon.com/128/7598/7598798.png',
    param: false
}

export  const DefaultMenuItemCollapsed = Template.bind({});
DefaultMenuItemCollapsed.args = {
    title: 'Inicio',
    image: 'https://cdn-icons-png.flaticon.com/128/7598/7598798.png',
    param: true
}