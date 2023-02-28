import { Link, useNavigate } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import ForestIcon from '@mui/icons-material/Forest';
import Avatar from '@mui/material/Avatar';
import Phone from '@mui/icons-material/Phone';
import GrassIcon from '@mui/icons-material/Grass';
import SchoolIcon from '@mui/icons-material/School';
import InsightsIcon from '@mui/icons-material/Insights';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';

const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: 'Dashboard',
    ref: '/admin/dashboard',
  },
  {
    icon: <ShoppingBagIcon />,
    label: 'Orders',
    ref: '/admin/orders',
  },
  {
    icon: <InventoryIcon />,
    label: 'Products',
    ref: '/admin/products',
  },
  {
    icon: <ForestIcon />,
    label: 'Crops',
    ref: '/admin/crops',
  },
  {
    icon: <AddBoxIcon />,
    label: 'Add Product',
    ref: '/admin/new_product',
  },
  {
    icon: <GroupIcon />,
    label: 'Users',
    ref: '/admin/users',
  },
  {
    icon: <ReviewsIcon />,
    label: 'Reviews',
    ref: '/admin/reviews',
  },
  {
    icon: <AccountBoxIcon />,
    label: 'My Profile',
    ref: '/account',
  },
  {
    icon: <GrassIcon />,
    label: 'Market Mitra',
    ref: '/admin/market_mitra',
  },
  {
    icon: <CompareArrowsIcon />,
    label: 'Comparision',
    ref: '/admin/market',
  },
  {
    icon: <InsightsIcon />,
    label: 'Insights',
    ref: '/admin/mitra',
  },
  {
    icon: <SchoolIcon />,
    label: 'Knowledge Center',
    ref: '/admin/knowledge_center',
  },
  {
    icon: <Phone />,
    label: 'Call Back', 
    ref: '/callback',
  },
  {
    icon: <LogoutIcon />,
    label: 'Logout',
  },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    enqueueSnackbar('Logout Successfully', { variant: 'success' });
    navigate('/login');
  };

  return (
    <aside className="sidebar z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-1/5 bg-gray-800 text-white overflow-x-hidden border-r">
      <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
        <Avatar alt="Avatar" src={user.avatar.url} />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-lg">{user.name}</span>
          <span className="text-gray-300 text-sm">{user.email}</span>
        </div>
        <button
          onClick={() => setToggleSidebar(false)}
          className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col w-full gap-0 my-8">
        {navMenu.map((item, index) => {
          const { icon, label, ref } = item;
          return (
            <>
              {label === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ) : (
                <Link
                  to={ref}
                  className={`${
                    activeTab === index ? 'bg-gray-700' : 'hover:bg-gray-700'
                  } flex gap-3 items-center py-3 px-4 font-medium`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              )}
            </>
          );
        })}
      </div>

      {/* <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
        <h5>Developed with by:</h5>
        <div className="flex flex-col gap-0">
          <a
            href="https://umaajay.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-lg hover:text-blue-500"
          >
            Uma Ajay Kumar Reddy P S
          </a>
          <a
            href="mailto:umaveena.alvas@gmail.com"
            className="text-gray-300 text-sm hover:text-blue-500"
          >
            umaveena.alvas@gmail.com
          </a>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
