import { useEffect, useState } from 'react';
import { BsBook } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import './Home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [cost, setCost] = useState(0)
    const [remainding, setRemainding] = useState(0)
    useEffect(()=>{
       fetch('/course.json')
       .then(res => res.json())
       .then(data => setCourses(data))
    },[])

    const handleSelect = (course) =>{
        let count = course.credit
       const isExists = selectCourse.find(item=> item.id == course.id)
       if(isExists){
         toast.error("Already Selected!");
       }else{
         selectCourse.forEach(item=>{
            count = count + item.credit
         })
         const remainderCredit = 20 - count
         if(count > 20 && remainderCredit < 0){
            toast.error("You cannot select more than 20 credits");
         }else{
            setRemainding(remainderCredit)
            setCost(count)
            setSelectCourse([...selectCourse, course]);
         }

       }
      
    }
    return (
        <> 
           <h1 id='heading_title'>Course Registration</h1>
            <div className="container">
                <div className="card_container">

                {
                    courses.map(course =>(
                        <div key={course.id} className="card">
                        <img src={course.image} alt="" />
                        <p className='card_title'>{course.coursename}</p>
                        <p className='card_desc'>{course.details}</p>
                        <div className='price_credit'>
                            <span> <BsCurrencyDollar/> Price: {course.price}</span>
                            <span> <BsBook/> Credit: {course.credit}hr</span>
                        </div><br />
                        <button onClick={()=>handleSelect(course)} id='select_btn'>Select</button>
                    </div>
                    ))
                }
                  


                </div>
                <div className="cart_container">
                    <div className="cart">
                       <Cart selectCourse={selectCourse} totalCost={cost} remainder={remainding}></Cart>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;