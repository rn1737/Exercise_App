import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';  // Update the import statement

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    component="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      ...(bodyPart === item
        ? {
            borderTop: '4px solid #FF2625',
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
          }
        : {
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '282px',
            cursor: 'pointer',
            gap: '47px',
          }),
    }}
    onClick={() => {
      setBodyPart(item);
      // Use a more reliable way to scroll to a specific section
      const sectionElement = document.getElementById('your-section-id'); // Replace 'your-section-id' with the actual ID of the target section
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <img src={Icon} alt={`Icon for ${item}`} style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
); 

export default BodyPart;
