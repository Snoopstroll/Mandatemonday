import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
    <>
    <div className={styles.background}>
        <div className="wrapper">
            <Container>
            <Row className={styles.footer}>
                <Col md={4} sm={12} className={styles.left}>
                    <a href="mailto:mondaymandate@gmail.com"><p className="grey-text">Email: info@mandatemonday.com</p></a>
                    <Link href="/episodes"><a className="grey-text epLink">Episodes</a></Link>
                </Col>
                <Col md={4} sm={12} className={styles.middle}>
                    <h4>
                        Mandate Monday © {new Date().getFullYear()}
                    </h4>
                    <h6>
                        Website created by <a className="hover" href="https://houghtonwebdesign.co.uk/">Houghton Web Design</a>
                    </h6>
                </Col>
                <Col md={4} sm={12} className={styles.right}>
                    <p className="grey-text-mobile">Email: info@mandatemonday.com</p>
                    <p className="grey-text-mobile">Episodes</p>
                    <p>Follow Us On:</p>
                    <a href="https://www.facebook.com/mandatemondaypodcast"> <FacebookIcon className={styles.iconFB} fontSize="large" /></a>
                    <a href="https://www.instagram.com/mandate.monday/?hl=en"><InstagramIcon className={styles.iconIG} fontSize="large" /></a>
                    <a href="https://open.spotify.com/show/0A5X6YmBNxU8v4TXma7DdA?si=AR11TVLdRxCpAq_BLDqJ_Q&dl_branch=1"><FontAwesomeIcon className={styles.iconTw} icon={faSpotify} /></a>
                    
                </Col>
            </Row>
            </Container>
        </div>
    </div>
    </>
    )
}
