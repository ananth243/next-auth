import Layout from '../components/layout'

export default function Page () {
  return (
    <Layout>
      <h1>My trial website</h1>
      <p>
        If you want to learn next.js auth go to this <a href={`https://next-auth.js.org`}>link</a> for authentication.
      </p>
    </Layout>
  )
}