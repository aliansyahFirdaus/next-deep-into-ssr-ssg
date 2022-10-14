export async function getStaticProps() {
  const res = await fetch("https://flash-the-slow-api.herokuapp.com/delay/5000/url/https://634933eea59874146b19e6a3.mockapi.io/next/users")
  const data = await res.json()

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default function Ssg({ data }) {
  return (
    <div>
      <h1>SSG</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
