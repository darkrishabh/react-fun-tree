import React from 'react';
export default ({title}) => {
    return (
        <div id="modal-header">
            <div>
                <span className="title">{title}</span>
                <span className="close" />
            </div>
        </div>
    )
}