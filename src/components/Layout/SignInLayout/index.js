import SideBar from '~/components/Layout/components/SideBar';
import Header from './Header';
import classNames from 'classnames/bind';
import styles from './SignInLayout.module.scss';

const cx=classNames.bind(styles);

function SignInLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <h1 className={cx("title")}>SIGN IN!</h1>
          <form className={cx("account-layout")}>
            
            <div className={cx("user-layout")}>
              <label className={cx("user-info")}>
                <b>Email Address</b>
              </label>
              <input
                className={cx("user-place")}
                type="text"
                placeholder="Enter email"
              />
            </div>

            <div className={cx("user-layout")}>
              <label className={cx("user-info")}>
                <b>Password</b>
              </label>
              <input
                className={cx("user-place")}
                type="password"
                placeholder="Enter password"
              />
            </div>

            <div className={cx("login-place")}>
              <button className={cx("login-btn")}>SIGN IN</button>
              <a className={cx('active-forgot-label')} href="forgot">
                Forgot Password?
              </a>
            </div>

            <div className={cx("check-signup-layout")}>
              <div className={cx("check-signup")}>
                <label className={cx("signup-label")}>
                  <b>Not a member?</b>
                </label>
                <a className={cx("active-signup-label")} href="signup">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

  export default SignInLayout;