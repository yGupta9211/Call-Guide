import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const contactInfo = {
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  email: 'email',
};

const ContactInformation = ({ contactDetail }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Update form here and its should be in {key1: value1, key2: value2};
  useEffect(() => {
    if (contactDetail && Object.keys(contactDetail).length > 0) {
      const extendedContactInfo = { ...contactInfo };

      // Object.keys(contactDetail).forEach((key) => {
      //   extendedContactInfo[key] = contactDetail[contactDetail[key]] ?? '...';
      // });

      // if (contactDetail?.customHeaders?.length) {
      //   contactDetail.customHeaders.forEach(({ text, headerValue }) => {
      //     extendedContactInfo[text] = headerValue; // Use the text as the key and headerValue as the lookup value
      //   });
      // }
      Object.keys(contactInfo).forEach((key) => {
        extendedContactInfo[key] = contactDetail[key] ?? '...';
      });

      if (contactDetail?.customHeaders?.length > 0) {
        contactDetail.customHeaders.forEach(({ text, headerValue }) => {
          extendedContactInfo[text] = headerValue;
        });
      }

      setFormData({ ...extendedContactInfo });
      console.log(extendedContactInfo);
      console.log(contactDetail);

    }
  }, [contactDetail]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const onSubmit = async () => {
      try {


        let formattedData = {};
        let customHeaders = [];

        Object.keys(formData).forEach((key) => {
          if (contactInfo[key]) {
            formattedData[key] = formData[key]; // Keep standard fields as-is
          } else {
            customHeaders.push({ text: key, headerValue: formData[key] }); // Extra fields go into customHeaders
          }
        });
        const payload = {
          ...formattedData,
          customHeaders, // Add extra fields here
        };
        const url = `https://unicampaign.consiliumapps.com/api/callguide/${contactDetail.id}`;
        // const url = `https://localhost:44335/api/callguide/${contactDetail.id}`;

        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            'tenant-id': `{contactDetail.tenantId},`,
            'tenant-id': `${contactDetail.tenantId}`
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          if (response.status == 401) {
            throw new Error(`Unauthorized Error : ${response.status} `)
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (data.result) {
          toast.success('Contact Information updated successfully!', {
            position: 'top-right',
            autoClose: 5000,
          });
        } else {
          toast.error(
            'Failed to update the contact information. Please try again.',
            {
              position: 'top-right',
              autoClose: 5000,
            }
          );
        }
      } catch (error) {
        console.error('Error creating callback:', error);
        toast.error(
          'An error occurred while updateding the contact information.',
          {
            position: 'top-right',
            autoClose: 5000,
          }
        );
      } finally {
        setIsLoading(false); // Set loading to false when the request is complete
      }
    };
    if (isLoading) {
      onSubmit();
    }
  }, [isLoading]);

  return (
    <Box>
      <Paper elevation={2} sx={{ margin: '1rem', borderRadius: '0.25rem' }}>
        <Box
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            minHeight: '2000px',
          }}
        >
          <Typography textAlign={'center'} variant='h5'>
            {'Customer Details'}
          </Typography>
          {formData &&
            Object.keys(formData).map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}
                key={item}
              >
                <Typography variant='subtitle2'>
                  {item.toUpperCase()}
                </Typography>
                {/* <Box
                  sx={{
                    fontSize: '1rem',
                    border: '0.5px solid',
                    borderColor: 'grey.300',
                    borderRadius: '0.25rem',
                    padding: '0.5rem',
                  }}
                >
                </Box> */}
                <TextField
                  variant='outlined'
                  fullWidth
                  name={item}
                  value={formData[item] ?? ''}
                  onChange={handleChange}
                />
              </Box>
            ))}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              type='submit'
              onClick={() => setIsLoading(true)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
      <ToastContainer />
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ContactInformation;
