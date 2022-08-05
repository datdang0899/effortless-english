import React from 'react';

function BoxViewReport(props) {
    return (
        <div className="col-lg-3 col-md-6 col-6">
            <div className="card">
                <div className="card-header">
                    {props.data.title}
                </div>
                <div className="card-body">
                    <div className="card-title">
                        {props.data.quantity + "+"}
                    </div>
                    <a href="#" className="btn">Go History</a>
                </div>
            </div>
        </div>
    );
}

export default BoxViewReport;