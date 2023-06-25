import {
    Button,
    DatePicker,
    Form,
    Input,
    
    Select,
    
  } from 'antd';
  import { useState } from 'react';
  const Createb = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    return (
      <Form 
        labelCol={{
          span: 8,
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
          maxWidth: 800,
        }}
      >
      
        <Form.Item label="BILL NO">
          <Input/>
        </Form.Item>
        <Form.Item label="DISPATCH DATE">
          <DatePicker/>
        </Form.Item>

        <Form.Item label="PARTICULAR">
        <Select>
          <Select.Option value="">POHA </Select.Option>
          <Select.Option value="">CHUNNY</Select.Option>
          <Select.Option value="">KONDA</Select.Option>
          
        </Select>
          </Form.Item>

        <Form.Item label="HSN CODE">
         <Input/>
        </Form.Item>
        <Form.Item label="QUANTITY">
        <Select>
          <Select.Option value="">.30kg</Select.Option>
          <Select.Option value="">.45kg</Select.Option>
          <Select.Option value="">.40kg</Select.Option>
          
        </Select>
        </Form.Item>
        <Form.Item label="Weight">
            <Input/>
            </Form.Item>
        <Form.Item label="Rate">
          <Input/>
        </Form.Item>
        <Form.Item label="Amount">
          <Input/>
        </Form.Item>
        <Form.Item label=" Gst Amount">
          <Input/>
        </Form.Item>
        <Form.Item label=" Total Amount">
          <Input/>
        </Form.Item>
        <Form.Item label="" className='text-center'>
          <Button >Submit</Button>
        </Form.Item>
      
      </Form>
    );
  };
  export default Createb;