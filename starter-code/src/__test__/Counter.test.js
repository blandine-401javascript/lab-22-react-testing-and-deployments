  
import React from 'react'
import { shallow, mount } from 'enzyme'

import Counter from '../components/Counter'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Counter state change works as expected', () => {
  test('should be alive at app start', () => {
    const component = shallow(<Counter />)
    expect(component.find('span').exists()).toBeTruthy()
  })

  it('lets you add', () => {
    let component = shallow(<Counter />);

    component.find('span.up.clicker').simulate('click', {});

    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  })

  it('lets you subtract', () => {
    let component = shallow(<Counter />);

    component.find('span.down.clicker').simulate('click', {});

    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative');
  })
});


