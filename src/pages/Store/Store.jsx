import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialStores = [
  {
    name: 'Fresh Mart Grocery',
    address: {
      street: '123 Health Lane',
      city: 'Metropolis',
      state: 'CA',
      zipCode: '90210',
    },
    phone: '555-123-4567',
  },
  {
    name: 'Tech Haven Electronics',
    address: {
      street: '456 Circuit Road',
      city: 'Silicon Valley',
      state: 'CA',
      zipCode: '94025',
    },
    phone: '555-234-5678',
  },
  {
    name: 'Book Nook',
    address: {
      street: '789 Library Street',
      city: 'Literary Ville',
      state: 'NY',
      zipCode: '10001',
    },
    phone: '555-345-6789',
  },
  {
    name: 'Urban Style Clothing',
    address: {
      street: '321 Fashion Avenue',
      city: 'Trending City',
      state: 'TX',
      zipCode: '75001',
    },
    phone: '555-456-7890',
  },
  {
    name: 'Healthy Living Pharmacy',
    address: {
      street: '987 Wellness Blvd',
      city: 'Medi Town',
      state: 'FL',
      zipCode: '33101',
    },
    phone: '555-567-8901',
  },
];

const StoreForm = ({ store, index, stores, setStores }) => {
  const [formData, setFormData] = useState({
    name: store.name,
    street: store.address.street,
    city: store.address.city,
    state: store.address.state,
    zipCode: store.address.zipCode,
    phone: store.phone,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedStores = [...stores];
    updatedStores[index] = {
      name: formData.name,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      phone: formData.phone,
    };
    setStores(updatedStores);
    toast.success('Store updated successfully!', {
      position: 'top-right',
      autoClose: 5000,
    });
    setIsLoading(false);
  };

  return (
    <Paper sx={{ padding: '2rem', margin: '1rem', width: '50%' }} elevation={2}>
      <Typography variant='h5' gutterBottom>
        Update Store: {store.name}
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ mt: 3, width: '100%' }}
      >
        <TextField
          label='Store Name'
          fullWidth
          required
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label='Street Address'
          fullWidth
          required
          name='street'
          value={formData.street}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        <TextField
          label='City'
          fullWidth
          required
          name='city'
          value={formData.city}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        <TextField
          label='State'
          fullWidth
          required
          name='state'
          value={formData.state}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        <TextField
          label='Zip Code'
          fullWidth
          required
          name='zipCode'
          value={formData.zipCode}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        <TextField
          label='Phone Number'
          fullWidth
          required
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 2 }}
          >
            Update Store
          </Button>
        )}
      </Box>
    </Paper>
  );
};

const App = () => {
  const [stores, setStores] = useState(initialStores);
  return (
    <div>
      {stores.map((store, index) => (
        <StoreForm
          key={index}
          store={store}
          index={index}
          stores={stores}
          setStores={setStores}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default App;
