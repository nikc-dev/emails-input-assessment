import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './index';



it('should render Button correctly', () => {
  const component = shallow(
    <Button title={`Test Title`} handleClick={jest.fn()} />,
  );
  expect(toJson(component)).toMatchSnapshot();
});
