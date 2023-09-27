import style from './styles.module.css'
const FooterComponent = () =>{

    return(
      <div className={style.footer}>

        <div className={style.footerCopy}>
            <p>Copyright (c) 2023</p>
            <div className={style.footerCopyDivider}></div>
            <a href='mailto:clarifionsupport@clarifion.com' target='_blank' className={style.footerCopyContact}>clarifionsupport@clarifion.com</a>
        </div>

        <div className={style.footerSecurityCompliance}>
            <div className={style.footerSecurityComplianceIcon}><img src='/lock.svg' /></div>
            <p>Secure 256-bit SSL encryption.</p>
        </div>

      </div>
    )
}

export default FooterComponent;