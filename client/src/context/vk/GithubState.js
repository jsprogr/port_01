import React, {useReducer} from 'react'
import axios from 'axios'
import { VkGroupSearchContext } from './githubContext'
import { vkGroupsSearchReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

const TOKEN = process.env.REACT_APP_VK_TOKEN
const HOST = 'https://api.vk.com/method/'

const withCreds = url => {
    return `${url}&access_token=${TOKEN}&v=5.103`
}

export const VkState = ({children}) => {
    const initialState ={
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(vkGroupsSearchReducer, initialState)

    const search = async value => {
        setLoading()

        const method = `groups.search/`

        const response = await axios.get(
            withCreds(`${HOST}${method}?q=${value}&count=200`)
        )
        
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.response.items
        })
    }

    const getUser = async name => {
        setLoading()

        const method = `groups.getById/`

        const response = await axios.get(
            withCreds(`${HOST}${method}?group_id=${name}`)
        )
        console.log(response)

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )


        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state
    return (
        <VkGroupSearchContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </VkGroupSearchContext.Provider>
    )
}