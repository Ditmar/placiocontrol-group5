import React from 'react';
import { Wrapper } from '../wrapper/Wrapper';
export default {
    title: 'ui/components/menuglobal/wrapper',
    component: Wrapper,
}

const Template = args => <Wrapper {...args}/>
export const DefaultWrapper= Template.bind({});
