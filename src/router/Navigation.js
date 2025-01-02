import {
  BarChart as BarChartIcon,
  Contacts as ContactsIcon,
  Description as ScriptIcon,
  Assignment as AssignmentIcon,
  Edit as EditIcon,
  PhoneInTalk as PhoneInTalkIcon,
} from '@mui/icons-material';

const NAVIGATION = [
  {
    segment: 'contact-information',
    title: 'Contact Information',
    icon: <ContactsIcon />,
  },
  {
    segment: 'agent-script',
    title: 'Agent Script',
    icon: <ScriptIcon />,
  },
  {
    segment: 'outline',
    title: 'Outline',
    icon: <AssignmentIcon />,
  },
  {
    segment: 'greeting',
    title: 'Greeting',
    icon: <EditIcon />,
  },
  {
    segment: 'pitch',
    title: 'Pitch',
    icon: <BarChartIcon />,
  },
  {
    segment: 'closing',
    title: 'Closing',
    icon: <PhoneInTalkIcon />,
  },
  {
    segment: 'callback',
    title: 'Callback',
    icon: <PhoneInTalkIcon />,
  },
];

export default NAVIGATION;
