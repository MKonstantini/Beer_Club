"use client"
import { User } from "@prisma/client"
import moment from 'moment';

interface UserInfoProps {
    user: User
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {

    return (
        <div className="mb-6">
            <p className="mb-3">Email : {user.email}</p>
            <p className="mb-3">User Type : {user.type[0] + user.type.toLocaleLowerCase().slice(1)}</p>
            <p className="mb-3">Date Joined : {moment(user.createDate).format('DD-MM-YYYY')}</p>
        </div>
    )
}

export default UserInfo