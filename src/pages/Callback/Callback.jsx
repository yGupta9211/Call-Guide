import { useState } from 'react';
import { Paper, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import { DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Callback = (props) => {
  // console.log(props);
  const [formData, setFormData] = useState({
    tenantId: props.contactDetail.tenantId,
    recordId: props.contactDetail.id,
    firstName: props.contactDetail.firstName,
    lastName: props.contactDetail.lastName,
    email: props.contactDetail.email == null ? '' : props.contactDetail.email,
    phoneNumber: props.contactDetail.phoneNumber,
    callbackDate: null,
    callbackTime: null,
  });
  const [isLoading, setIsLoading] = useState(false); // State to manage loading spinner

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form Data Submitted:', formData);
    try {
      const url = `https://unicampaign.consiliumapps.com/api/callback/createcallback`;
      // const url = `https://localhost:44335/api/callback/createcallback`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          "tenant-id": `{props.contactDetail.tenantId},`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      if (data.result) {
        toast.success('Callback created successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        toast.error('Failed to create the callback. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
        });
      }

    } catch (error) {
      console.error('Error creating callback:', error);
      toast.error('An error occurred while creating the callback.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false); // Set loading to false when the request is complete
    }

  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
      <Paper
        sx={{
          padding: '2rem',
          margin: '1rem',
          width: '50%',
          height: 'fit-content',
          minHeight: '1200px'
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
          <Typography variant='h5'>Appointment Schedule</Typography>
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
                name='email'
                value={formData.email}
                onChange={handleChange}
                type='email'
              />
              <TextField
                label='Phone Number'
                variant='outlined'
                fullWidth
                required
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                type='tel'
              />
              <DesktopDatePicker
                sx={{ width: '100%' }}
                label='Appointment Date'
                inputFormat='MM/dd/yyyy'
                value={formData.callbackDate}
                onChange={handleDateChange}
              />
              <TimePicker
                sx={{ width: '100%' }}
                label='Appointment Time'
                value={formData.callbackTime}
                onChange={handleTimeChange}
              />

              {/* <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Submit
              </Button> */}

              {/* Show Loader or Submit Button */}
              {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default Callback;
