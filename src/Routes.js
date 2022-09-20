import React from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Landing from './components/landing';
import Detail from './components/CategoryDetail';
// import Home from './components/Homepage';
// import Navi from './components/Navigation';


function Rout() {
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // });
    return (
        <>
            {/* {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )} */}
            <div>
                <Router>
                    {/* <ScrollToTop> */}
                        <Routes>
                            <Route exact path="/" element={ <Landing />} />
                            <Route exact path="/:name" element={ <Detail />} />
                        </Routes>
                    {/* </ScrollToTop> */}
                </Router>
            </div>
        </>
    );
}

export default Rout;
