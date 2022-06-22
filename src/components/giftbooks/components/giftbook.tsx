import React, { useRef, useState } from "react";
import { PageControl } from "../../page-control";
import ReactToPrint from 'react-to-print';
import { Friends } from "../books";
import { useUsersListQuery } from "../../../features/api/api.slice";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export const Giftbook = () => {
  const componentRef = useRef(null);
  const { data: users } = useUsersListQuery({});
  const [selectedUserId, setSelectedUserId] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedUserId(event.target.value);
    localStorage.setItem('userId', event.target.value)
  };

  return (
    <PageControl>
      <>
        {users && 
          <Select
            label="Select User"
            labelId="label"
            style={{ margin: 40}}
            value={selectedUserId}
            onChange={handleChange}
          >
            {users.users.map((user: IUser) => <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>)}
            
          </Select>
        }
        <ReactToPrint
          bodyClass="asdasd"
          content={() => componentRef.current}
          trigger={() => <button>Print this out!</button>}
        />
        
        <Friends ref={componentRef} />
      </>
    </PageControl>
  )
}