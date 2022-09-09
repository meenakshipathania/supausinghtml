import React from 'react';
import Topbar from './topbar';
// import Checklist from './checklist';

function Landing() {
    // const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            {/* <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeThree action={drawerAction.toggle} />
            <BackToTop className="back-to-top-3" /> */}
            <Topbar />
            {/* <Checklist /> */}
        </>
    );
}

export default Landing;
