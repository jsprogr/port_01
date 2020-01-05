import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({user}) => (
    <div className="card">
        <div class="row no-gutters">
            <div class="col-md-1">
                <img src={user.photo_100} alt={user.screen_name} className="card-img-small" style={{borderRadius: '6px'}}/>
            </div>
            {/* <div className="card-header ml-1 align-top">id:{user.id}</div> className="btn btn-primary"  */}
            <div className="card-body ml-2 align-self-start">
                <Link to={'/' + user.id} ><h5 className="card-title">{user.name}</h5></Link>
            </div>
        </div>
    </div>
)