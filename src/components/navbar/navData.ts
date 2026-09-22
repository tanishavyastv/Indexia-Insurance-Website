export type Align = 'left' | 'center' | 'right'

export type MenuLink = {
  label: string
  href: string
  note?: string
  icon?: string
  accent?: string
  soft?: string
}

export type MenuColumn = {
  title: string
  links: MenuLink[]
  icon: string
  accent: string
  soft: string
}

export type MenuGroup = {
  title: string
  description?: string
  loginLabel?: string
  loginHref?: string
  icon: string
  accent: string
  soft: string
  links: MenuLink[]
}

export type NavItem =
  | { kind: 'mega'; label: string; align: Align; columns: MenuColumn[] }
  | { kind: 'links'; label: string; align: Align; items: MenuLink[] }
  | { kind: 'panel'; label: string; align: Align; groups: MenuGroup[] }

export const PRODUCT_LINK = '#products'
export const HELP_LINK = '#footer'

const ICON_DOC =
  'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
const ICON_CHART =
  'M3.5 18.5 9.5 12l4 4 7.5-8.6V4h-2v2.6L13.6 13l-4-4-7.5 8.4v1.6h1.4zM3 20h18v1.5H3V20z'
const ICON_HEART =
  'M12 21s-7.5-4.9-9.5-9.2C1 8.6 3 5.5 6.2 5.5c2 0 3.6 1.1 4.3 2.7h3c.7-1.6 2.3-2.7 4.3-2.7 3.2 0 5.2 3.1 3.7 6.3C19.5 16.1 12 21 12 21zm-1-13v2H9v2h2v2h2v-2h2v-2h-2V8h-2z'
const ICON_CAR =
  'M18.9 6c-.2-.6-.8-1-1.4-1H6.5c-.6 0-1.2.4-1.4 1L3 12v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6zM6.5 16A1.5 1.5 0 1 1 8 14.5 1.5 1.5 0 0 1 6.5 16zm11 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'
const ICON_BIKE =
  'M19.44 11.06 18 10.5l-2.31-4.36A2.5 2.5 0 0 0 13.5 5H8.5c-.69 0-1.3.35-1.66.87L4.16 9.5 2 10.41V14a1 1 0 0 0 1 1h1.18A2.99 2.99 0 0 0 7 17c1.3 0 2.4-.84 2.82-2h4.36c.42 1.16 1.52 2 2.82 2s2.4-.84 2.82-2H21a1 1 0 0 0 1-1v-2.5l-2.56-.44zM7 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
const ICON_HOME = 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z'

export const PANEL_ALIGN: Record<Align, string> = {
  left: 'left-0',
  center: 'left-0',
  right: 'right-0',
}

const INSURANCE_PRODUCTS: MenuColumn[] = [
  {
    title: 'Term Insurance',
    icon: ICON_DOC,
    accent: '#047a72',
    soft: '#e4f6f2',
    links: [
      { label: 'Life Insurance', href: PRODUCT_LINK },
      { label: 'Best Term Insurance Plan', href: PRODUCT_LINK },
      { label: 'Term Insurance for NRI', href: PRODUCT_LINK },
      { label: '1 Crore Term Insurance', href: PRODUCT_LINK },
      { label: 'Term Insurance Calculator', href: PRODUCT_LINK },
      { label: 'Term Insurance for Women', href: PRODUCT_LINK },
      { label: 'Term Insurance Return of Premium', href: PRODUCT_LINK },
    ],
  },
  {
    title: 'Other Insurance',
    icon: 'M21.5 15.5v-2l-8.5-5V3a1.5 1.5 0 0 0-3 0v5.5l-8.5 5v2l8.5-2.5V18l-2.5 1.5V21l4-1 4 1v-1.5L13 18v-5l8.5 2.5z',
    accent: '#175ca8',
    soft: '#e4effa',
    links: [
      { label: 'Travel Insurance', href: PRODUCT_LINK },
      { label: 'International Travel Insurance', href: PRODUCT_LINK },
      { label: 'Home Insurance', href: PRODUCT_LINK },
      { label: 'Group Health Insurance', href: PRODUCT_LINK },
      { label: 'Marine Insurance', href: PRODUCT_LINK },
      { label: 'Professional Indemnity', href: PRODUCT_LINK },
      { label: 'Cyber Insurance', href: PRODUCT_LINK },
      { label: 'Pet Insurance', href: PRODUCT_LINK },
    ],
  },
  {
    title: 'Investment Plans',
    icon: ICON_CHART,
    accent: '#8a7a12',
    soft: '#fbf8c0',
    links: [
      { label: 'ULIP Plans', href: PRODUCT_LINK },
      { label: 'Child Plans', href: PRODUCT_LINK },
      { label: 'Pension Plans', href: PRODUCT_LINK },
      { label: 'Guaranteed Return Plans', href: PRODUCT_LINK },
      { label: 'Tax Saving Investments', href: PRODUCT_LINK },
      { label: 'Capital Guarantee Plans', href: PRODUCT_LINK },
      { label: 'Annuity Plans', href: PRODUCT_LINK },
    ],
  },
  {
    title: 'Health Insurance',
    icon: ICON_HEART,
    accent: '#0b6e85',
    soft: '#e0f2f7',
    links: [
      { label: 'Health Insurance Plans for Family', href: PRODUCT_LINK },
      { label: 'Health Insurance for Senior Citizens', href: PRODUCT_LINK },
      { label: 'Maternity Insurance', href: PRODUCT_LINK },
      { label: 'Network Hospitals', href: PRODUCT_LINK },
      { label: 'Critical Illness Insurance', href: PRODUCT_LINK },
      { label: 'Mediclaim Policy', href: PRODUCT_LINK },
      { label: 'Health Insurance Calculator', href: PRODUCT_LINK },
    ],
  },
  {
    title: 'Car Insurance',
    icon: ICON_CAR,
    accent: '#334155',
    soft: '#eff2f6',
    links: [
      { label: 'Car Insurance', href: PRODUCT_LINK },
      { label: 'Bike Insurance', href: PRODUCT_LINK },
      { label: 'Zero Dep Car Insurance', href: PRODUCT_LINK },
      { label: 'Third Party Insurance', href: PRODUCT_LINK },
      { label: 'Car Insurance Calculator', href: PRODUCT_LINK },
      { label: 'Pay As You Drive Insurance', href: PRODUCT_LINK },
      { label: 'Electric Car Insurance', href: PRODUCT_LINK },
    ],
  },
]

