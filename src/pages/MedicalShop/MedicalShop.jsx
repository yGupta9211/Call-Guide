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
    "name": "Metro Health Pharmacy",
    "address": "123 Health Lane Metropolis CA 90210",
    "phone": "555-123-4567",
    "storeHours": {
      "monday": "8:00 AM - 10:00 PM",
      "tuesday": "8:00 AM - 10:00 PM",
      "wednesday": "8:00 AM - 10:00 PM",
      "thursday": "8:00 AM - 10:00 PM",
      "friday": "8:00 AM - 11:00 PM",
      "saturday": "9:00 AM - 9:00 PM",
      "sunday": "10:00 AM - 8:00 PM"
    },
    "pharmacistOnDuty": true,
    "emergencyServices": true,
    "licenseNumber": "CA-PHARM-12345",
    "servicesOffered": [ "Prescription Filling", "Vaccinations", "Health Screenings" ],
    "categories": [ "Pharmacy", "Medical Supplies", "Wellness Products" ]
  },
  {
    "name": "24/7 Care Drugstore",
    "address": "456 Medicine Blvd Health Valley TX 75001",
    "phone": "555-234-5678",
    "storeHours": {
      "monday": "Open 24 Hours",
      "tuesday": "Open 24 Hours",
      "wednesday": "Open 24 Hours",
      "thursday": "Open 24 Hours",
      "friday": "Open 24 Hours",
      "saturday": "Open 24 Hours",
      "sunday": "Open 24 Hours"
    },
    "pharmacistOnDuty": true,
    "emergencyServices": true,
    "licenseNumber": "TX-PHARM-67890",
    "servicesOffered": [ "Emergency Prescriptions", "Medical Equipment Rental", "Home Delivery" ],
    "categories": [ "24/7 Pharmacy", "Home Healthcare", "Diabetic Supplies" ]
  },
  {
    "name": "Community Wellness Pharmacy",
    "address": "789 Care Street Medi Town NY 10001",
    "phone": "555-345-6789",
    "storeHours": {
      "monday": "9:00 AM - 7:00 PM",
      "tuesday": "9:00 AM - 7:00 PM",
      "wednesday": "9:00 AM - 7:00 PM",
      "thursday": "9:00 AM - 8:00 PM",
      "friday": "9:00 AM - 8:00 PM",
      "saturday": "10:00 AM - 5:00 PM",
      "sunday": "Closed"
    },
    "pharmacistOnDuty": true,
    "emergencyServices": false,
    "licenseNumber": "NY-PHARM-54321",
    "servicesOffered": [ "Compounding", "Medication Therapy Management", "Immunizations" ],
    "categories": [ "Compounding Pharmacy", "Senior Care", "Pediatric Medicines" ]
  },
  {
    "name": "Sunrise Medical Supplies",
    "address": "321 Wellness Road Recovery City FL 33101",
    "phone": "555-456-7890",
    "storeHours": {
      "monday": "8:30 AM - 6:00 PM",
      "tuesday": "8:30 AM - 6:00 PM",
      "wednesday": "8:30 AM - 6:00 PM",
      "thursday": "8:30 AM - 6:00 PM",
      "friday": "8:30 AM - 6:00 PM",
      "saturday": "9:00 AM - 3:00 PM",
      "sunday": "Closed"
    },
    "pharmacistOnDuty": false,
    "emergencyServices": false,
    "licenseNumber": "FL-MED-98765",
    "servicesOffered": [ "Medical Equipment Sales", "Home Delivery", "Product Demonstrations" ],
    "categories": [ "Mobility Aids", "Home Care Equipment", "Orthopedic Supplies" ]
  }
];

const MedicalShopForm = ({ shop, index, shops, setShops }) => {
  const [formData, setFormData] = useState({
    name: shop.name,
    // street: shop.address.street,
    // city: shop.address.city,
    // state: shop.address.state,
    // zipCode: shop.address.zipCode,
    address: shop.address,
    phone: shop.phone,
    // servicesOffered: shop?.servicesOffered?.join(', '),
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
      // address: {
      //   street: formData.street,
      //   city: formData.city,
      //   state: formData.state,
      //   zipCode: formData.zipCode,
      // },
      address: formData.address,
      phone: formData.phone,
      // servicesOffered: formData.servicesOffered
      //   .split(', ')
      //   .map((s) => s.trim()),
    };
    setShops(updatedShops);
    toast.success('Medical Shop updated successfully!', {
      position: 'top-right',
      autoClose: 5000,
    });
    setIsLoading(false);
  };

  return (
    <Paper sx={{ padding: '2rem', margin: '1rem', width: '100%' }} elevation={2}>
      <Typography variant='h5' gutterBottom>
        {shop.name}
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
        {/* <TextField
          label='Services Offered (comma-separated)'
          fullWidth
          required
          name='servicesOffered'
          value={formData.servicesOffered}
          onChange={handleChange}
          sx={{ mt: 2 }}
        /> */}
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
  console.log('Medical Dynamic Data:', dynamicData)
  const [shops, setShops] = useState(dynamicData ?? initialMedicalShops);
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
