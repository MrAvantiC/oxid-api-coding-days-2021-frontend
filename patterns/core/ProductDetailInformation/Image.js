import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from 'react-image-magnifiers'

export default function Image(props) {
  const {
    title = '',
    imageGallery = [],
    magnifier_type = 'side_by_side',
  } = props
  const main = imageGallery.images[0]

  return (
    <div className="product-detail-information__image">
      {magnifier_type === 'tap' && (
        <Magnifier
          imageSrc={main.image}
          imageAlt={title}
          largeImageSrc={main.zoom}
          mouseActivation={MOUSE_ACTIVATION.CLICK} // Optional
          touchActivation={TOUCH_ACTIVATION.TAP} // Optional
        />
      )}

      {magnifier_type === 'glass' && (
        <GlassMagnifier
          magnifierSize={'40%'}
          square={true}
          imageSrc={main.image}
          imageAlt={title}
          largeImageSrc={main.zoom}
        />
      )}

      {magnifier_type === 'side_by_side' && (
        <SideBySideMagnifier
          imageSrc={main.image}
          imageAlt={title}
          largeImageSrc={main.zoom}
          alwaysInPlace={false}
          overlayOpacity={0.6}
          switchSides={false}
          zoomPosition="left"
          zoomContainerBorder="1px solid #ccc"
          fillAvailableSpace={false}
          fillAlignTop={false}
          fillGapLeft={0}
          fillGapRight={10}
          fillGapTop={10}
          fillGapBottom={1}
        />
      )}
    </div>
  )
}
