import React from 'react'
import { Breadcrumb } from 'react-bootstrap';

function Offers() {
    return (
        <div className="container">
            <div style={{padding: '40px 0px'}}>
                <Breadcrumb>
                    <Breadcrumb.Item href={`/`} >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={`/`} >
                        Campaign
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{padding: '0px 15px 15px 15px'}}>All Campaigns</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div style={{height: '200px', background: '#ddd', marginBottom: '20px'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;
