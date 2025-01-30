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
    "name": "Fresh Mart Grocery",
    "address": "123 Health Lane Metropolis CA 90210",
    "phone": "555-123-4567",
    "storeHours": {
      "monday": "7:00 AM - 10:00 PM",
      "tuesday": "7:00 AM - 10:00 PM",
      "wednesday": "7:00 AM - 10:00 PM",
      "thursday": "7:00 AM - 10:00 PM",
      "friday": "7:00 AM - 11:00 PM",
      "saturday": "8:00 AM - 11:00 PM",
      "sunday": "8:00 AM - 9:00 PM"
    },
    "categories": [ "Groceries", "Bakery", "Deli" ]
  },
  {
    "name": "Tech Haven Electronics",
    "address": "456 Circuit Road Silicon Valley CA 94025",
    "phone": "555-234-5678",
    "storeHours": {
      "monday": "10:00 AM - 8:00 PM",
      "tuesday": "10:00 AM - 8:00 PM",
      "wednesday": "10:00 AM - 8:00 PM",
      "thursday": "10:00 AM - 8:00 PM",
      "friday": "10:00 AM - 9:00 PM",
      "saturday": "11:00 AM - 7:00 PM",
      "sunday": "Closed"
    },
    "categories": [ "Electronics", "Computers", "Gadgets" ]
  },
  {
    "name": "Book Nook",
    "address": "789 Library Street Literary Ville NY 10001",
    "phone": "555-345-6789",
    "storeHours": {
      "monday": "9:00 AM - 7:00 PM",
      "tuesday": "9:00 AM - 7:00 PM",
      "wednesday": "9:00 AM - 7:00 PM",
      "thursday": "9:00 AM - 8:00 PM",
      "friday": "9:00 AM - 8:00 PM",
      "saturday": "10:00 AM - 6:00 PM",
      "sunday": "11:00 AM - 5:00 PM"
    },
    "categories": [ "Books", "Stationery", "Coffee Shop" ]
  },
  {
    "name": "Urban Style Clothing",
    "address": "321 Fashion Avenue Trending City TX 75001",
    "phone": "555-456-7890",
    "storeHours": {
      "monday": "11:00 AM - 8:00 PM",
      "tuesday": "11:00 AM - 8:00 PM",
      "wednesday": "11:00 AM - 8:00 PM",
      "thursday": "11:00 AM - 9:00 PM",
      "friday": "11:00 AM - 9:00 PM",
      "saturday": "10:00 AM - 7:00 PM",
      "sunday": "12:00 PM - 6:00 PM"
    },
    "categories": [ "Men's Fashion", "Women's Fashion", "Accessories" ]
  },
  {
    "name": "Healthy Living Pharmacy",
    "address": "987 Wellness Blvd Medi Town FL 33101",
    "phone": "555-567-8901",
    "storeHours": {
      "monday": "8:00 AM - 8:00 PM",
      "tuesday": "8:00 AM - 8:00 PM",
      "wednesday": "8:00 AM - 8:00 PM",
      "thursday": "8:00 AM - 8:00 PM",
      "friday": "8:00 AM - 8:00 PM",
      "saturday": "9:00 AM - 6:00 PM",
      "sunday": "10:00 AM - 4:00 PM"
    },
    "categories": [ "Pharmacy", "Health Products", "Vitamins" ]
  }
];

const StoreForm = ({ store, index, stores, setStores }) => {
  const [formData, setFormData] = useState({
    name: store.name,
    address: store.address,
    // street: store.address.street,
    // city: store.address.city,
    // state: store.address.state,
    // zipCode: store.address.zipCode,
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
      address: formData.address,
      // address: {
      //   street: formData.street,
      //   city: formData.city,
      //   state: formData.state,
      //   zipCode: formData.zipCode,
      // },
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
    <Paper sx={{ padding: '2rem', margin: '1rem', width: '100%' }} elevation={2}>
      <Typography variant='h5' gutterBottom>
        {store.name}
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
          label='Address'
          fullWidth
          required
          name='address'
          value={formData.address}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
        {/* <TextField
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
        /> */}
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
            Transfer
          </Button>
        )}
      </Box>
    </Paper>
  );
};

const App = ({dynamicData}) => {
  const [stores, setStores] = useState(dynamicData ?? initialStores);
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
