import { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
       fetch('/public/course.json')
       .then(res => res.json())
       .then(data => setCourses(data))
    },[])
    return (
        <>
            <div className="container">
                <div className="card_container">

                {
                    courses.map(course =>(
                        <div key={course.id} className="card">
                        <img src={course.image} alt="" /><br />
                        <p>{course.coursename}</p><br/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><br />
                        <div className='price_credit'>
                            <span>Price: {course.price}</span>
                            <span>Credit: {course.credit}</span>
                        </div><br />
                        <button id='select_btn'>Select</button>
                    </div>
                    ))
                }
                  


                </div>
                <div className="cart_container">
                    <div className="cart">
                       <h1>Hello Mama</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;