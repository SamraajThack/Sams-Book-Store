import React from 'react'
import Layout from '../core/Layout'
import {API} from '../config';

const Signup = () =>  {
    return(
        <Layout title = 'Signup' description = "Signup to E-commerce App">
            {API}
        </Layout>
        )
    }

export default Signup