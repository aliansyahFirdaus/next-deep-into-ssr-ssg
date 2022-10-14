import axios from 'axios'
import React from 'react'

export async function getServerSideProps() {
  const data = await axios.get("https://flash-the-slow-api.herokuapp.com/delay/5000/url/https://jsonplaceholder.typicode.com/users")

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default function List({ data }) {
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
