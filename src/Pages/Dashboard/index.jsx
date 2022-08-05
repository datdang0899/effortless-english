import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Layouts/Sidebar';
import Header from './Header';
import Messages from './Messages';
import Overview from './Overview/index';
import Settings from './Settings';
import TaskList from './TaskList';

function Dashboard() {
    const [showSidebar,setShowSidebar] = useState(false) ;
    
    return (
        <div className='dashboard-section'>
            <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
            <Sidebar showSidebar={showSidebar}/>
            {/* <Overview /> */}
            {/* <Messages /> */}
            {/* <Settings /> */}
            <TaskList />
        </div>
    );
}

export default Dashboard;       