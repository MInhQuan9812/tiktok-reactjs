import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState, useEffect, useRef } from "react";
import PopperWrapper from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import useDebounce from "~/hooks/useDebounce";
import axios from "axios";


const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced =useDebounce(searchValue,1000);
  const inputRef = useRef();
  
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    axios.get(
      `https://tiktok.fullstack.edu.vn/api/users/search`,{
        params:{
          q:debounced,
          type:"less"
        }
      }
    )
      .then((res) => {

        setSearchResult(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      onClickOutside={() => {
        handleHideResult();
      }}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài khoản</h4>
            {searchResult.map((result) => (
              <AccountItem data={result} onClick={() => setSearchResult([])} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Tìm kiếm tài khoản và video"
          spellcheck={false}
          onFocus={() => setShowResult(true)}
        />
        {searchValue && !loading && (
          <button
            className={cx("clear-btn")}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
              setSearchResult([]);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />
        )}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
