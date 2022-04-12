import {Link} from 'react-router-dom';
import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
              <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link to="/">Início</Link>
                  </li>
                  <li className={styles.item}>
                    <Link to="/Projects.js">Projetos</Link>
                  </li>
                  <li className={styles.item}>
                    <Link to="Company.js">Empresa</Link>
                  </li>
                  <li className={styles.item}>
                    <Link to="/Contact.js">Contato</Link>
                  </li>
              </ul>
            </Container>
        </nav>

        
    )
}

export default NavBar