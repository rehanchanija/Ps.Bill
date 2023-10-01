
import { Table } from 'antd';
import { useRouter } from 'next/router';
const columns = [
    {
        title: 'BILL DATE',
        dataIndex: 'Number',
        key: 'bill date',
      },  
    {
    title: 'BILL NO',
    dataIndex: 'Number',
    key: 'Number',
  },
  {
    title: 'HSN CODE',
    dataIndex: 'HSN',
    key: 'HSN ',
  },
  {
    title: 'PARTICULAR',
    dataIndex: 'PRODUCT',
    key: 'PRODUCT ',
  },
  {
    title: 'QUANTITY',
    dataIndex: 'name',
    key: 'product',
  },
  {
    title: 'PACKING',
    dataIndex: 'name',
    key: 'product',
  },
  {
    title: 'WEIGHT',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'RATE',
    dataIndex: 'rate',
    key: 'rate',
  },
 
  {
    title: 'BILL AMOUNT',
    dataIndex: 'bill amount',
    key: 'x',
    // render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const Viewp = () => (
 
  
  <Table
    columns={columns}
  
    dataSource={data}
  />
);
export default Viewp;
