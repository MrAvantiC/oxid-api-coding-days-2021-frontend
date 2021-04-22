import { Heading, Copytext, Text, Link } from '../..'
import ProductPrices from './ProductPrices'
import ProductActions from './ProductActions'

export default function ProductTile(props) {
  const {
    title = '',
    shortdescription = '',
    seo: { url = '' },
    imageGallery: { thumb = '' },
    manufacturer,
  } = props

  return (
    <article className="product-item">
      <Link href={url}>
        <picture className="product-item__image">
          <img data-src={thumb} alt={title} height="245" />
        </picture>

        <Heading size="bacchus" weight="600" className="product-item__title">
          {title}
        </Heading>

        <Text
          size="aphrodite"
          weight="600"
          className="product-item__manufacturer"
        >
          {manufacturer?.title}
        </Text>

        <Copytext className="product-item__shortdesc">
          {shortdescription}
        </Copytext>

        <ProductPrices {...props} />

        <ProductActions {...props} />
      </Link>
    </article>
  )
}
