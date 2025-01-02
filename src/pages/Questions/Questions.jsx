import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';

const Questions = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Answers:', answers);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 700,
        margin: 'auto',
        mt: 4,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant='h5' gutterBottom align='center'>
        Answer the Questions
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        align='center'
        color='text.secondary'
      >
        Please select the most appropriate answer for each question.
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        {Array.isArray(questions) &&
          questions.map((question) => (
            <Box
              key={question.id}
              sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              <Typography variant='h6' sx={{ lineHeight: 1.5 }}>
                {question.questionText}
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={answers[question.id] || ''}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  displayEmpty
                  required
                  sx={{
                    borderRadius: 1,
                  }}
                >
                  <MenuItem disabled value=''>
                    Select an answer
                  </MenuItem>
                  {question.answers.map((answer, index) => (
                    <MenuItem value={answer.answerText} key={index}>
                      {answer.answerText}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ))}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          sx={{
            alignSelf: 'center',
            width: '50%',
          }}
        >
          Submit
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity='success'
          variant='filled'
        >
          Answers submitted successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Questions;
