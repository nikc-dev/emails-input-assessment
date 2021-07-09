import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Page from './index';



it('should render Page Component correctly', () => {
  const component = shallow(
    <Page />,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should add a random email to Page Component state correctly', () => {
    const component = shallow(
      <Page />,
    );
    component.instance().addRandomEmail();
    expect(component.state('emailsList')).toBeTruthy();
});

it('should add email to Page Component state correctly from input function', () => {
    const component = shallow(
      <Page />,
    );
    component.setState({emailsList:[]})
    component.instance().updateEmailsList({emailId:'test@test.com'});
    expect(component.state('emailsList')).toEqual([{"emailId": "test@test.com"}]);
    expect(toJson(component)).toMatchSnapshot();
});

it('should remove email from Page Component state correctly from remove function', () => {
    const component = shallow(
      <Page />,
    );
    component.setState({emailsList:[{"emailId": "test@test.com"}]})
    component.instance().removeEmail('test@test.com');
    expect(component.state('emailsList')).toEqual([]);
    expect(toJson(component)).toMatchSnapshot();
});

it('should show alert from Page Component', () => {
    const component = shallow(
      <Page />,
    );
    component.setState({emailsList:[{"emailId": "test@test.com"}]})
    component.instance().showAlert();
    expect(toJson(component)).toMatchSnapshot();
});
