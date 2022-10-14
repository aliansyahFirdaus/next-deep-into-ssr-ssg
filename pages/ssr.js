export async function getServerSideProps() {
  const res = await fetch("https://flash-the-slow-api.herokuapp.com/delay/5000/url/https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default function Ssr({ data }) {
  return (
    <div>
      <h1>SSR</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
