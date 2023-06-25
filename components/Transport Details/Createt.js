import {
    Button,
    DatePicker,
    Form,
    Input,
    
    Select,
    
  } from 'antd';
  import { useState } from 'react';
  const Createt = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    return (
      <Form className='flex'
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 14,
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
        <div>
       
          <Form.Item label="Builty no.">
            <Input/>
          </Form.Item>         
          <Form.Item label="Transport Name">
          <Input/>
  
          </Form.Item>
          <Form.Item label="Truck No.">
              <Input/>
              </Form.Item>
          <Form.Item label="Truck owner Name">
            <Input/>
          </Form.Item>
          <Form.Item label="Truck Owner No.">
            <Input/>
          </Form.Item>
          <Form.Item label="Driver Name">
            <Input/>
          </Form.Item>
       
        </div>
      <div>
      <Form.Item label="Driver No.">
            <Input/>
          </Form.Item>
          <Form.Item label=" Frieght Quintal">
            <Input/>
          </Form.Item>
        <Form.Item label=" Weight">
          <Input/>
        </Form.Item>
        <Form.Item label=" Total freight">
          <Input/>
        </Form.Item>
        <Form.Item label="Advance">
          <Input/>
        </Form.Item>
        <Form.Item label="Balance Freight">
          <Input/>
        </Form.Item>
       
      </div>
      
      </Form>
    );
  };
  export default Createt;