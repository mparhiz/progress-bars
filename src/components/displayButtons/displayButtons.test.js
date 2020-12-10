import React from 'react';
import DisplayButtons from './DisplayButtons';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import * as enzyme from "enzyme";

enzyme.configure({ adapter: new Adapter() });

test('renders without crashing: Enzyme', () => {
  const wrapper = enzyme.mount(
    <DisplayButtons 
        buttons={[10,20]}
        applyValue={jest.fn()}
        dropdownItems={[0,1]}
        selectItem={jest.fn()}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders a dropdown', () => {
  const component = enzyme.mount(
    <DisplayButtons 
      buttons={[10,20]}
      applyValue={jest.fn()}
      dropdownItems={[0,1]}
      selectItem={jest.fn()}
    />
  );
  expect(component.exists('DropdownButton')).toEqual(true);
});

test('should call after clicking on first button', () => {
  const spy = jest.fn();
  const component = enzyme.mount(
    <DisplayButtons 
      buttons={[10,20]}
      applyValue={spy}
      dropdownItems={[0,1]}
      selectItem={jest.fn()}
    />
  );
  const firstButton = component.find('button').at(1);
  firstButton.simulate('click');

  expect(spy).toHaveBeenCalled();
});
