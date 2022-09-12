import React from 'react'

const DemoWarning = () => {
    return (
        <div style={{background: 'var(--color-primary)', color: '#fff', fontWeight: '600'}} className="p-1 text-center mb-0" >
            <p className="m-0" >
            <i className="fas fa-bell"></i>
                {" "}
                This Site is under development
                {" "}
            </p>
        </div>
    );
}

export default DemoWarning;