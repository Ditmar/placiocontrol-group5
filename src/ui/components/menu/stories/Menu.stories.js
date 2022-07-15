import React from 'react';
import { Menu } from '../wrapper/Menu/Menu';
export default {
    title: 'ui/components/menuglobal/wrapper/menu',
    component: Menu,
}

const Template = args => <Menu {...args}/>
export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
    param: false
}

export  const DefaultMenuItemCollapsed = Template.bind({});
DefaultMenuItemCollapsed.args = {
    param: true
}