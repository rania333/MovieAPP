import React, {useState} from 'react';
//(\\s[a-zA-z]{3,}){1,}
//(?=rania) => (?=.*?[a-z])
export default function FormComponent() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        pass:"",
        pass2: ""
    });
    const handler = (e) => {
        //values
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
        
    }
    return (
        <div className="container">
            <div className="card col-8 mx-auto my-5 py-3 px-3">
            <div className="row">
                    <h2 className='text-info'>Registeration Form</h2>
                </div>
            <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className=
                    {`form-control`} id="name"
                    value={user.name} onChange={(e) => handler(e)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text"
                    className=
                    {`form-control`} 
                    id="email"
                    value={user.email} onChange={(e) => handler(e)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="userName" className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-10">
                    <input type="text"className={`form-control`}
                    id="userName"
                    value={user.userName} onChange={(e) => handler(e)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className={`form-control`}
                    id="pass"
                    value={user.pass} onChange={(e) => handler(e)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="pass2" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className={`form-control`} 
                    id="pass2"
                    value={user.pass2} onChange={(e) => handler(e)}/>
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
