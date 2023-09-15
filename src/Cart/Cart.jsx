
import './Cart.css'
const Cart = ({selectCourse, totalCost, remainder}) => {
    console.log(selectCourse);
    return (
        <div>
            <p className='Remaining'>Credit Hour Remaining {remainder} hr </p>
            <hr />
            <p className='course_name'>Course Name</p>
            <ol className='course_name_list'>
               {
                 selectCourse.map(item =>(
                        <li key={item.id}>{item.coursename}</li>
                 )) 
               }
            </ol>
            <hr />
            <p>Total Credit Hour : {totalCost}</p>
            <hr />
            <p>Total Price : 48000 USD</p>
        </div>
    );
};

export default Cart;