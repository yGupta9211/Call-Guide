import { Box, Card, Typography } from '@mui/material';

const salesClosingPitches = [
  {
    title: 'Direct Close',
    description:
      '"So, would you like to proceed with this option?" \n"If you’re ready, I can send over the agreement for you to review and sign."',
  },
  {
    title: 'Assumptive Close',
    description:
      '"When would you like to start?" \n"It seems like this is a great fit for you. I’ll get the paperwork ready."',
  },
  {
    title: 'Summary Close',
    description:
      '"Just to summarize, with this option, you’ll get [list key benefits]. Are you ready to move forward?"',
  },
  {
    title: 'Urgency Close',
    description:
      '"There’s a limited-time discount that expires soon. Shall we take advantage of it now?"',
  },
  {
    title: 'Value Close',
    description:
      '"Considering everything this package offers, it’s a tremendous value. Shall we finalize it today?"',
  },
  {
    title: 'Alternative Close',
    description: '"Would you prefer the standard package or the premium one?"',
  },
  {
    title: 'Benefit Close',
    description:
      '"This will help you [solve a problem]. Ready to get it set up for you?"',
  },
  {
    title: 'Feel-Felt-Found Close',
    description:
      '"I understand how you feel. Others felt the same but found this beneficial. Shall we try it?"',
  },
  {
    title: 'Objection Close',
    description: '"Is there anything holding you back from moving forward?"',
  },
  {
    title: 'Incentive Close',
    description:
      '"If you sign today, I can offer [discount]. Ready to proceed?"',
  },
  {
    title: 'Testimonial Close',
    description:
      '"Our clients have seen great results. Would you like to be our next success story?"',
  },
  {
    title: 'Opportunity Cost Close',
    description:
      '"Waiting might cost more later. Would you like to proceed now?"',
  },
  {
    title: 'Now or Never Close',
    description:
      '"This offer is limited-time. If you’re interested, let’s act now."',
  },
  {
    title: 'Give and Take Close',
    description:
      '"If I offer an additional bonus, would you be ready to move forward today?"',
  },
  {
    title: 'Question Close',
    description: '"Do you feel that this solution meets your needs?"',
  },
  {
    title: 'Scale Close',
    description:
      '"On a scale of 1-10, how ready are you? What would make it a 10?"',
  },
  {
    title: 'Time to Make a Change Close',
    description: '"You’ve faced challenges; isn’t it time for a change?"',
  },
  {
    title: 'Future Pacing Close',
    description: '"Where do you see yourself in a few months if we start now?"',
  },
  {
    title: 'Consultative Close',
    description:
      '"I believe this will benefit you. Are you ready to take the next step?"',
  },
  {
    title: 'Soft Close',
    description:
      '"Take your time, but I’d love to hear if you’d like to proceed."',
  },
];

const Closing = () => {
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
      {salesClosingPitches.map((item) => (
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
            <Typography variant='h6' color='primary' sx={{ maxLines: '2' }}>
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

export default Closing;
