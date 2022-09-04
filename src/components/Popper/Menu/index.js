import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import PopperWrapper from '~/components/Popper';
import MenuItem from './MenuItem'
import Header from '~/components/Popper/Menu/Header';
import { useState } from "react";
const cx = classNames.bind(styles);
const defaultFn=() =>{}
function Menu({ children,items=[] ,onChange=defaultFn}) {

    const[history,setHistory]=useState([{data:items }]);

    const current=history[history.length-1];

    const renderItems = () => {
      return current.data.map((item, index) => {
        const isParent=!!item.children
        return <MenuItem key={index} data={item} onClick={() =>{
          if(isParent){
            setHistory(prev => [...prev,item.children]); 
          }else {
            onChange(item) ;
          }
        }}/>; 
      });
    };
  return (
    <Tippy
      interactive
      offset={[10,10]}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length>1 && <Header title="Ngôn ngữ" onBack={()=>{setHistory(prev=>prev.slice(0,prev.length-1))}}/>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() =>setHistory(prev=> prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;