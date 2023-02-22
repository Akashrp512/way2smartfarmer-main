import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { NEW_CROP_RESET, NEW_PRODUCT_RESET } from '../../constants/productConstants';
import { clearErrors,  } from '../../actions/productAction';
import { createCrop } from '../../actions/cropAction';

import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

const MarketMitra = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newCrop);



  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);








  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages) => [...oldImages, reader.result]);
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const newProductSubmitHandler = (e) => {
    e.preventDefault();

    // required field checks
  

 
    if (images.length <= 0) {
      enqueueSnackbar('Add Product Images', { variant: 'warning' });
      return;
    }

    const formData = new FormData();

    formData.set('name', name);
    formData.set('description', description);
   

    images.forEach((image) => {
      formData.append('images', image);
    });


     dispatch(createCrop(formData));
    
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar('Product Created', { variant: 'success' });
      dispatch({ type: NEW_CROP_RESET });
      navigate('/admin/products');
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New Crop | way2smartfarmer" />

      {loading && <BackdropLoader />}
      <form
        onSubmit={newProductSubmitHandler}
        encType="multipart/form-data"
        className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4"
        id="mainform"
      >
        
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
        <h2 className="font-medium">Crop Details</h2>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 m-2 sm:w-1/2">
          <h2 className="font-medium">Crop Images</h2>
          <div className="flex gap-2 overflow-x-auto h-32 border rounded">
            {imagesPreview.map((image, i) => (
              <img
                draggable="false"
                src={image}
                alt="Product"
                key={i}
                className="w-full h-full object-contain"
              />
            ))}
          </div>
          <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white p-2 shadow hover:shadow-lg my-2">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleProductImageChange}
              className="hidden"
            />
            Choose Files
          </label>

          <div className="flex justify-end">
            <input
              form="mainform"
              type="submit"
              className="bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default MarketMitra;
