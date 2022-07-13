import React from 'react';
import { ISucceedSearchUserResDTO } from '../../../types/DTO/searchUser';

interface IUserDetailsProps {
  data: ISucceedSearchUserResDTO;
}
const UserDetails: React.FC<IUserDetailsProps> = () => {
  return <div>USerDetails</div>;
};

export default UserDetails;
