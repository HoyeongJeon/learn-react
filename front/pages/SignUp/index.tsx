import React, { useState, useCallback } from 'react';
import { Header, Form, Label, Button, Input } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const onChangeEmail = useCallback((e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e) => {
    e.preventDefault();
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback((e) => {
    e.preventDefault();
    setPasswordCheck(e.target.value);
  }, []);
  return (
    <div id="container">
      <Header>DKUCIS</Header>
      <Form>
        <Label id="email-label">
          <span>이메일</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
          </div>
        </Label>
        <Label id="nickname-label">
          <span>이름</span>
          <div>
            <Input type="nickname" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname}></Input>
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 체크</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></Input>
          </div>
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
    </div>
  );
};

export default SignUp;
