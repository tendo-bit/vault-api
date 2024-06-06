const ICrv = [
  {
    name: 'Transfer',
    inputs: [
      {
        type: 'address',
        name: '_from',
        indexed: true,
      },
      {
        type: 'address',
        name: '_to',
        indexed: true,
      },
      {
        type: 'uint256',
        name: '_value',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Approval',
    inputs: [
      {
        type: 'address',
        name: '_owner',
        indexed: true,
      },
      {
        type: 'address',
        name: '_spender',
        indexed: true,
      },
      {
        type: 'uint256',
        name: '_value',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'UpdateMiningParameters',
    inputs: [
      {
        type: 'uint256',
        name: 'time',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'rate',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'supply',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'SetMinter',
    inputs: [
      {
        type: 'address',
        name: 'minter',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'SetAdmin',
    inputs: [
      {
        type: 'address',
        name: 'admin',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    outputs: [],
    inputs: [
      {
        type: 'string',
        name: '_name',
      },
      {
        type: 'string',
        name: '_symbol',
      },
      {
        type: 'uint256',
        name: '_decimals',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    name: 'update_mining_parameters',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 148748,
  },
  {
    name: 'start_epoch_time_write',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 149603,
  },
  {
    name: 'future_epoch_time_write',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 149806,
  },
  {
    name: 'available_supply',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 4018,
  },
  {
    name: 'mintable_in_timeframe',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'uint256',
        name: 'start',
      },
      {
        type: 'uint256',
        name: 'end',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 2216141,
  },
  {
    name: 'set_minter',
    outputs: [],
    inputs: [
      {
        type: 'address',
        name: '_minter',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 38698,
  },
  {
    name: 'set_admin',
    outputs: [],
    inputs: [
      {
        type: 'address',
        name: '_admin',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 37837,
  },
  {
    name: 'totalSupply',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1421,
  },
  {
    name: 'allowance',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_owner',
      },
      {
        type: 'address',
        name: '_spender',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 1759,
  },
  {
    name: 'transfer',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_to',
      },
      {
        type: 'uint256',
        name: '_value',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 75139,
  },
  {
    name: 'transferFrom',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_from',
      },
      {
        type: 'address',
        name: '_to',
      },
      {
        type: 'uint256',
        name: '_value',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 111433,
  },
  {
    name: 'approve',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_spender',
      },
      {
        type: 'uint256',
        name: '_value',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 39288,
  },
  {
    name: 'mint',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_to',
      },
      {
        type: 'uint256',
        name: '_value',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 228030,
  },
  {
    name: 'burn',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'uint256',
        name: '_value',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 74999,
  },
  {
    name: 'set_name',
    outputs: [],
    inputs: [
      {
        type: 'string',
        name: '_name',
      },
      {
        type: 'string',
        name: '_symbol',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 178270,
  },
  {
    name: 'name',
    outputs: [
      {
        type: 'string',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 8063,
  },
  {
    name: 'symbol',
    outputs: [
      {
        type: 'string',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 7116,
  },
  {
    name: 'decimals',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1721,
  },
  {
    name: 'balanceOf',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: 'arg0',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 1905,
  },
  {
    name: 'minter',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1781,
  },
  {
    name: 'admin',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1811,
  },
  {
    name: 'mining_epoch',
    outputs: [
      {
        type: 'int128',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1841,
  },
  {
    name: 'start_epoch_time',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1871,
  },
  {
    name: 'rate',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1901,
  },
] as const;

export default ICrv;
