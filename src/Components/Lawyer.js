import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Rating from '@mui/material/Rating';
import { createAvatar } from '@dicebear/core';
import { openPeeps } from '@dicebear/collection';
import Navbar2 from './Navbar3';

const LawyersPage = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [contactInfo, setContactInfo] = useState({});

  const states = ['Assam', 'Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Odisha', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'];
  const expertises =["Civil Lawyer", "Criminal Lawyer","Family Lawyer","Corporate Lawyer","Property Lawyer","Labor and Employment Lawyer"]
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setLawyers([]);
  };

  const handleExpertiseChange = (event) => {
    setSelectedExpertise(event.target.value);
    setLawyers([]);
  };

  const handleSubmit = () => {
    // Perform filtering logic based on selectedState and selectedExpertise
    // For simplicity, let's assume the filtering logic here
    const filteredLawyers = lawyers.filter((lawyer) => {
      return (
        (!selectedState || lawyer.state === selectedState) &&
        (!selectedExpertise || lawyer.expertise === selectedExpertise)
      );
    });
    setLawyers(filteredLawyers);
  };

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get('http://localhost:5500/lawyers');
        setLawyers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLawyers();
  }, [selectedState, selectedExpertise]);

  const generateAvatar = (name) => {
    const seed = name;
    return createAvatar(openPeeps, {
      seed,
      size: 128,
    }).toDataUriSync();
  };
  const handleContactClick = (lawyerId) => {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [lawyerId]: !prevInfo[lawyerId], // Toggle the state for the specific lawyer
    }));
  };

  return (
    <div>
      <Navbar2/>
      <div className='dropbox' style={{ 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
  padding: '20px', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  margin: 'auto',
  marginTop:'2rem',
  backgroundColor:'aliceblue',
  width: '600px' // Optional: Set a maximum width
}}>
  <h3>Filter options for easy access</h3>
 <FormControl sx={{ m: 1, minWidth: 500 }}> {/* Increase minWidth to 200 */}
  <InputLabel id="state-label">State</InputLabel>
  <Select
    labelId="state-label"
    id="state-select"
    value={selectedState}
    onChange={handleStateChange}
  >
    <MenuItem value="">All</MenuItem>
    {states.map((state) => (
      <MenuItem key={state} value={state}>{state}</MenuItem>
    ))}
  </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 500 }}> {/* Increase minWidth to 200 */}
  <InputLabel id="expertise-label">Expertise</InputLabel>
  <Select
    labelId="expertise-label"
    id="expertise-select"
    value={selectedExpertise}
    onChange={handleExpertiseChange}
  >
    <MenuItem value="">All</MenuItem>
    {expertises.map((expertise) => (
      <MenuItem key={expertise} value={expertise}>{expertise}</MenuItem>
    ))}
  </Select>
</FormControl>

  <Button sx={{minWidth:500,marginTop:'1rem'}} variant="contained" onClick={handleSubmit}>Submit</Button>
</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin:'50px',flexDirection:'column',marginLeft:'110px',marginTop:'5rem' }}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {lawyers.map((lawyer) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={lawyer.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent style={{justifyContent:'center'}}>
                    <img src={generateAvatar(lawyer.name)} alt="Avatar" />
                    <Typography variant="h5" component="div">
                      {lawyer.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {lawyer.state}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {lawyer.expertise}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      <Rating name="read-only" value={lawyer.rating} readOnly />
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      <Button variant="outlined" color='success' onClick={() => handleContactClick(lawyer.id)}>
                        {contactInfo[lawyer.id] ? 'Hide Contact Info' : 'Show Contact Info'}
                      </Button>                   
                    </Typography>
                    {contactInfo[lawyer.id] && (
                      <>
                        <Typography color="text.secondary" gutterBottom>
                          Mobile: {lawyer.mobile}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          Email: {lawyer.email}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default LawyersPage;
