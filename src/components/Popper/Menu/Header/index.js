import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '~/components/Popper/Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx=classNames.bind(styles);

function Header({title,onBack}) {
    return ( 
        <header className={cx('header')} >
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <p className={cx('header-title')}>{title}</p>

        </header>
     );
}

export default Header;