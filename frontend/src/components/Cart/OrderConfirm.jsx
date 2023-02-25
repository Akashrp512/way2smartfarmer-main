import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
import { useNavigate } from 'react-router-dom';
import MetaData from '../Layouts/MetaData';
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);



  const handleClick = () => {
    window.location.replace(`http://wa.me/919449004956?text=${user.email}+${user.name}`);
  };

  return (
    <>
      <MetaData title="Way2SmartFarmer: Order Confirmation" />

      <main className="w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <Stepper activeStep={2}>
              <div className="w-full bg-white">
                {cartItems?.map((item, i) => (
                  <CartItem {...item} inCart={false} key={i} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 bg-white px-6 py-3 rounded-b-sm">
                <p className="text-sm">
                  Order confirmation email will be sent to{' '}
                  <span className="font-medium">{user.email}</span>
                </p>
                <button
                  onClick={() => {
                    navigate('/shipping');
                  }}
                  className="bg-primary-orange px-6 py-2 text-white font-medium rounded-sm shadow hover:shadow-lg uppercase"
                >
                  continue
                </button>
   
                <button onClick={handleClick }      className="bg-primary-green px-6 py-2 text-white font-medium rounded-sm shadow hover:shadow-lg uppercase">Whatsapp</button>
                
              </div>
            </Stepper>
          </div>

          <PriceSidebar cartItems={cartItems} />
        </div>
      </main>
    </>
  );
};

export default OrderConfirm;
