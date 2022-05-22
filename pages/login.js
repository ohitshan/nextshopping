import Axios from 'axios'
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
function Login() {
  const router = useRouter();
  const login = () => {
    Axios.post('/api/login')
      .then(res => {
        if (res.status === 200) {
          router.push('/admin')
        }
      })
  }
  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <label>아이디</label>
          <input placeholder='ID' />
        </Form.Field>
        <Form.Field inline>
          <label>비밀번호</label>
          <input type="password" placeholder='Password' />
        </Form.Field>
        <Button onClick={login} color="blue">Login</Button>
      </Form>
    </div>
  )
}

export default Login