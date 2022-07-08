import React from "react";
import { Logo } from "../wrapper/Logo/Logo";
export default {
    title: 'ui/components/menuglobal/wrapper/logo',
    component: Logo,
}

const Template = args => <Logo  {...args}/>
export const DefaultLogo = Template.bind({});
DefaultLogo.args = {
    param: false
}

export  const DefaultLogoCollapsed = Template.bind({});
DefaultLogoCollapsed.args = {
    param: true
}
