import { Box, Button, Card, Typography } from '@mui/material';
import RightIcon from '@mui/icons-material/ChevronRight';

const outlinePitch = [
  {
    title: 'Value Pitch',
    description:
      '"Our product not only saves you time but also increases efficiency by 30%. Imagine having more time to focus on what really matters while we handle the rest."',
  },
  {
    title: 'Problem-Solution Pitch',
    description:
      '"Many businesses struggle with [specific problem]. We’ve developed a solution that eliminates this issue by [how the product solves it]."',
  },
  {
    title: 'Customer-Centric Pitch',
    description:
      '"We’re here to make your life easier. Based on what you’ve shared, our solution would reduce your workload significantly, allowing you to achieve more with less effort."',
  },
  {
    title: 'Efficiency Pitch',
    description:
      '"Time is one of your most valuable resources. Our product automates [specific process], so you can get more done in less time. Imagine what you could accomplish with those extra hours!"',
  },
  {
    title: 'Social Proof Pitch',
    description:
      '"We’re trusted by over [number] companies in your industry. In fact, [well-known company] recently used our product and reported a [percentage] increase in efficiency."',
  },
  {
    title: 'Competitive Advantage Pitch',
    description:
      '"Unlike our competitors, we offer [unique feature] that not only meets your current needs but also adapts as you grow. Stay ahead in a rapidly changing market with us."',
  },
  {
    title: 'Financial Pitch',
    description:
      '"Investing in our solution will not only pay for itself within [time period] but will also save you [amount of money] over time."',
  },
  {
    title: 'ROI Pitch',
    description:
      '"With our product, you’ll see a return on investment in [timeframe]. Our current clients have seen up to a [percentage] boost in [specific metric]."',
  },
  {
    title: 'Future Vision Pitch',
    description:
      '"Imagine where your business could be in a year with our solution. We’re here to help you reach your goals faster and more effectively."',
  },
  {
    title: 'Personalization Pitch',
    description:
      '"Every business is unique, which is why we tailor our solution to fit your specific needs. We’ll work with you to ensure our product aligns perfectly with your goals."',
  },
  {
    title: 'Pain Point Pitch',
    description:
      '"You’ve mentioned that [specific pain point] has been a challenge. Our product was designed specifically to eliminate that problem, so you can enjoy peace of mind."',
  },
  {
    title: 'Ease of Use Pitch',
    description:
      '"Our solution is designed to be intuitive and user-friendly. You don’t have to be a tech expert to get started; we make it easy for you to implement and benefit from immediately."',
  },
  {
    title: 'Partnership Pitch',
    description:
      '"We don’t see ourselves as just a vendor; we’re here to be a true partner. Our team will be there every step of the way to ensure you’re fully supported."',
  },
  {
    title: 'Innovation Pitch',
    description:
      '"Our product is at the forefront of innovation in this industry. We’re constantly updating and improving it to stay ahead of the curve."',
  },
  {
    title: 'Results-Oriented Pitch',
    description:
      '"Our solution is designed with one thing in mind: results. From day one, you’ll see measurable improvements in [specific area]."',
  },
];

const Outline = () => {
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
      {outlinePitch.map((item) => (
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

export default Outline;
