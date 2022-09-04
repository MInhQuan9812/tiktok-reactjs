import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.scss"

const API="kcsRlwbMzHVq0pNhxiazMD9gtskSZEkE5Xh7UGUHAtfyt3YoKV6IIZQtDok8tjYBlvDnFddtqzQRJP8ozS3dU1sbUoR0cEpWtyMfVZgeXVYIiC_0lODwrg3AGD_BYnYx"
const URL="https://api.yelp.com/v3/businesses/search"
const apiOptions = {
  headers: {
    Authorization: `Bearer ${API}`,
  },
};
const city="California"
const q="restaurants"
const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <button
        className="show-in4"
        onClick={() => {
          // axios
          //   .get("https://www.pgonevn.com/api/weatherforecast")
          //   .then((response) => {
          //     setData(response.data);
          //   })
          //   .catch((error) => {
          //     alert(error);
          //   });

          axios.get('http://localhost:3000/data')
          .then((response) => {
            console.log(response.data.data[0])
            setData(response.data.data[0])
          })
          .catch((error) => {
            alert(error);
          })
        }}
      >Push</button>
      
      {Boolean(data) && (
        <div>
          <div> Username : {data.name}</div>
          {/* <div> Password : {data.rating}</div> */}
        </div>
      )}
    </div>
  );
};

export default Home;

// function Home() {
//     return (<h4>
//         Home
//     </h4>
// );}

// export default Home;
