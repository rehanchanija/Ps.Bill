
import { Button, Table } from 'antd';
import Link from 'next/link';
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
    address: 'New York No. 1 Lake Park',
    },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];
const Viewp = () => (
 <div>
  <div className='flex justify-end pb-4'>
    <Link href="/addproduct">

Add 
  </Link>
  </div>
  <Table
    columns={columns}
    dataSource={data}
  />
  </div>
);
export default Viewp;
