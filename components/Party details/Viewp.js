
import { Table } from 'antd';
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
    title: 'PRODUCT DETAILS',
    dataIndex: 'name',
    key: 'product',
  },
  {
    title: 'CONSIGNEE NAME',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'BILL AMOUNT',
    dataIndex: '',
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
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);
export default Viewp;
