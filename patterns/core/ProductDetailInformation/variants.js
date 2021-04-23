const default_props = {
  title: 'Stewart+Brown Lace Scoop Neck Tee',
  price: {
    price: 59.9,
  },
  listPrice: {
    price: 79.9,
  },
  longDescription:
    '<div style="font: 12px \'Lucida Grande\',Lucida,Verdana,sans-serif">Raffiniertes Langarm-Shirt aus Pima-Baumwolle. Am Ausschnitt ist der weiche Stoff leicht gerafft und mit zwei verspielten Knöpfen versehen. Das Shirt kommt aus der exklusiven Stewart+Brown Organic Cotton Linie und verspricht die Verwendung feinster Pima-Baumwolle. Pima Baumwolle besteht aus besonders langstapeligen Fasern, die die hohe Qualität ausmachen.<br />\r\n<br /><strong>100% ökologisch angebaute Baumwolle, 100% Fair Trade.</strong><br />\r\n<br /><font face="Times New Roman" size="3"><strong><span></span></strong></font>\r\n</div>',
  deliveryTime: {
    minDeliveryTime: 4,
    maxDeliveryTime: 6,
    deliveryTimeUnit: 'WEEK',
  },
  imageGallery: {
    images: [
      {
        image:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/1/540_340_75/front_z1(16)_z1.jpg',
        zoom:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/1/665_665_75/front_z1(16)_z1.jpg',
      },
      {
        image:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/2/540_340_75/back_z2(16)_z2.jpg',
        zoom:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/2/665_665_75/back_z2(16)_z2.jpg',
      },
      {
        image:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/3/540_340_75/detail1_z3(16)_z3.jpg',
        zoom:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/3/665_665_75/detail1_z3(16)_z3.jpg',
      },
      {
        image:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/4/540_340_75/detail2_z4(16)_z4.jpg',
        zoom:
          'https://oxid-coding-days.scalecommerce.cloud/out/pictures/generated/product/4/665_665_75/detail2_z4(16)_z4.jpg',
      },
    ],
  },
}

export default [
  {
    name: 'Default',
    props: { ...default_props },
  },

  {
    name: 'Glass Magnifier',
    props: { ...default_props, magnifier_type: 'glass' },
  },

  {
    name: 'Side by Side Magnifier',
    props: { ...default_props, magnifier_type: 'side_by_side' },
  },
]
