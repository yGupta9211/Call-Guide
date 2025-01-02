import { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import { DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';

const Callback = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    callbackDate: null,
    callbackTime: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, callbackDate: date }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevData) => ({ ...prevData, callbackTime: time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          padding: '2rem',
          margin: '1rem',
          width: '50%',
        }}
        elevation={2}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5'>Schedule a Callback</Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: '100%' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField
                label='First Name'
                variant='outlined'
                fullWidth
                required
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                label='Last Name'
                variant='outlined'
                fullWidth
                required
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                label='Email'
                variant='outlined'
                fullWidth
                required
                name='email'
                value={formData.email}
                onChange={handleChange}
                type='email'
              />
              <TextField
                label='Contact Number'
                variant='outlined'
                fullWidth
                required
                name='contactNumber'
                value={formData.contactNumber}
                onChange={handleChange}
                type='tel'
              />
              <DesktopDatePicker
                sx={{ width: '100%' }}
                label='Callback Date'
                inputFormat='MM/dd/yyyy'
                value={formData.callbackDate}
                onChange={handleDateChange}
              />
              <TimePicker
                sx={{ width: '100%' }}
                label='Callback Time'
                value={formData.callbackTime}
                onChange={handleTimeChange}
              />

              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Callback;
