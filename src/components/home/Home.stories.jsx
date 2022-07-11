import Home from './Home'
export default {
    title: 'ANAHIFLORES/page',
    component: Home,
    
}
const Template = args => <Home  {...args}/>
export const home= Template.bind({});
