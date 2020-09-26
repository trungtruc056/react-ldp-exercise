import React from 'react';
import myData from 'utils/myData';
import Avatar from 'components/Avatar';

function MyAccount(props) {
    return (
        <Avatar
            avatarUrl={myData.avatarUrl}
            firstName={myData.fistName}
            lastName={myData.lastName}
            jobPosition={myData.jobPosition}
            gmailUrl={myData.gmailUrl}
            showToolTip
        />
    )
}

export default MyAccount;