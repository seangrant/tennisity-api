const clubs = [
  {
    name: 'Burnt Bridge',
    address1: 'Peter Vergers Reserve',
    contact: 'Peter Arnot',
    code: 'BB',
    Phone: '9870 2810',
    address2: 'Maroondah Hwy, Ringwood 3134',
    contactPhone: '9876 2663'
  },
  {
    name: 'Chirnside Park',
    address1: '68 Kingswood Drive',
    contact: 'Barbara Kelly',
    code: 'CP',
    Phone: '9726 7723',
    address2: 'Chirnside Park 3116',
    contactPhone: '9726 7723'
  },
  {
    name: 'Croydon',
    address1: 'Croydon Park',
    contact: 'Gran Kendall',
    code: 'C',
    Phone: '9725 7348',
    address2: 'Hewish Road, Croydon 3136',
    contactPhone: '0414 584610'
  },
  {
    name: 'East Croydon Kilsyth',
    address1: 'Cnr. Hull Road & Sabato Street',
    contact: 'Mike Drummond',
    code: 'EC',
    Phone: '',
    address2: 'East Croydon 3138',
    contactPhone: '9725 7592'
  },
  {
    name: 'East Ringwood',
    address1: 'Cnr. Mt. Dandenong & Dublin Roads',
    contact: 'Joan Carter',
    code: 'ER',
    Phone: '9870 8814',
    address2: 'East Ringwood 3134',
    contactPhone: '0428 227837'
  },
  {
    name: 'Eastern Golf',
    address1: '215 Victoria Road',
    contact: 'John Hampson',
    code: 'EG',
    Phone: '9739 0110',
    address2: 'Yering 3770',
    contactPhone: '0419 188 908'
  },
  {
    name: 'Gracedale Park',
    address1: 'Gracedale Avenue',
    contact: 'Brian Cook',
    code: 'GP',
    Phone: '9879 3246',
    address2: 'North Bayswater 3153',
    contactPhone: '9870 0493'
  },
  {
    name: 'Heathmont',
    address1: 'Cnr. Canterbury Road & Waterloo St.',
    contact: 'Aidan Searle',
    code: 'HM',
    Phone: '9729 0218',
    address2: 'Heathmont 3135',
    contactPhone: '9720 8875 / 0466 116402'
  },
  {
    name: 'Lilydale',
    address1: 'Cnr. Anderson & Hardy St.',
    contact: 'Kerry Cardwell',
    code: 'L',
    Phone: '9739 6331',
    address2: 'Lilydale 3140 (Rear of Council Offices)',
    contactPhone: '9726 0631'
  },
  {
    name: 'Manchester Heights',
    address1: 'Cnr. Croydonvale Drive & Ellen Road',
    contact: 'Mal Wrigglesworth',
    code: 'MH',
    Phone: '0423 500295 ',
    address2: 'Mooroolbark 3138',
    contactPhone: '0408 503668'
  },
  {
    name: 'Miller Park',
    address1: 'Cnr. Mountain Hwy & Liverpool Road',
    contact: 'Joy Chirnside',
    code: 'MP',
    Phone: '9762 7080',
    address2: 'The Basin 3154',
    contactPhone: '0417 018044'
  },
  {
    name: 'Mooroolbark',
    address1: 'Kiloran Park (off Hawthory Road)',
    contact: 'Geoff McKenzie',
    code: 'MK',
    Phone: '9723 7778',
    address2: 'Mooroolbark 3138',
    contactPhone: '9725 4158 / 0431 171075'
  },
  {
    name: 'Mount Evelyn',
    address1: 'Birmingham Road',
    contact: 'Matt O’Toole',
    code: 'ME',
    Phone: '9736 1788',
    address2: 'Mount Evelyn 3796',
    contactPhone: '0425 711879'
  },
  {
    name: 'North Ringwood',
    address1: 'Warrandyte Road',
    contact: 'Sylvia & Rosemary James',
    code: 'NR',
    Phone: '9879 9395',
    address2: 'North Ringwood 3134',
    contactPhone: '9876 5564'
  },
  {
    name: 'Park Orchards',
    address1: 'Cnr. Granard Ave & Park Road',
    contact: 'Pota Marmarou',
    code: 'PO',
    phone: '9879 9750',
    address2: 'Park Orchards 3114',
    contactPhone: '9879 0995 / 0419 390482'
  },
  {
    name: 'Parkwood',
    address1: 'Quambie Reserve',
    contact: 'Josh Mackwell',
    code: 'PW',
    Phone: '9876 1082',
    address2: 'Wonga Road, North Ringwood 3134',
    contactPhone: '9879 9009 / 0408 307782'
  },
  {
    name: 'Parker Reserve',
    address1: 'Parker Reserve, Heathmont Road',
    contact: 'Chris Wishart',
    code: 'PR',
    Phone: '929 0873',
    address2:
      'Heathmont 3135 (enter from Heathmont Road from Canterbury Rd to Parker Reserve. Follow road past football oval & netball courts)',
    contactPhone: '9729 3662'
  },
  {
    name: 'Ringwood Catholic',
    address1: 'Great Ryrie Street (adj. Aquinas College)',
    contact: 'Helen Abbott',
    code: 'RC',
    Phone: '9870 1998',
    address2: 'Ringwood 3134',
    contactPhone: '0401 999460'
  },
  {
    name: 'Ringwood',
    address1: 'Jubilee Park',
    contact: 'Kim De',
    Bondecode: 'R',
    Phone: '9870 3337',
    address2: 'City Road, Ringwood 3134',
    contactPhone: '0418 303638'
  },
  {
    name: 'Warrandyte',
    address1: 'Taroona Avenue',
    contact: 'Alistair Tudor',
    code: 'WD',
    Phone: '9844 1396',
    address2: 'Warrandyte 3113',
    contactPhone: '0430 898394'
  },
  {
    name: 'Wonga Park',
    address1: 'Old Yarra Road',
    contact: 'Emily Dellavedova',
    code: 'WP',
    Phone: '9722 1830',
    address2: 'Wonga park 3115',
    contactPhone: '0448 808229'
  },
  {
    name: 'Yarra Glen',
    address1: 'Anzac Avenue',
    contact: 'Kerry Davies',
    code: 'YG',
    Phone: '',
    address2: 'Yarra Glen 3775',
    contactPhone: '9730 1731 / 0448 322878'
  }
];

export default clubs;
