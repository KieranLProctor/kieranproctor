import Head from 'next/head'
import Layout from '../components/Layout'
import { Primary, Secondary } from '../components/UI/Buttons'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Kieran Proctor | About</title>
      </Head>
      <Primary text="Test" route="home" />
      <Secondary text="TESTING"></Secondary>
    </Layout>
  );
}
