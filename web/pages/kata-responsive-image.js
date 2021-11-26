import Aprox02 from '../components/responsive-image/Aprox02'

export default function KataResposiveImage({ data }) {
  return (
    <>
      <h1>{data.pageTitle}</h1>
      <p>Aproximación 02:</p>
      {data.image ? <Aprox02 image={data.image} /> : null}
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
