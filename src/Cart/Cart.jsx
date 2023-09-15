
import './Cart.css'
const Cart = ({selectCourse}) => {
    console.log(selectCourse);
    return (
        <div>
            <p className='Remaining_hr'>Credit Hour Remaining hr </p>
            <hr />
            <p className='course_name'>Course Name</p>
            <ol className='course_name_list'>
               {
                 selectCourse.map(item =>(
                        <li>{item.coursename}</li>
                 )) 
               }
            </ol>
        </div>
    );
};

export default Cart;