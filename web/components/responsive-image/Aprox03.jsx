const Aprox03 = ({ image, ...props }) => {
  const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN
  const formats = Object.keys(image.formats)
    .map(
      (format) =>
        `${API_ORIGIN}${image.formats[format].url} ${image.formats[format].width}w`,
    )
    .concat(`${API_ORIGIN}${image.url} ${image.width}w`)
    .join()

  return (
    <img
      loading="lazy"
      srcSet={formats}
      width={image.width}
      height={image.height}
      alt={image.alternativeText}
      style={{ width: '100%', height: 'auto' }}
      {...props}
    />
  )
}

export default Aprox03
