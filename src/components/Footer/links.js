export const categories = [
  {
    links: [
      {
        children: 'about',
        name: 'About us',
        href: 'https://santiment.net/about/',
      },
      {
        children: 'pricing',
        name: 'Pricing',
        href: 'https://santiment.net/pricing/',
      },
      { children: 'team', name: 'Team', href: 'https://santiment.net/team/' },
      { children: 'jobs', name: 'Jobs', href: 'https://santiment.net/jobs/' },
      {
        children: 'contact',
        name: 'Contact us',
        onClick: evt => {
          if (window.Intercom) {
            evt.preventDefault()
            window.Intercom('showNewMessage', 'Hello! I have a question')
          }
        },
        href: 'mailto:support@santiment.net',
      },
    ],
  },
  {
    links: [
      {
        children: 'academy',
        name: 'Academy',
        href: 'https://academy.santiment.net/',
      },
      {
        children: 'insights',
        name: 'Insights',
        href: 'https://insights.santiment.net/',
      },
      {
        children: 'trends',
        name: 'Social trends',
        href: 'https://app.santiment.net/labs/trends',
      },
      {
        children: 'balance',
        name: 'Historical balance',
        href: 'https://app.santiment.net/labs/balance',
      },
      {
        children: 'buy',
        name: 'Buy SAN',
        href: 'https://academy.santiment.net/san-tokens/how-to-buy-san/',
      },
    ],
  },
  {
    links: [
      {
        children: 'sanbase',
        name: 'Sanbase',
        href: 'https://app.santiment.net/',
      },
      {
        children: 'api',
        name: 'SanAPI',
        href: 'https://api.santiment.net/',
      },
      {
        children: 'Sansheets',
        name: 'Sheets',
        href: 'https://sheets.santiment.net/',
      },
      {
        children: 'Sangraphs',
        name: 'Graphs',
        href: 'https://graphs.santiment.net/',
      },
      {
        name: 'Sanhunters',
        href: 'https://hunters.santiment.net/',
      },
    ],
  },
]
