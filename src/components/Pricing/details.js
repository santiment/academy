export default {
  columns: ['', 'Free', 'Basic', 'Pro', 'Premium', 'Corporate'],
  rows: [
    {
      group: 'Financial data',
      data: [
        { name: 'Open/High/Low/Close' },
        {
          name: 'Price-volume difference indicator',
        },
      ],
    },
    {
      group: 'On-chain data',
      data: [
        { name: 'Open/High/Low/Close' },
        {
          name: 'Network growth',
        },

        { name: 'Token age consumed' },
        { name: 'Average token age consumed' },
        { name: 'Exchange flow' },
        { name: 'Total ERC20 exchange funds flow' },
        { name: 'Transaction volume' },
        { name: 'Total circulation (beta)' },
        { name: 'Velocity of tokens (beta)' },
        { name: 'ETH gas used' },
        { name: 'Distribution between mining pools' },
        { name: 'Top holders percent of total supply' },
        { name: 'Percent of total supply on exchanges' },
        { name: 'Realized value', checks: [false, false, true, true, true] },
        { name: 'MVRV ratio', checks: [false, false, true, true, true] },
        { name: 'NVT', checks: [false, false, true, true, true] },
        {
          name: 'Daily active deposits',
          checks: [false, false, true, true, true],
        },
      ],
    },
    {
      group: 'Social data',
      data: [
        { name: 'Dev activity' },
        { name: 'Topic search' },
        { name: 'Relative social dominance' },
        { name: 'Total social volume' },
      ],
    },
  ],
}
