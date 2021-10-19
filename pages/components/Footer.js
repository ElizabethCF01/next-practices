import {
    faGithubAlt,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer p-3 bg-dark" role="contentinfo">
            <div className="container p-y-1 d-flex flex-column justify-content-center align-items-center">
                <p> 2021 © Copyright RICK AND MORTY. All Rights Reserved</p>
                <ul className="social-media d-flex justify-content-center m-0 p-0 pb-3">
                    <li className='mx-2'><a href="https://github.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt}/></a></li>
                    <li className='mx-2'><a href="https://facebook.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className='mx-2'><a href="https://twitter.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
                <p> ❮❯ by Juputer001</p>
            </div>
        </footer>
    )
}
export default Footer