import React from 'react';
import { toast } from 'react-toastify';

const UseRow = ({ user}) => {
  const { email, index, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('Faild to make an admin')
        }
      return res.json()})
      .then(data => {
        if (data.modifiedCount > 0) { 
          toast.success(`Successfully made an admin`)
        }

      })
  }

  return (
    <tr>
      <th> {index} </th>
      <td> {email} </td>
      <td>{
        role !== 'admin' &&
        <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UseRow;