import React from 'react'

export default function Login() {
    return (
        <div className="container">
            <div className="card col-8 mx-auto my-5 py-3 px-3">
                <div className="row">
                    <h2 className='text-info'>Login Form</h2>
                </div>
        <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text"
                className=
                {`form-control`} 
                id="email"
                />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className={`form-control`}
                id="pass"
            />
            </div>
        </div>
        
        <div className="mb-3 row col-5 mx-auto">
            <button type="submit" className="btn btn-info mb-3">
                Submit</button>
        </div>
        </div>
    </div>
    )
}
