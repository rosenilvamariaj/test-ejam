import Image from 'next/image'
import styles from './page.module.css'
import HeaderComponent from '@/components/HeaderComponent'
import BodyComponent from '@/components/BodyComponent'
import FooterComponent from '@/components/FooterComponent'
import MenuComponent from '@/components/MenuComponent'

export default function Home() {
  return (
   <>
    <HeaderComponent/>
    <MenuComponent />
    <BodyComponent/>
    <FooterComponent/>
   </>
  )
}
