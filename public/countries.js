const worldCountries = [
  { name: 'Afghanistan', abbreviation: 'AF', isActive: false },
  { name: 'Albania', abbreviation: 'AL', isActive: false },
  { name: 'Algeria', abbreviation: 'DZ', isActive: false },
  { name: 'American Samoa', abbreviation: 'AS', isActive: false },
  { name: 'Andorra', abbreviation: 'AD', isActive: false },
  { name: 'Angola', abbreviation: 'AO', isActive: false },
  { name: 'Anguilla', abbreviation: 'AI', isActive: false },
  { name: 'Antarctica', abbreviation: 'AQ', isActive: false },
  {
    name: 'Antigua and Barbuda',
    abbreviation: 'AG',
    isActive: false
  },
  { name: 'Argentina', abbreviation: 'AR', isActive: false },
  { name: 'Armenia', abbreviation: 'AM', isActive: false },
  { name: 'Aruba', abbreviation: 'AW', isActive: false },
  { name: 'Australia', abbreviation: 'AU', isActive: false },
  { name: 'Austria', abbreviation: 'AT', isActive: false },
  { name: 'Azerbaijan', abbreviation: 'AZ', isActive: false },
  { name: 'Bahamas', abbreviation: 'BS', isActive: false },
  { name: 'Bahrain', abbreviation: 'BH', isActive: false },
  { name: 'Bangladesh', abbreviation: 'BD', isActive: false },
  { name: 'Barbados', abbreviation: 'BB', isActive: false },
  { name: 'Belarus', abbreviation: 'BY', isActive: false },
  { name: 'Belgium', abbreviation: 'BE', isActive: false },
  { name: 'Belize', abbreviation: 'BZ', isActive: false },
  { name: 'Benin', abbreviation: 'BJ', isActive: false },
  { name: 'Bermuda', abbreviation: 'BM', isActive: false },
  { name: 'Bhutan', abbreviation: 'BT', isActive: false },
  { name: 'Bolivia', abbreviation: 'BO', isActive: false },
  {
    name: 'Bosnia and Herzegovina',
    abbreviation: 'BA',
    isActive: false
  },
  { name: 'Botswana', abbreviation: 'BW', isActive: false },
  { name: 'Bouvet Island', abbreviation: 'BV', isActive: false },
  { name: 'Brazil', abbreviation: 'BR', isActive: false },
  {
    name: 'British Indian Ocean Territory',
    abbreviation: 'IO',
    isActive: false
  },
  { name: 'Brunei', abbreviation: 'BN', isActive: false },
  { name: 'Bulgaria', abbreviation: 'BG', isActive: false },
  { name: 'Burkina Faso', abbreviation: 'BF', isActive: false },
  { name: 'Burundi', abbreviation: 'BI', isActive: false },
  { name: 'Cambodia', abbreviation: 'KH', isActive: false },
  { name: 'Cameroon', abbreviation: 'CM', isActive: false },
  { name: 'Canada', abbreviation: 'CA', isActive: false },
  { name: 'Cape Verde', abbreviation: 'CV', isActive: false },
  { name: 'Cayman Islands', abbreviation: 'KY', isActive: false },
  {
    name: 'Central African Republic',
    abbreviation: 'CF',
    isActive: false
  },
  { name: 'Chad', abbreviation: 'TD', isActive: false },
  { name: 'Chile', abbreviation: 'CL', isActive: false },
  { name: 'China', abbreviation: 'CN', isActive: false },
  { name: 'Christmas Island', abbreviation: 'CX', isActive: false },
  {
    name: 'Cocos (Keeling) Islands',
    abbreviation: 'CC',
    isActive: false
  },
  { name: 'Colombia', abbreviation: 'CO', isActive: false },
  { name: 'Comoros', abbreviation: 'KM', isActive: false },
  { name: 'Congo', abbreviation: 'CG', isActive: false },
  { name: 'Cook Islands', abbreviation: 'CK', isActive: false },
  { name: 'Costa Rica', abbreviation: 'CR', isActive: false },
  { name: 'Croatia', abbreviation: 'HR', isActive: false },
  { name: 'Cuba', abbreviation: 'CU', isActive: false },
  { name: 'Cyprus', abbreviation: 'CY', isActive: false },
  { name: 'Czech Republic', abbreviation: 'CZ', isActive: false },
  { name: 'Denmark', abbreviation: 'DK', isActive: false },
  { name: 'Djibouti', abbreviation: 'DJ', isActive: false },
  { name: 'Dominica', abbreviation: 'DM', isActive: false },
  {
    name: 'Dominican Republic',
    abbreviation: 'DO',
    isActive: false
  },
  { name: 'East Timor', abbreviation: 'TP', isActive: false },
  { name: 'Ecuador', abbreviation: 'EC', isActive: false },
  { name: 'Egypt', abbreviation: 'EG', isActive: false },
  { name: 'El Salvador', abbreviation: 'SV', isActive: false },
  { name: 'Equatorial Guinea', abbreviation: 'GQ', isActive: false },
  { name: 'Eritrea', abbreviation: 'ER', isActive: false },
  { name: 'Estonia', abbreviation: 'EE', isActive: false },
  { name: 'Ethiopia', abbreviation: 'ET', isActive: false },
  { name: 'Falkland Islands', abbreviation: 'FK', isActive: false },
  { name: 'Faroe Islands', abbreviation: 'FO', isActive: false },
  { name: 'Fiji Islands', abbreviation: 'FJ', isActive: false },
  { name: 'Finland', abbreviation: 'FI', isActive: false },
  { name: 'France', abbreviation: 'FR', isActive: false },
  { name: 'French Guiana', abbreviation: 'GF', isActive: false },
  {
    name: 'French Polynesia',
    abbreviation: 'PF',
    isActive: false
  },
  {
    name: 'French Southern territories',
    abbreviation: 'TF',
    isActive: false
  },
  { name: 'Gabon', abbreviation: 'GA', isActive: false },
  { name: 'Gambia', abbreviation: 'GM', isActive: false },
  { name: 'Georgia', abbreviation: 'GE', isActive: false },
  { name: 'Germany', abbreviation: 'DE', isActive: false },
  { name: 'Ghana', abbreviation: 'GH', isActive: false },
  { name: 'Gibraltar', abbreviation: 'GI', isActive: false },
  { name: 'Greece', abbreviation: 'GR', isActive: false },
  { name: 'Greenland', abbreviation: 'GL', isActive: false },
  { name: 'Grenada', abbreviation: 'GD', isActive: false },
  { name: 'Guadeloupe', abbreviation: 'GP', isActive: false },
  { name: 'Guam', abbreviation: 'GU', isActive: false },
  { name: 'Guatemala', abbreviation: 'GT', isActive: false },
  { name: 'Guernsey', abbreviation: 'GG', isActive: false },
  { name: 'Guinea', abbreviation: 'GN', isActive: false },
  { name: 'Guinea-Bissau', abbreviation: 'GW', isActive: false },
  { name: 'Guyana', abbreviation: 'GY', isActive: false },
  { name: 'Haiti', abbreviation: 'HT', isActive: false },
  {
    name: 'Heard Island and McDonald Islands',
    abbreviation: 'HM',
    isActive: false
  },
  {
    name: 'Holy See (Vatican City State)',
    abbreviation: 'VA',
    isActive: false
  },
  { name: 'Honduras', abbreviation: 'HN', isActive: false },
  { name: 'Hungary', abbreviation: 'HU', isActive: false },
  { name: 'Iceland', abbreviation: 'IS', isActive: false },
  { name: 'India', abbreviation: 'IN', isActive: false },
  { name: 'Indonesia', abbreviation: 'ID', isActive: false },
  { name: 'Iran', abbreviation: 'IR', isActive: false },
  { name: 'Iraq', abbreviation: 'IQ', isActive: false },
  { name: 'Ireland', abbreviation: 'IE', isActive: false },
  { name: 'Isle of Man', abbreviation: 'IM', isActive: false },
  { name: 'Israel', abbreviation: 'IL', isActive: false },
  { name: 'Italy', abbreviation: 'IT', isActive: false },
  { name: 'Ivory Coast', abbreviation: 'CI', isActive: false },
  { name: 'Jamaica', abbreviation: 'JM', isActive: false },
  { name: 'Japan', abbreviation: 'JP', isActive: false },
  { name: 'Jersey', abbreviation: 'JE', isActive: false },
  { name: 'Jordan', abbreviation: 'JO', isActive: false },
  { name: 'Kazakhstan', abbreviation: 'KZ', isActive: false },
  { name: 'Kenya', abbreviation: 'KE', isActive: false },
  { name: 'Kiribati', abbreviation: 'KI', isActive: false },
  { name: 'Kuwait', abbreviation: 'KW', isActive: false },
  { name: 'Kyrgyzstan', abbreviation: 'KG', isActive: false },
  { name: 'Laos', abbreviation: 'LA', isActive: false },
  { name: 'Latvia', abbreviation: 'LV', isActive: false },
  { name: 'Lebanon', abbreviation: 'LB', isActive: false },
  { name: 'Lesotho', abbreviation: 'LS', isActive: false },
  { name: 'Liberia', abbreviation: 'LR', isActive: false },
  {
    name: 'Libyan Arab Jamahiriya',
    abbreviation: 'LY',
    isActive: false
  },
  { name: 'Liechtenstein', abbreviation: 'LI', isActive: false },
  { name: 'Lithuania', abbreviation: 'LT', isActive: false },
  { name: 'Luxembourg', abbreviation: 'LU', isActive: false },
  { name: 'Macao', abbreviation: 'MO', isActive: false },
  { name: 'North Macedonia', abbreviation: 'MK', isActive: false },
  { name: 'Madagascar', abbreviation: 'MG', isActive: false },
  { name: 'Malawi', abbreviation: 'MW', isActive: false },
  { name: 'Malaysia', abbreviation: 'MY', isActive: false },
  { name: 'Maldives', abbreviation: 'MV', isActive: false },
  { name: 'Mali', abbreviation: 'ML', isActive: false },
  { name: 'Malta', abbreviation: 'MT', isActive: false },
  { name: 'Marshall Islands', abbreviation: 'MH', isActive: false },
  { name: 'Martinique', abbreviation: 'MQ', isActive: false },
  { name: 'Mauritania', abbreviation: 'MR', isActive: false },
  { name: 'Mauritius', abbreviation: 'MU', isActive: false },
  { name: 'Mayotte', abbreviation: 'YT', isActive: false },
  { name: 'Mexico', abbreviation: 'MX', isActive: false },
  {
    name: 'Micronesia, Federated States of',
    abbreviation: 'FM',
    isActive: false
  },
  { name: 'Moldova', abbreviation: 'MD', isActive: false },
  { name: 'Monaco', abbreviation: 'MC', isActive: false },
  { name: 'Mongolia', abbreviation: 'MN', isActive: false },
  { name: 'Montenegro', abbreviation: 'ME', isActive: false },
  { name: 'Montserrat', abbreviation: 'MS', isActive: false },
  { name: 'Morocco', abbreviation: 'MA', isActive: false },
  { name: 'Mozambique', abbreviation: 'MZ', isActive: false },
  { name: 'Myanmar', abbreviation: 'MM', isActive: false },
  { name: 'Namibia', abbreviation: 'NA', isActive: false },
  { name: 'Nauru', abbreviation: 'NR', isActive: false },
  { name: 'Nepal', abbreviation: 'NP', isActive: false },
  { name: 'Netherlands', abbreviation: 'NL', isActive: false },
  {
    name: 'Netherlands Antilles',
    abbreviation: 'AN',
    isActive: false
  },
  { name: 'New Caledonia', abbreviation: 'NC', isActive: false },
  { name: 'New Zealand', abbreviation: 'NZ', isActive: false },
  { name: 'Nicaragua', abbreviation: 'NI', isActive: false },
  { name: 'Niger', abbreviation: 'NE', isActive: false },
  { name: 'Nigeria', abbreviation: 'NG', isActive: false },
  { name: 'Niue', abbreviation: 'NU', isActive: false },
  { name: 'Norfolk Island', abbreviation: 'NF', isActive: false },
  { name: 'North Korea', abbreviation: 'KP', isActive: false },
  { name: 'Northern Ireland', abbreviation: 'GB', isActive: false },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
    isActive: false
  },
  { name: 'Norway', abbreviation: 'NO', isActive: false },
  { name: 'Oman', abbreviation: 'OM', isActive: false },
  { name: 'Pakistan', abbreviation: 'PK', isActive: false },
  { name: 'Palau', abbreviation: 'PW', isActive: false },
  { name: 'Palestine', abbreviation: 'PS', isActive: false },
  { name: 'Panama', abbreviation: 'PA', isActive: false },
  {
    name: 'Papua New Guinea',
    abbreviation: 'PG',
    isActive: false
  },
  { name: 'Paraguay', abbreviation: 'PY', isActive: false },
  { name: 'Peru', abbreviation: 'PE', isActive: false },
  { name: 'Philippines', abbreviation: 'PH', isActive: false },
  { name: 'Pitcairn', abbreviation: 'PN', isActive: false },
  { name: 'Poland', abbreviation: 'PL', isActive: false },
  { name: 'Portugal', abbreviation: 'PT', isActive: false },
  { name: 'Puerto Rico', abbreviation: 'PR', isActive: false },
  { name: 'Qatar', abbreviation: 'QA', isActive: false },
  { name: 'Reunion', abbreviation: 'RE', isActive: false },
  { name: 'Romania', abbreviation: 'RO', isActive: false },
  { name: 'Russian Federation', abbreviation: 'RU', isActive: false },
  { name: 'Rwanda', abbreviation: 'RW', isActive: false },
  { name: 'Saint Helena', abbreviation: 'SH', isActive: false },
  {
    name: 'Saint Kitts and Nevis',
    abbreviation: 'KN',
    isActive: false
  },
  { name: 'Saint Lucia', abbreviation: 'LC', isActive: false },
  {
    name: 'Saint Pierre and Miquelon',
    abbreviation: 'PM',
    isActive: false
  },
  {
    name: 'Saint Vincent and the Grenadines',
    abbreviation: 'VC',
    isActive: false
  },
  { name: 'Samoa', abbreviation: 'WS', isActive: false },
  { name: 'San Marino', abbreviation: 'SM', isActive: false },
  {
    name: 'Sao Tome and Principe',
    abbreviation: 'ST',
    isActive: false
  },
  { name: 'Saudi Arabia', abbreviation: 'SA', isActive: false },
  { name: 'Senegal', abbreviation: 'SN', isActive: false },
  { name: 'Serbia', abbreviation: 'RS', isActive: false },
  { name: 'Seychelles', abbreviation: 'SC', isActive: false },
  { name: 'Sierra Leone', abbreviation: 'SL', isActive: false },
  { name: 'Singapore', abbreviation: 'SG', isActive: false },
  { name: 'Slovakia', abbreviation: 'SK', isActive: false },
  { name: 'Slovenia', abbreviation: 'SI', isActive: false },
  { name: 'Solomon Islands', abbreviation: 'SB', isActive: false },
  { name: 'Somalia', abbreviation: 'SO', isActive: false },
  { name: 'South Africa', abbreviation: 'ZA', isActive: false },
  {
    name: 'South Georgia and the South Sandwich Islands',
    abbreviation: 'GS',
    isActive: false
  },
  { name: 'South Korea', abbreviation: 'KR', isActive: false },
  { name: 'South Sudan', abbreviation: 'SS', isActive: false },
  { name: 'Spain', abbreviation: 'ES', isActive: false },
  { name: 'Sri Lanka', abbreviation: 'LK', isActive: false },
  { name: 'Sudan', abbreviation: 'SD', isActive: false },
  { name: 'Suriname', abbreviation: 'SR', isActive: false },
  {
    name: 'Svalbard and Jan Mayen',
    abbreviation: 'SJ',
    isActive: false
  },
  { name: 'Swaziland', abbreviation: 'SZ', isActive: false },
  { name: 'Sweden', abbreviation: 'SE', isActive: false },
  { name: 'Switzerland', abbreviation: 'CH', isActive: false },
  { name: 'Syria', abbreviation: 'SY', isActive: false },
  { name: 'Tajikistan', abbreviation: 'TJ', isActive: false },
  { name: 'Tanzania', abbreviation: 'TZ', isActive: false },
  { name: 'Thailand', abbreviation: 'TH', isActive: false },
  {
    name: 'The Democratic Republic of Congo',
    abbreviation: 'CD',
    isActive: false
  },
  { name: 'Timor-Leste', abbreviation: 'TL', isActive: false },
  { name: 'Togo', abbreviation: 'TG', isActive: false },
  { name: 'Tokelau', abbreviation: 'TK', isActive: false },
  { name: 'Tonga', abbreviation: 'TO', isActive: false },
  {
    name: 'Trinidad and Tobago',
    abbreviation: 'TT',
    isActive: false
  },
  { name: 'Tunisia', abbreviation: 'TN', isActive: false },
  { name: 'Turkey', abbreviation: 'TR', isActive: false },
  { name: 'Turkmenistan', abbreviation: 'TM', isActive: false },
  {
    name: 'Turks and Caicos Islands',
    abbreviation: 'TC',
    isActive: false
  },
  { name: 'Tuvalu', abbreviation: 'TV', isActive: false },
  { name: 'Uganda', abbreviation: 'UG', isActive: false },
  { name: 'Ukraine', abbreviation: 'UA', isActive: false },
  {
    name: 'United Arab Emirates',
    abbreviation: 'AE',
    isActive: false
  },
  { name: 'United Kingdom', abbreviation: 'GB', isActive: false },
  { name: 'United States', abbreviation: 'US', isActive: false },
  {
    name: 'United States Minor Outlying Islands',
    abbreviation: 'UM',
    isActive: false
  },
  { name: 'Uruguay', abbreviation: 'UY', isActive: false },
  { name: 'Uzbekistan', abbreviation: 'UZ', isActive: false },
  { name: 'Vanuatu', abbreviation: 'VU', isActive: false },
  { name: 'Venezuela', abbreviation: 'VE', isActive: false },
  { name: 'Vietnam', abbreviation: 'VN', isActive: false },
  {
    name: 'Virgin Islands, British',
    abbreviation: 'VG',
    isActive: false
  },
  {
    name: 'Virgin Islands, U.S.',
    abbreviation: 'VI',
    isActive: false
  },
  {
    name: 'Wallis and Futuna',
    abbreviation: 'WF',
    isActive: false
  },
  { name: 'Western Sahara', abbreviation: 'EH', isActive: false },
  { name: 'Yemen', abbreviation: 'YE', isActive: false },
  { name: 'Yugoslavia', abbreviation: 'YU', isActive: false },
  { name: 'Zambia', abbreviation: 'ZM', isActive: false },
  { name: 'Zimbabwe', abbreviation: 'ZW', isActive: false }
];

export default worldCountries;