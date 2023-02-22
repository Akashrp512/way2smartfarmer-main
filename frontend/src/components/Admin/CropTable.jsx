import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {
  clearErrors,

} from '../../actions/productAction';
import Rating from '@mui/material/Rating';
import { DELETE_CROP_RESET,} from '../../constants/productConstants';
import Actions from './Actions';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { deleteCrop, getAdminCrops } from '../../actions/cropAction';

const CropTable = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { crops, error } = useSelector((state) => state.crops);
  const {
    loading,
    isDeleted,
    error: deleteError,
  } = useSelector((state) => state.crop);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (deleteError) {
      enqueueSnackbar(deleteError, { variant: 'error' });
      dispatch(clearErrors());
    }
    if (isDeleted) {
      enqueueSnackbar('Crop Deleted Successfully', { variant: 'success' });
      dispatch({ type: DELETE_CROP_RESET });
    }
    dispatch(getAdminCrops());
  }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  const deleteProductHandler = (id) => {
    dispatch(deleteCrop(id));
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Crop ID',
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                draggable="false"
                src={params.row.image}
                alt={params.row.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {params.row.name}
          </div>
        );
      },
    },
   
  ];

  const rows = [];

  crops &&
    crops.forEach((item) => {
      rows.unshift({
        id: item._id,
        name: item.name,
        image: item.images[0].url,
       
      });
    });

  return (
    <>
      <MetaData title="Admin Crops | Way2smartfarmer" />

      {loading && <BackdropLoader />}

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase">Crops</h1>
        <Link
          to="/admin/market_mitra"
          className="py-2 px-4 rounded shadow font-medium text-white bg-primary-blue hover:shadow-lg"
        >
          New Crop
        </Link>
      </div>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 470 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </>
  );
};

export default CropTable;
