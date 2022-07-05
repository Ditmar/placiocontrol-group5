import React from 'react';
import Review from './Reviews'

export default {
    title: 'sis719/review',
    component: Review
}

const Template = (args) => <Review {...args}/>

export const review = Template.bind({})
review.args = {
    titulo:'',
}