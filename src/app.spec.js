import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';



it('should render Page Component correctly', () => {
  const component = shallow(
    <App />,
  );
  expect(toJson(component)).toMatchSnapshot();
});