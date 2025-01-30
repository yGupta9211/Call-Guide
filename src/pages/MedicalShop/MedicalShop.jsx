import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  Paper,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialMedicalShops = [
  {
    name: 'Metro Health Pharmacy',
    address: {
      street: '123 Health Lane',
      city: 'Metropolis',
      state: 'CA',
      zipCode: '90210',
    },
    phone: '555-123-4567',
    servicesOffered: [
      'Prescription Filling',
      'Vaccinations',
      'Health Screenings',
    ],
  },
  {
    name: '24/7 Care Drugstore',
    address: {
      street: '456 Medicine Blvd',
      city: 'Health Valley',
      state: 'TX',
      zipCode: '75001',
    },
    phone: '555-234-5678',
    servicesOffered: [
      'Emergency Prescriptions',
      'Medical Equipment Rental',
      'Home Delivery',
    ],
  },
];

const MedicalShopForm = ({ shop, index, shops, setShops }) => {
  const [formData, setFormData] = useState({
    name: shop.name,
    street: shop.address.street,
    city: shop.address.city,
    state: shop.address.state,
    zipCode: shop.address.zipCode,
    phone: shop.phone,
    servicesOffered: shop.servicesOffered.join(', '),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedShops = [...shops];
    updatedShops[index] = {
      name: formData.name,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      phone: formData.phone,
      servicesOffered: formData.servicesOffered
        .split(', ')
        .map((s) => s.trim()),
    };
    setShops(updatedShops);
    toast.success('Medical Shop updated successfully!', {
      position: 'top-right',
      autoClose: 5000,
    });
    setIsLoading(false);
  };

  return (
    <Paper sx={{ padding: '2rem', margin: '1rem', width: '50%' }} elevation={2}>
      <Typography variant='h5' gutterBottom>
        Update Medical Shop: {shop.name}
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ mt: 3, width: '100%' }}
      >
        <TextField
          label='Shop Name'
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
        <TextField
          label='Services Offered (comma-separated)'
          fullWidth
          required
          name='servicesOffered'
          value={formData.servicesOffered}
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
            Update Shop
          </Button>
        )}
      </Box>
    </Paper>
  );
};

const App = () => {
  const [shops, setShops] = useState(initialMedicalShops);
  return (
    <div>
      {shops.map((shop, index) => (
        <MedicalShopForm
          key={index}
          shop={shop}
          index={index}
          shops={shops}
          setShops={setShops}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default App;
