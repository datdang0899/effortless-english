import React from 'react';
import GroupButtons from '../../Components/Common/GroupButtons';
import CardMessage from "../../Components/CardMessage" ; 
import ButtonTogglerModal from "../../Components/Common/ButtonTogglerModal" ; 
import Modal from "../../Components/Modal" ; 
import FormMessage from '../../Components/FormMessage';

function Messages(props) {

    return (
        <div className='dashboard-messages container-xxl'>
            <div className="dashboard-message_features">
                <ButtonTogglerModal />
                <GroupButtons />
            </div>
            <div className="dashboard-message_body">
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
                <CardMessage />
            </div>
            <Modal title="SEND MESSAGE">
                <FormMessage />
            </Modal>
        </div>
    );
    
}

export default Messages;