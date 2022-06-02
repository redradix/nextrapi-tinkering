import UIAprox01 from './ui'

import {
  parseApiResourceUrl,
  selectBetterImageFormat,
  FORMAT_MD,
} from './lib/strapi'

const Aprox01 = ({ image }) => {
  const cover = selectBetterImageFormat(image, FORMAT_MD)

  return <UIAprox01 imageUrl={parseApiResourceUrl(cover.url)} />
}

export default Aprox01
