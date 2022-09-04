import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import {Link} from 'react-router-dom'
 
const cx = classNames.bind(styles);
function Button({ to, href, onClick,max=false,medium=false, min=false,children ,primary=false,pushButton=false,className,leftIcon,plusIcon,menuItem,...passProps}) {
  let Comp = "button";
  const classes = cx("wrapper",{[className]:className,primary,min,medium,max,pushButton,menuItem});
  const props={onClick,...passProps,};

  if(to) {
    props.to=to
    Comp=Link
  }else if(href) {
      props.href=href
      Comp='a'
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('signIn-icon')}>{leftIcon}</span>}
      {plusIcon && <span className={cx('plus-icon')}>{plusIcon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
