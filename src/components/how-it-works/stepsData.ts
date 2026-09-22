import chooseIcon from '../../assets/process/Choose.webp'
import formIcon from '../../assets/process/Form.webp'
import paymentIcon from '../../assets/process/Payment.webp'
import doneIcon from '../../assets/process/Done.webp'

export type Step = {
  num: string
  icon: string
  alt: string
  title: string
  body: string
  ring: string
  chip: string
  dash: string
  arrow: string
}

export const steps: Step[] = [
  {
    num: '01',
    icon: chooseIcon,
    alt: 'Clipboard with checkmarks',
    title: 'Choose Your Plan',
    body: 'Select the insurance plan that suits your needs.',
    ring: 'border-[#bfe3f2]',
    chip: 'bg-[#d2ebfd] text-[#05245e]',
    dash: 'border-[#7db8ea]',
    arrow: 'border-[#8fc7ee] text-[#0d6bb8]',
  },
  {
    num: '02',
    icon: formIcon,
    alt: 'Form with pencil',
    title: 'Fill Simple Form',
    body: 'Provide few details and get instant quote.',
    ring: 'border-[#b8ecdc]',
    chip: 'bg-[#c7f7e7] text-[#0b5138]',
    dash: 'border-[#7fdcae]',
    arrow: 'border-[#8fe4c0] text-[#12a06b]',
  },
  {
    num: '03',
    icon: paymentIcon,
    alt: 'Wallet or card',
    title: 'Make Payment',
    body: 'Secure payment through multiple options.',
    ring: 'border-[#bfe3f2]',
    chip: 'bg-[#d7f0fe] text-[#05245e]',
    dash: 'border-[#7db8ea]',
    arrow: 'border-[#8fc7ee] text-[#0d6bb8]',
  },
  {
    num: '04',
    icon: doneIcon,
    alt: 'Shield with checkmark',
    title: 'You Are Covered',
    body: 'Get your policy instantly and enjoy peace of mind.',
    ring: 'border-[#b8ecdc]',
    chip: 'bg-[#caf5ec] text-[#0b5138]',
    dash: '',
    arrow: '',
  },
]
