import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UseRow from './UseRow';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user', {
          method:"GET",
          headers:{
          authorization : `Bearer ${localStorage.getItem('accessToken')}`
          }
        }).then(res=>res.json())
        .then(data => setUsers(data))
    },[users])

    // const {data:users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user').then(res=>res.json()) )
 
    // if(isLoading){
    //     return <Loading></Loading>
    // } 

    return (
        <div>
            <h2 className='text-2xl'>All Users : {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
        users?.map((user, index)=> <UseRow
        key={user._id}
        index={index + 1}
        user={user}
        ></UseRow> )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;