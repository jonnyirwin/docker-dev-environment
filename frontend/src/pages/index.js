import { useEffect, useState, useContext } from "react"

export default function Home({ baseUrl }) {
  const [state, setState] = useState([]);

  useEffect(async () => {
    const url = `http://${baseUrl}/api/names`;
    const res = await fetch(url);
    const names = await res.json();
    setState(names);
  }, []);

	console.log({baseUrl})

  return <>
    <h1>Names from {baseUrl}!</h1>
    <ul>
      {state.map((name, index) => <li key={index}>{name}</li>)}
    </ul>
  </>;
}

export async function getStaticProps() {
  return {
    props: {
      baseUrl: process.env.API_BASE_URL,
    },
  };
}
