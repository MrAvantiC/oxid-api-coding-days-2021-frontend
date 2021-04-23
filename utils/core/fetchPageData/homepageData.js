export default {
  id: '195ebc88700679ae08f824a39163adc8',
  config: {
    main: {
      elements: [
        {
          id: '86d11cf8-cac2-4b13-8af0-f8c1e765a1f3',
          component: 'promotion',
          properties: {
            active: true,
            userGroups: {
              'Alle Benutzer': {
                active: true,
                isTimed: false,
                activeFrom: '2020-11-18T14:16:02.225Z',
                activeTo: '2020-11-18T14:16:02.225Z',
              },
            },
            content: {
              variant: 'default',
              heading: {
                text: 'OXID API Coding Days 2021',
                pre: 'Willkommen',
              },
              content: {
                text:
                  'Nutze die Storefront in Kombination mit der OXID-GraphQL-API und erkunde die Kategorien und Produkte.',
                button: {
                  isVisible: true,
                  text: 'Zur Bekleidung',
                  link: '/Bekleidung',
                },
              },
            },
          },
        },
      ],
    },
  },
  snippets: [],
}
