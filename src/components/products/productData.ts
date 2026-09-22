import heartbeatIcon from '../../assets/products/Heartbeat.webp'
import familyIcon from '../../assets/products/Family.webp'
import carIcon from '../../assets/products/Car.webp'
import airplaneIcon from '../../assets/products/Airplane.webp'
import homeIcon from '../../assets/products/Home.webp'
import businessIcon from '../../assets/products/Business.webp'

export type Product = {
  icon: string
  alt: string
  title: string
  body: string
  tint: string
  border: string
  circle: string
  glyphDark?: boolean
}

export const products: Product[] = [
  {
    icon: heartbeatIcon,
    alt: 'Heartbeat',
    title: 'My Health',
    body: 'Medical coverage for you and your family',
    tint: 'from-[#e4f6f2] to-[#d0efe8]',
    border: 'border-[#a9ddd2]',
    circle: 'bg-[#02c08f]',
  },
  {
    icon: familyIcon,
    alt: 'Family',
    title: 'My Family',
    body: 'Secure their financial future',
    tint: 'from-[#e4effa] to-[#d1e7f6]',
    border: 'border-[#a9cfe9]',
    circle: 'bg-[#0368c6]',
  },
  {
    icon: carIcon,
    alt: 'Car',
    title: 'My Car / Bike',
    body: 'Protect your vehicle from accidents, theft and more',
    tint: 'from-[#f3f7e4] to-[#e7f0d0]',
    border: 'border-[#d0e0aa]',
    circle: 'bg-[#f7d101]',
    glyphDark: true,
  },
  {
    icon: airplaneIcon,
    alt: 'Airplane',
    title: 'My Trip',
    body: 'Travel with complete peace of mind',
    tint: 'from-[#e6effa] to-[#d4e4f7]',
    border: 'border-[#aac7e7]',
    circle: 'bg-[#026ccc]',
  },
  {
    icon: homeIcon,
    alt: 'Home',
    title: 'My Home',
    body: 'Keep your home and belongings safe',
    tint: 'from-[#e4f6f2] to-[#d0efe8]',
    border: 'border-[#a9ddd2]',
    circle: 'bg-[#00ba8b]',
  },
  {
    icon: businessIcon,
    alt: 'Briefcase',
    title: 'My Business',
    body: 'Protection for your company, employees and assets',
    tint: 'from-[#eff2f6] to-[#e0e6ee]',
    border: 'border-[#c3ceda]',
    circle: 'bg-[#425566]',
  },
]
