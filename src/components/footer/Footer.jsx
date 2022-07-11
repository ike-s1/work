import React from 'react';
import '../../scss/components/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__top">
            <img src="/images/header/logo.png" alt="void gods" />
        </div>
        <div className="footer__bottom">
            <p>Void Gods, 2022</p>
            <div className="footer__bottom-socials">
                <a href="#"><img src="/icons/discordGray.png" alt="discord" /></a>
                <a href="#"><img src="/icons/twitterGray.png" alt="twitter" /></a>
            </div>
        </div>
    </footer>
  )
}
