import React from 'react'
import { Button, Checkbox, Divider, Form, Header, List } from 'semantic-ui-react'

function about() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

    </div>
  )
}

export default about