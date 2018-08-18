import React from 'react';
export default ({item, actions, buttonText, linkText, link}) => {
    return (
        <div id="modal-footer">
            <div className="flex-start">
                <a id={`${item.name}_link`} href={link || '#'}>{linkText}</a>
            </div>
            <div className="flex-end">
                <button onClick={actions.buttonOnClick}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}