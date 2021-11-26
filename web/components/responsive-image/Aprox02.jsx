import React from 'react'

const Aprox01 = ({ image }) => {
  const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN

  return (
    <picture className="picture">
      <source
        srcSet={`${API_ORIGIN}${image.url}`}
        media="(min-width: 1920px)"
      />
      {image.formats.large ? (
        <source
          srcSet={`${API_ORIGIN}${image.formats.large.url}`}
          media="(min-width: 1000px)"
        />
      ) : null}
      {image.formats.medium ? (
        <source
          srcSet={`${API_ORIGIN}${image.formats.medium.url}`}
          media="(min-width: 750px)"
        />
      ) : null}
      {image.formats.small ? (
        <source
          srcSet={`${API_ORIGIN}${image.formats.small.url}`}
          media="(min-width: 500px)"
        />
      ) : null}
      <img
        src={`${API_ORIGIN}${image.formats.thumbnail.url}`}
        alt={image.name}
      />
    </picture>
  )
}

export default Aprox01
