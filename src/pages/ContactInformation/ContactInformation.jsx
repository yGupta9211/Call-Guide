import { Box, Paper, Typography } from '@mui/material';

const contactInfo = {
  msdin: 'phoneNumber',
  name: 'agentName',
  phoneNumber: 'phoneNumber',
  email: 'email',
};

const ContactInformation = ({ contactDetail }) => {
  return (
    <Paper elevation={2} sx={{ margin: '1rem', borderRadius: '0.25rem' }}>
      <Box
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography textAlign={'center'} variant='h5'>
          {'Customer Details'}
        </Typography>
        {contactDetail &&
          Object.keys(contactInfo).map((item) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
              key={item}
            >
              <Typography variant='subtitle2'>{item.toUpperCase()}</Typography>
              <Box
                sx={{
                  fontSize: '1rem',
                  border: '0.5px solid',
                  borderColor: 'grey.300',
                  borderRadius: '0.25rem',
                  padding: '0.5rem',
                }}
              >
                {contactDetail[contactInfo[item]] ?? '...'}
              </Box>
            </Box>
          ))}
      </Box>
    </Paper>
  );
};

export default ContactInformation;
