import React, { useEffect, useLayoutEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chat from './components/Chat/Chat';
import ChatwootWidget from './components/ChatwootWidget';

import { createAccount, CreateAContact, GetAllAgent } from '@/untils/chatApi';
// import { GetChatToken } from '@/untils/request';
import { stringify } from 'rc-field-form/es/useWatch';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const [data, setData] = useState({})

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div style={{marginTop: "80px"}}>
      <Chat />
      {/* <ChatwootWidget /> */}
    </div>
  );
}

