import { useRef } from 'react'
import { useConfiguration, useLazyLoading } from '../../../utils'

export default function Image(props) {
  const { getImageLink } = useConfiguration()
  const pictureRef = useRef(null)
  const { src = '', alt = '' } = props

  const imageLink = getImageLink({ source: src })

  useLazyLoading({ ref: pictureRef, dependency: src })

  return (
    <picture ref={pictureRef} className="hero-teaser__image">
      <img data-src={imageLink} alt={alt} />
    </picture>
  )
}
