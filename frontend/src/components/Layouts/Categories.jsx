import mobiles from '../../assets/images/Categories/phone.png';
import { Link } from 'react-router-dom';

const catNav = [
  {
    name: 'AgriTech',
    icon: mobiles,
  },
  {
    name: 'AgriClinic',
    icon: mobiles,
  },

  
  {
    name: 'About Us',
    icon: mobiles,
  },
  {
    name: 'ContactUs',
    icon: mobiles,
  },
  {
    name: 'way2agri',
    icon: mobiles,
  },
  {
    name: 'way2smartfarmer',
    icon: mobiles,
  },
  {
    name: 'AgriBusiness',
    icon: mobiles,
  },
];

const Categories = () => {
  return (
    <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
      <div className="flex items-center justify-between mt-4">
        {catNav.map((item, i) => (
          <Link
            to={`/products?category=${item.name}`}
            className="flex flex-col gap-1 items-center p-2 group"
            key={i}
          >
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
              {item.name}
            </span>
          </Link>
        ))}
        <Link 
        to={`/crops`}
        className="flex flex-col gap-1 items-center p-2 group"
      
        >
          <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={mobiles}
                alt='market_mitra'
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
             Market Mitra
            </span>
        </Link>
        <Link 
        to={`/knowledges`}
        className="flex flex-col gap-1 items-center p-2 group"
      
        >
          <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={mobiles}
                alt='market_mitra'
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
             Knowledge Center
            </span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
