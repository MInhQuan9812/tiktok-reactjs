import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles);
function AccountItem({data}) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
            {data.nickname}
          {data.tick && <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />}
        </h4>
        <p className={cx("username")}> {data.full_name}</p>   
      </div>
    </Link >
  );
}

export default AccountItem;
