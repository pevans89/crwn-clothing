import React from 'react';

import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu';

const Homepage = () => {
    return (
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    );
};

export default Homepage;
