import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Createp from './Party details/Createp';
import Createb from './Bill details/Createb';
import Createt from './Transport Details/Createt';
import Viewp from './Party details/Viewp';
import Viewb from './Bill details/Viewb';
import Viewt from './Transport Details/Viewt';
const {  Content, Sider } = Layout;

const Menuitem =[{
  key :1,
  label :'Party Details',
  children:[{
    key:'A',
    label :'Fill Details',
   },{
   key:'B',
   label :'View Details',
   },
  ]
},
{
  key :2,
  label:'Create Product',
  children:[{
    key:'C',
    label :'Create',
  },{
    key:'D',
    label :'View',
  },],
   
},
{
  key :3,
  label:'Transport Details',
  children:[{
    key:'E',
    label :'Create',
  },{
    key:'F',
    label :'View',
  },],
   
},]

const App = () => {
  const[key,setKey]=useState("A")
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(key);
  return (
    <Layout className='h-screen w-full '>
    
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              width:'100%'
            }}
            items={Menuitem}
            onSelect={(item)=>{
              console.log(item)
              setKey(item.key)
             
            }

           }
          />
          
          
        </Sider>
       
        <Layout
          style={{
            padding: '0 20px 20px',
          }}
        >
          
        
          <Content
            style={{
              padding:24 ,
              margin: 0,
              minHeight: 240,
              background: colorBgContainer,
            }}
          >
{   key==="A"?(
  <Createp/>
  
):(
null
)
            }

            {
 key==="B"?(
  <Viewp/>
  
):(
null
)
            }
            {   key==="C"?(
  <Createb/>
  
):(
null
)
            }
                   {
 key==="D"?(
  <Viewb/>
  
):(
null
)
            }

            {   key==="E"?(
  <Createt/>
  
):(
null
)
            }
                   {
 key==="F"?(
  <Viewt/>
  
):(
null
)
            }
          </Content>
          
          
        </Layout>
      </Layout>
    </Layout>

  );
};
export default App;