const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN

const Aprox03 = ({ image, ...props }) => {
  const imageCandidates = [
    /* IMPORTANT Include the original image in case there are no formats
     * available or the viewport supports its size just fine.
     */
    image,
    ...Object.values(image.formats),
  ]
    .map((strapiFormat) => {
      const absoluteUrl = API_ORIGIN.concat(strapiFormat.url)
      const widthDescriptor = `${strapiFormat.width}w`

      return `${absoluteUrl} ${widthDescriptor}`
    })
    .join(', ')

  return (
    <img
      loading="lazy"
      srcSet={imageCandidates}
      width={image.width}
      height={image.height}
      alt={image.alternativeText}
      style={{ width: '100%', height: 'auto' }}
      {...props}
    />
  )
}

export default Aprox03
