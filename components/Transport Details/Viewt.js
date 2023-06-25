
import { Table } from 'antd';
const columns = [
  {
    title: 'DISPATCH DATE',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'BILL NO',
    dataIndex: 'bill no.',
    key: 'bill no',
  },
  {
    title: 'TRANSPORT NAME',
    dataIndex: 'transport name',
    key: 'transport',
  },
  {
    title: 'TRUCK NO.',
    dataIndex: 'veh.no.',
    key: 'x',
  },
  {
    title: 'TRUCK OWNER NAME.',
    dataIndex: 'own.name',
    key: 'x',
  },
  {
    title: 'DRIVER NAME',
    dataIndex: 'driver name',
    key: 'x',
  },
  {
    title: 'DRIVER NO.',
    dataIndex: 'driver no.',
    key: 'x',
  },
  {
    title: 'WEIGHT',
    dataIndex: 'weight',
    key: 'x',
  },
  {
    title: 'RATE',
    dataIndex: 'rate',
    key: 'x',
  },
  {
    title: 'ADVANCE',
    dataIndex: 'advance',
    key: 'x',
  },
  {
    title: 'BALANCE FEIGHT',
    dataIndex: '',
    key: 'x',
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
const Viewt = () => (
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
export default Viewt;