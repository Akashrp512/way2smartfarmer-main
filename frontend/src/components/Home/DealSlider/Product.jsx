import { Link } from 'react-router-dom';

const Product = ({ image, name, offer, tag }) => {
    return (
        <Link to="/products" className="flex flex-col items-center gap-1.5 p-6 cursor-pointer cardhover">
            <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150 ease-out">
                <img draggable="false" className="w-full h-full object-contain" src={image} alt={name} />
            </div>
            <h2 className="font-medium text-sm mt-2 cardtitle">{name}</h2>
            <h3>{offer}</h3>
            <h3>{tag}</h3>
        </Link>
    );
};

export default Product;
