import React from 'react'
import './HeaderSideOp.css';
import Avatar from '@material-ui/core/Avatar';

function HeaderSideOp({Icon,title,avatar}) {
    return (
        <div className="headersideop">
            {Icon && <Icon className="headersideop__icon"/>}
            {avatar && (<Avatar className="headersideop__icon" src={avatar}/>)}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderSideOp
