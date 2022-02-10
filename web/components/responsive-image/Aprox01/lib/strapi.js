import { BASE_URL } from './environment'

/**
 * Converts the relative URL to absolute by adding the domain
 * and path where Strapi is being served.
 */
export const parseApiResourceUrl = (resourceUrl) =>
  resourceUrl.startsWith('/')
    ? `${BASE_URL}/${resourceUrl.slice(1)}`
    : resourceUrl

/*
 * Note: these constants must be in sync with your Strapi configuration
 * and reflect the automatically generated image formats.
 * IMAGE_FORMATS should be sorted bigger to smallest in size.
 *
 * Strapi breakpoints config path: cms/config/plugins.js
 */
export const FORMAT_LG = 'large' // 1000 px
export const FORMAT_MD = 'medium' // 750 px
export const FORMAT_SM = 'small' // 500 px
export const FORMAT_THUMB = 'thumbnail' // 156 px
const IMAGE_FORMATS = [FORMAT_LG, FORMAT_MD, FORMAT_SM, FORMAT_THUMB]

/**
 * Strapi doesn't generate image formats greater than the uploaded format.
 * This helper selects the better format available not greater than your optimal format.
 * The optimal format defaults to the largest one.
 */
export const selectBetterImageFormat = (
  image,
  optimalFormat = IMAGE_FORMATS[0],
) => {
  if (image.formats === null || Object.keys(image.formats).length === 0) {
    /* Images that are smaller than the smallest format configured
     * naturally don't have any format available, but the image object
     * has all the properties that any format have.
     */
    return image
  }

  const desiredFormats = IMAGE_FORMATS.slice(
    IMAGE_FORMATS.indexOf(optimalFormat),
  )

  const bestFormatAvailable = desiredFormats.find(
    (format) => image.formats[format],
  )

  return image.formats[bestFormatAvailable]
}
