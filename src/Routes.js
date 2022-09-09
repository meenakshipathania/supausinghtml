import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';


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
                        </Routes>
                    {/* </ScrollToTop> */}
                </Router>
            </div>
        </>
    );
}

export default Rout;
