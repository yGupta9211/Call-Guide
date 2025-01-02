import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
  Contacts as ContactsIcon,
  Description as ScriptIcon,
  PhoneCallback as PhoneCallbackIcon,
  FormatAlignJustify as QueuestionIcon,
} from '@mui/icons-material';

import './fonts/fonts.css';
import ContactInformation from './pages/ContactInformation/ContactInformation';
import AgentScript from './pages/AgentScript/AgentScript';
import Callback from './pages/Callback/Callback';
import Questions from './pages/Questions/Questions';

import fav from '../src/assets/fav.png';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  typography: {
    fontFamily: 'CiscoSansTTRegular',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const COMPONENTS = {
  'contact-information': ContactInformation,
  'agent-script': AgentScript, // Dynamically use this for callGuide items
  callback: Callback,
  questions: Questions,
};

function PageContent({ pathname, contactDetail, callGuide, questions }) {
  const selectedGuide = callGuide.find(
    (guide) => guide.heading.toLowerCase().replace(/\s+/g, '-') === pathname
  );

  if (!selectedGuide && pathname === 'contact-information') {
    return <ContactInformation contactDetail={contactDetail} />;
  }

  if (!selectedGuide && pathname === 'callback') {
    return <Callback />;
  }

  if (!selectedGuide && pathname === 'questions') {
    return <Questions questions={questions} />;
  }

  if (!selectedGuide) {
    return <div>No matching content found for the current navigation.</div>;
  }

  return <AgentScript guide={selectedGuide} />;
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  contactDetail: PropTypes.object,
  callGuide: PropTypes.array.isRequired,
};

function App(props) {
  const { window, agentId } = props;
  const [contactDetail, setContactDetail] = useState(null);
  const [callGuide, setCallGuide] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useDemoRouter('/contact-information');

  useEffect(() => {
    const fetchData = async () => {
      const id = agentId ?? 'a8cf2161-cba6-4e40-a572-377e13be4a4a';
      const url = `https://unicampaign.consiliumapps.com/api/callguide/getcallguidedetails/${id}`;
      

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            accept: '*/*',
            'tenant-id': tenantId,
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContactDetail(data.result.contactDetail);
        setCallGuide(data.result.callGuide || []);
        setQuestions(data.result.questions || []);

        const fixedNavigationTop = [
          {
            segment: 'contact-information',
            title: 'Contact Information',
            icon: <ContactsIcon />,
          },
        ];

        let dynamicNavigation = [];
        if (data && data.result && Array.isArray(data.result.callGuide)) {
          dynamicNavigation = data.result.callGuide.map((guide) => ({
            segment: guide.heading.toLowerCase().replace(/\s+/g, '-'),
            title: guide.heading,
            icon: <ScriptIcon />,
          }));
        }

        let fixedNavigationBottom = [];

        if (
          Array.isArray(data.result.questions) &&
          data.result.questions.length > 0
        ) {
          fixedNavigationBottom.push({
            segment: 'questions',
            title: 'Questions',
            icon: <QueuestionIcon />,
          });
        }

        fixedNavigationBottom.push({
          segment: 'callback',
          title: 'Callback',
          icon: <PhoneCallbackIcon />,
        });

        setNavigation([
          ...fixedNavigationTop,
          ...dynamicNavigation,
          ...fixedNavigationBottom,
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [agentId]);

  if (loading) return <div>Loading...</div>;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppProvider
        navigation={navigation}
        router={router}
        theme={theme}
        window={demoWindow}
        branding={{ title: 'CallGuide', logo: <img src={fav} alt='Logo' /> }}
      >
        <DashboardLayout>
          <PageContent
            pathname={router.pathname.split('/').pop()}
            contactDetail={contactDetail}
            callGuide={callGuide}
            questions={questions}
          />
        </DashboardLayout>
      </AppProvider>
    </LocalizationProvider>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
