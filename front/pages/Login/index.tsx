import React from 'react';
import { Header, Form, Label, Button, Input, LinkBox } from '@pages/Login/styles';
import { Link } from 'react-router-dom';
import useInput from '@hooks/useInput';

const Login = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  return (
    <div id="container">
      <Header>DKUCIS</Header>
      <Form>
        <Label id="email-label">
          <span>이메일</span>
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkBox>
        회원이 아니신가요? &nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkBox>
    </div>
  );
};

export default Login;
