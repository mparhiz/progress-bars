import React from 'react';
import DisplayBars from './DisplayBars';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import * as enzyme from "enzyme";

enzyme.configure({ adapter: new Adapter() });

test('renders without crashing: Enzyme', () => {
  const wrapper = enzyme.mount(<DisplayBars />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
