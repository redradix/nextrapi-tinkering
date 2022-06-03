import Aprox01 from '../components/responsive-image/Aprox01'
import Aprox02 from '../components/responsive-image/Aprox02'
import Aprox03 from '../components/responsive-image/Aprox03'

export default function KataResposiveImage({ data }) {
  return (
    <>
      <h1>{data.pageTitle}</h1>

      <details>
        <summary>Inspección del objeto image</summary>

        <pre>
          <code>{JSON.stringify(data.image ?? null, null, 2)}</code>
        </pre>
      </details>
      {/*
      <h2>Aproximación 01</h2>
      {data.image ? <Aprox01 image={data.image} /> : null}

      <h2>Aproximación 02</h2>
      {data.image ? <Aprox02 image={data.image} /> : null} */}

      <h2>Aproximación 03</h2>
      {data.image ? <Aprox03 image={data.image} /> : null}
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/kata-responsive-image`,
  )
  const data = await res.json()

  return {
    props: { data },
  }
}
