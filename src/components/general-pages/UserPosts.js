import React from 'react'
import useFetch from '../helpers/useFetch'

const UserPosts = () => {
    const { data, loading } = useFetch('https://jsonplaceholder.org/users');
  console.log("data",data,loading)
    return (
    <div>
      
    </div>
  )
}

export default UserPosts
