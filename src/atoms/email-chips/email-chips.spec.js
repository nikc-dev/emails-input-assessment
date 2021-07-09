import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EmailChips from './index';



it('should render EmailChips correctly for Valid email', () => {
  const component = shallow(
    <EmailChips removeEmail={jest.fn()} email={{emailId: 'test@test.com'}} />,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render EmailChips correctly for InValid email', () => {
    const component = shallow(
      <EmailChips removeEmail={jest.fn()} email={{emailId: 'test@test.com', isInValid: true}} />,
    );
    expect(toJson(component)).toMatchSnapshot();
});

it('should remove EmailChip correctly onClick of remove button', () => {
    const component = shallow(
      <EmailChips removeEmail={jest.fn()} email={{emailId: 'test@test.com', isInValid: true}} />,
    );
    component.find('#emailChips__remove-btn').simulate('click')
    expect(toJson(component)).toMatchSnapshot();
});
