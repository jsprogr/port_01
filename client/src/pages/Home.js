import React, {Fragment, useContext} from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { VkGroupSearchContext } from '../context/github/githubContext'


export const Home = () => {
    const {loading, users} = useContext(VkGroupSearchContext)

    return (
        <Fragment>
            <Search />
            <div className="row">
                {
                    loading 
                    ? <p className="text-center">Загрузка...</p>
                    : users.map( user => (
                            <div className="col-md-12 mb-12" key={user.id} style={{maxHeight: '150px'}}>
                                <Card user={user} />
                            </div>
                    ))
                }

            </div>
            
        </Fragment>
    )
}