const RENEW_ITEMS: MenuLink[] = [
  {
    label: 'Term Life Renewal',
    href: PRODUCT_LINK,
    icon: ICON_DOC,
    accent: '#047a72',
    soft: '#e4f6f2',
  },
  {
    label: 'Investment Renewal',
    href: PRODUCT_LINK,
    icon: ICON_CHART,
    accent: '#8a7a12',
    soft: '#fbf8c0',
  },
  {
    label: 'Health Renewal',
    href: PRODUCT_LINK,
    icon: ICON_HEART,
    accent: '#0b6e85',
    soft: '#e0f2f7',
  },
  {
    label: 'Motor Renewal',
    href: PRODUCT_LINK,
    icon: ICON_CAR,
    accent: '#334155',
    soft: '#eff2f6',
  },
  {
    label: 'Two Wheeler Renewal',
    href: PRODUCT_LINK,
    icon: ICON_BIKE,
    accent: '#175ca8',
    soft: '#e4effa',
  },
  {
    label: 'Home Insurance Renewal',
    href: PRODUCT_LINK,
    icon: ICON_HOME,
    accent: '#1d8d75',
    soft: '#d3f2e8',
  },
]

const CLAIM_ITEMS: MenuLink[] = [
  {
    label: 'File a new claim',
    href: HELP_LINK,
    icon: 'M19 3h-4.18A3 3 0 0 0 12 1a3 3 0 0 0-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 13-3.5-3.5 1.41-1.41L10 13.17l6.09-6.08L17.5 8.5 10 16z',
    accent: '#047a72',
    soft: '#e4f6f2',
  },
  {
    label: 'Claim is already filed with the Insurer',
    href: HELP_LINK,
    icon: 'M19 3h-4.18A3 3 0 0 0 12 1a3 3 0 0 0-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1 14-3.5-3.5 1.41-1.41L11 14.17l5.59-5.58L18 10l-7 7z',
    accent: '#175ca8',
    soft: '#e4effa',
  },
  {
    label: 'Know more about filing claim',
    href: HELP_LINK,
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm1.9-5.3-.9.92c-.72.73-1 1.34-1 2.38h-2v-.5c0-.61.26-1.17.7-1.61l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 1 0-4 0H8a4 4 0 1 1 8 0c0 .88-.36 1.68-.93 2.25z',
    accent: '#0b6e85',
    soft: '#e0f2f7',
  },
  {
    label: 'Track existing claim',
    href: HELP_LINK,
    icon: 'M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z',
    accent: '#8a7a12',
    soft: '#fbf8c0',
  },
  {
    label: 'Cashless network',
    href: HELP_LINK,
    icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
    accent: '#1d8d75',
    soft: '#d3f2e8',
  },
]

const SUPPORT_GROUPS: MenuGroup[] = [
  {
    title: 'Account & Service Help',
    description: 'Log in to your account to get personalized support.',
    loginLabel: 'Login with mobile number',
    loginHref: HELP_LINK,
    icon: 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5z',
    accent: '#047a72',
    soft: '#e4f6f2',
    links: [
      { label: 'Track payments / policy status', href: HELP_LINK },
      { label: 'View / manage policies', href: HELP_LINK },
      { label: 'Claims', href: HELP_LINK },
      { label: 'Communication preferences', href: HELP_LINK },
      { label: 'Get help/Report an issue', href: HELP_LINK },
    ],
  },
  {
    title: 'General queries',
    icon: 'M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm6 5H7v-2h6v2zm4-6H7V6h10v2z',
    accent: '#175ca8',
    soft: '#e4effa',
    links: [
      { label: 'Verify advisor', href: HELP_LINK },
      { label: 'Advisor Feedback', href: HELP_LINK },
      { label: 'Get a call back', href: HELP_LINK },
      { label: 'Chat With Us', href: HELP_LINK },
      { label: 'View more', href: HELP_LINK },
    ],
  },
]

const EXPERT_ITEMS: MenuLink[] = [
  {
    label: 'NRI helpline for buying a new policy',
    note: '91-124-6656507',
    href: 'tel:911246656507',
  },
  {
    label: 'NRI helpline for existing policy',
    note: '91-124-6166696',
    href: 'tel:911246166696',
  },
  {
    label: 'NRI helpline for claim',
    note: '91-124-6166633',
    href: 'tel:911246166633',
  },
]

export const NAV_ITEMS: NavItem[] = [
  { kind: 'mega', label: 'Insurance Products', align: 'center', columns: INSURANCE_PRODUCTS },
  { kind: 'links', label: 'Renew a Policy', align: 'left', items: RENEW_ITEMS },
  { kind: 'links', label: 'Claim', align: 'left', items: CLAIM_ITEMS },
  { kind: 'panel', label: 'Support', align: 'right', groups: SUPPORT_GROUPS },
  { kind: 'links', label: 'Talk to Expert', align: 'right', items: EXPERT_ITEMS },
]
