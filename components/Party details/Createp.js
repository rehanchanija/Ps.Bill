import {
  
  Button,
  Form,
  Input,
 
} from 'antd';
import { useState } from 'react';

const Createp = () => {

  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form 
      labelCol={{
        span: 24,
        
      }}
      wrapperCol={{
        span: 36,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
     
      <Form.Item className="" label="Party Name">
        <Input />
      </Form.Item>
      <Form.Item label="GST No.">
        <Input/>
      </Form.Item>
      <Form.Item label="Contact No.">
      <Input/>

      </Form.Item>
    
      <Form.Item label=" Enter Address">
      <Input/>
      </Form.Item>
      <Form.Item label="">
      <Button/>
      </Form.Item>
    </Form>
  );
};
export default Createp;