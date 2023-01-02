import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';

type RequiredMark = boolean | 'optional';

const LoginForm: React.FC = () => {
  
  

  return (
    <Form
      
    > 
      <Form.Item label="Full Name">
        <Input placeholder="Input Full Name"/>
      </Form.Item>
      <Form.Item label="Contact Number">
        <Input placeholder="Input Number" />
      </Form.Item>
      <Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Input Email" />
      </Form.Item>
        <Button type="primary" style={{backgroundColor:"purple"}}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;