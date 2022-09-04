import styles from './Sidebar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
    <aside className={cx('wrapper')}>
        <h2>Sidebar</h2>
    </aside>
);
}

export default SideBar;