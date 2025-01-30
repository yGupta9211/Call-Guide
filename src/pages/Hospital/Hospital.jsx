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

const initialHospitals = [
  {
    "name": "City General Hospital",
    "address": "123 Health Lane , Metropolis, CA 90210",
    "phone": "555-123-4567",
    "specialties": [ "Emergency Care", "Cardiology", "Pediatrics" ],
    "departments": [
      {
        "departmentName": "Emergency Room",
        "numberOfStaff": 45
      },
      {
        "departmentName": "Surgery",
        "numberOfStaff": 30
      }
    ],
    "emergencyServices": true,
    "foundingYear": 1985
  },
  {
    "name": "Green Valley Medical Center",
    "address": "456 Green Valley TX 75001",
    "phone": "555-987-6543",
    "specialties": [ "Oncology", "Neurology" ],
    "departments": [
      {
        "departmentName": "Cancer Center",
        "numberOfStaff": 25
      },
      {
        "departmentName": "Neurology Unit",
        "numberOfStaff": 20
      }
    ],
    "emergencyServices": false,
    "foundingYear": 2000
  }
];

const HospitalForm = ({ hospital, index, hospitals, setHospitals }) => {
  const [formData, setFormData] = useState({
    name: hospital.name,
    address: hospital.address,
    // street: hospital.address.street,
    // city: hospital.address.city,
    // state: hospital.address.state,
    // zipCode: hospital.address.zipCode,
    phone: hospital.phone,
    specialties: hospital.specialties.join(', '),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedHospitals = [...hospitals];
    updatedHospitals[index] = {
      name: formData.name,
      address: formData.address,
      // address: {
      //   street: formData.street,
      //   city: formData.city,
      //   state: formData.state,
      //   zipCode: formData.zipCode,
      // },
      phone: formData.phone,
      specialties: formData.specialties.split(', ').map((s) => s.trim()),
    };
    setHospitals(updatedHospitals);
    toast.success('Hospital updated successfully!', {
      position: 'top-right',
      autoClose: 5000,
    });
    setIsLoading(false);
  };

  return (
    <Paper sx={{ padding: '2rem', margin: '1rem', width: '100%' }} elevation={2}>
      <Typography variant='h5' gutterBottom>
        {hospital.name}
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ mt: 3, width: '100%' }}
      >
        <TextField
          label='Hospital Name'
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
        <TextField
          label='Specialties (comma-separated)'
          fullWidth
          required
          name='specialties'
          value={formData.specialties}
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
  console.log('Hospital Data:', dynamicData);
  const [hospitals, setHospitals] = useState(dynamicData ?? initialHospitals);
  return (
    <div>
      {hospitals.map((hospital, index) => (
        <HospitalForm
          key={index}
          hospital={hospital}
          index={index}
          hospitals={hospitals}
          setHospitals={setHospitals}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default App;
