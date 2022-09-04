import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Fragment } from "react";

// Import Page
import Home from "~/components/pages/Home";
// import Follow from '~/components/pages/Follow';
import { publicRoutes, privateRoutes } from "~/routes";

// Import Layout
import DefaultLayout from "~/components/Layout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Step 1: */}
          {/* <Route path="/" element={<Home/>}/>
            <Route path="follow" element={<Follow/>}/> */}

          {/* <Route path="/" >
              <Route path="home" element={<UploadLayout><Home/></UploadLayout>}/>
            </Route>   */}

          {/* <Route path="/" >
              <Route path="follow" element={<Follow/>}/>
            </Route>  */}

          {/* Step 2: */}
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) Layout = route.layout;
            else if (Layout === null) Layout = Fragment;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
