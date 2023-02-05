import React from 'react'
import Homecss from './Home.module.css'
import img from './1.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <div className='container-fluid'>
    <div className="row">
        <div className="col-md-7">
            <h1 className={Homecss.heading}>WellCome to Our Online Diary</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam eligendi fugiat sunt corrupti vel explicabo, aut rem ipsam atque! Voluptas ex molestiae maiores ipsa ullam, laborum aperiam autem labore.</p>
            <Link className={`btn ${Homecss.btn}`} to="/SignUp" role="button">Get Start</Link>
        </div>
        <div className="col-md-5">
            <img src={img} alt="" />

        </div>
    </div>
   </div>
   </>
  )
}

export default Home
