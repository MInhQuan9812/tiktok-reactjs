import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faEarthAmerica,
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faPaperPlane,
  faUser,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import Search from '~/components/Layout/components/Search';
import {navigate,useNavigate} from 'react-router-dom';
// import { searchService } from "../../../repository/searchService";

const currentUser=false;
const cx = classNames.bind(styles);
const MENU_ITEMS= [
  {
    icon:<FontAwesomeIcon icon={faEarthAmerica}/>,
    title: 'Tiếng Việt ',
    children: {
        title:"Ngôn ngữ",
        data:[
          {
            type:'language',
            code:'en',
            title:"English"
          }, 
          {
            code:'kr',  
            title:'Tiếng Hàn'
          }
        ]
    }
  },
  {
    icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback'
  },
  {
    icon:<FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Phím tắt trên bàn phím',
  }
];

function Header() {
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/signin"; 
    navigate(path);
  }

  const userMenu=[
    {
      icon:<FontAwesomeIcon icon={faUser}/>,
      title:'Xem hồ sơ',
      to:"/profile"
    },
    {
      icon:<FontAwesomeIcon icon={faBitcoin}/>,
      title:'Nhận xu'
    },
    {
      icon:<FontAwesomeIcon icon={faGear}/>,
      title:'Cài đặt'
    },
    ...MENU_ITEMS,
    {
      icon:<FontAwesomeIcon icon={faSignOut}/>,
      title:'Đăng xuất',
      to:'/logout',
      separate:true
    }
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* <Search/> */}

        {/* <div className={cx("action") }>
          <Button pushButton plusIcon={<FontAwesomeIcon icon={faPlus} onClick={routeChange}/>}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Message">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Notification">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary onClick={routeChange}>Đăng nhập</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu:MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                alt="user image"
                src="https://i.scdn.co/image/ab6775700000ee85f032282e3bdee49cf97db86d?fbclid=IwAR3wEGQszINKokopQM4nM-wW1kCvnd3ZP1AVgLOraf8xcZGzWNGiK9wlPRA"
              />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu> */}

        {/* </div> */}
      </div>
    </header>
  );
}
export default Header;
