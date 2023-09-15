import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    useEffect(()=>{
       fetch('/course.json')
       .then(res => res.json())
       .then(data => setCourses(data))
    },[])

    const handleSelect = (course) =>{
       setSelectCourse([...selectCourse, course]);
    }
    return (
        <> 
           <h1 id='heading_title'>Course Registration</h1>
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
                        <button onClick={()=>handleSelect(course)} id='select_btn'>Select</button>
                    </div>
                    ))
                }
                  


                </div>
                <div className="cart_container">
                    <div className="cart">
                       <Cart selectCourse={selectCourse}></Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;