import { Footer } from '../../patterns'

export default function FooterWithProps() {
  // use mock data for now
  const footerData = [
    {
      heading: 'Products',
      links: [
        {
          text: 'All Products',
          link: '#todo',
        },
        {
          text: 'Kiteboards',
          link: '#todo',
        },
        {
          text: 'Wakeboards',
          link: '#todo',
        },
        {
          text: 'Clothing',
          link: '#todo',
        },
      ],
    },
    {
      heading: 'Services',
      links: [
        {
          text: 'Pay one, Get two',
          link: '#todo',
        },
        {
          text: 'Lifetime insurance',
          link: '#todo',
        },
        {
          text: 'Money back guarantee',
          link: '#todo',
        },
        {
          text: 'Repair services',
          link: '#todo',
        },
      ],
    },
    {
      heading: 'Company',
      links: [
        {
          text: 'Who we are',
          link: '#todo',
        },
        {
          text: 'What we do',
          link: '#todo',
        },
        {
          text: 'Working with us',
          link: '#todo',
        },
        {
          text: 'Blog',
          link: '#todo',
        },
        {
          text: 'Jobs',
          link: '#todo',
        },
      ],
    },
    {
      heading: 'Support',
      links: [
        {
          text: 'For customers',
          link: '#todo',
        },
        {
          text: 'For businesses',
          link: '#todo',
        },
      ],
    },
  ]

  const footerProps = {
    footerData,
  }

  return <Footer {...footerProps} />
}
