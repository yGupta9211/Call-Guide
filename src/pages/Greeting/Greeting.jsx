import { Box, Card, Typography } from '@mui/material';

const greetings = [
  {
    title: 'Friendly and Professional Greeting',
    description:
      '"Hello, thank you for calling [Company Name]. My name is [Agent\'s Name]. How can I assist you today?"',
  },
  {
    title: 'Empathetic Greeting',
    description:
      '"Good [morning/afternoon/evening]! Thank you for calling [Company Name]. I’m here to help you with anything you need. What can I assist you with today?"',
  },
  {
    title: 'Personalized Greeting with Agent’s Name',
    description:
      '"Thank you for calling [Company Name]. This is [Agent\'s Name]. May I have your name, please, so I can better assist you?"',
  },
  {
    title: 'Acknowledgment of Customer’s Time',
    description:
      '"Thank you for reaching out to us today. I appreciate your time, and I’m here to make this as easy as possible for you. How can I help?"',
  },
  {
    title: 'Warm Welcome with Customer’s Name',
    description:
      '"Hello, [Customer’s Name]! Thank you for contacting [Company Name]. I’m here to help. How can I assist you today?"',
  },
  {
    title: 'Quick and Efficient Greeting',
    description:
      '"Hello! You’ve reached [Company Name]. My name is [Agent’s Name], and I’ll be assisting you today. What can I help you with?"',
  },
  {
    title: 'Inquiry About Previous Issues (for returning customers)',
    description:
      '"Welcome back to [Company Name]. This is [Agent’s Name]. I noticed you contacted us recently—may I ask if this is regarding that previous issue, or is there something new I can help you with?"',
  },
  {
    title: 'Friendly and Open-Ended Greeting',
    description:
      '"Hello and thank you for calling [Company Name]! My name is [Agent\'s Name]. What can I do to make your day easier?"',
  },
  {
    title: 'Appreciative Greeting with Offer to Help',
    description:
      '"Hi, thank you for choosing [Company Name]. I’m [Agent’s Name], and I’m here to help you with anything you need today. How can I assist?"',
  },
  {
    title: 'Calm and Reassuring Greeting',
    description:
      '"Hello, and welcome to [Company Name]. My name is [Agent\'s Name]. No matter what you need, I’m here to assist you. How can I help?"',
  },
  {
    title: 'Greeting Acknowledging Customer’s Potential Needs',
    description:
      '"Hi there! Thank you for reaching out to [Company Name]. I’m [Agent’s Name], and I’m here to make sure you get exactly what you need today. What can I assist you with?"',
  },
  {
    title: 'Warm and Positive Greeting',
    description:
      '"Hello! You’ve reached [Company Name]. This is [Agent\'s Name]. I hope you’re having a good day. How can I help make it even better?"',
  },
];

const Greeting = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '1rem',
        justifyContent: 'center',
      }}
    >
      {greetings.map((item) => (
        <Card
          key={item.title}
          sx={{
            width: '30%',
            padding: '1.5rem',
            border: '1px solid',
            borderColor: 'grey.300',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Box>
            <Typography variant='h6' color='primary'>
              {item.title}
            </Typography>
          </Box>
          <Box sx={{ flex: '1' }}>
            <Typography color='textPrimary' variant='body2'>
              {item.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Greeting;
