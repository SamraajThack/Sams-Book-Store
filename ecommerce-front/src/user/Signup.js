import React from 'react'
import Layout from '../core/Layout'


const Signup = () =>  {

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className='form-control' />
            </div>

            <div className="form-group">
                <label  className="text-muted">Email</label>
                <input type="email" className=" form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className='form-control' />
            </div>


            <div>
            <button className="btn btn-primary mt-2" >Submit
            </button>
            </div>

        </form>
    )
    return(
        <Layout 
            title = 'Signup' 
            description = "Signup to E-commerce App"
            className = "container col-md-8 offset-md-2"
            >
            {signUpForm()}
        </Layout>
        );
    };

export default Signup