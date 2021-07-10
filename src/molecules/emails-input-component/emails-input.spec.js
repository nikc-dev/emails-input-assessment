import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EmailsInput from './index';



it('should render EmailsInput correctly', () => {
    document.body.innerHTML =
    '<div id="emailsInput__emai-input">' +
    '  <span  />' +
    '</div>';
  const component = shallow(
    <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} emailsToRender={[{emailId: 'test@test.com'}]} />,
  );
  component.find('#emailsInput').simulate('click');
  expect(toJson(component)).toMatchSnapshot();
});

it('should accpet valid Email Input correctly', () => {
  const component = shallow(
    <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} emailsToRender={[{emailId: 'test@test.com'}]} />,
  );
  component.find('input').simulate('keyDown', { target: { value: 'test@test.com' }, key: 'Enter' });
  expect(toJson(component)).toMatchSnapshot();
});

it('should split pasted emails that is comma seperated', () => {
  const component = shallow(
    <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} updatePastedEmails={jest.fn()} /> 
  );
    component.find('input').simulate("paste", { clipboardData: { getData: jest.fn().mockReturnValue("test@test.com,test2@test.com")}})
    expect(toJson(component)).toMatchSnapshot();
})

it('should accpet Invalid Email Input correctly', () => {
    const component = shallow(
      <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} emailsToRender={[{emailId: 'test@test.com'}]} />,
    );
    component.find('input').simulate('keyDown', { target: { value: 'test@test' }, key: 'Tab' });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onChange function on value change', () => {
    const component = shallow(
      <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} updatePastedEmails={jest.fn()} /> 
    );
      component.find('input').simulate("change", { target: {value: 'abc'}});
      expect(toJson(component)).toMatchSnapshot();
  })

  it('should accpet Email Input correctly on pressing comma', () => {
    const component = shallow(
      <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} emailsToRender={[{emailId: 'test@test.com'}]} />,
    );
    component.find('input').simulate('keyDown', { target: { value: 'test@test' }, key: ',' });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should skip Email Input entry correctly on pressing Enter with empty value', () => {
    const component = shallow(
      <EmailsInput updateEmailsList={jest.fn()} removeEmail={jest.fn()} emailsToRender={[{emailId: 'test@test.com'}]} />,
    );
    component.find('input').simulate('keyDown', { target: { value: '' }, key: 'Enter' });
    expect(toJson(component)).toMatchSnapshot();
  });
