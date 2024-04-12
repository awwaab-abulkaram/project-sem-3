import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Navbar2 from './Navbar3';

const Contact = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [clientsData, setClientsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t, i18n } = useTranslation();  // Use useTranslation hook

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5500/cards');
                setClientsData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = async (client) => {
        try {
            const language = i18n.language; // Access current language from i18n
            const pdfUrl = await fetchPdfUrl(client.name, language);
            if (pdfUrl) {
                window.open(`http://localhost:5500/articles/${pdfUrl}`, '_blank');
            } else {
                console.error('PDF URL not found');
            }
        } catch (error) {
            console.error('Error fetching PDF URL:', error);
        }
    };

    const fetchPdfUrl = async (cardName, language) => {
        try {
            const response = await axios.get(`http://localhost:5500/get-pdf/${cardName}/${language}`);
            return response.data.url;
        } catch (error) {
            console.error('Error fetching PDF URL:', error);
            return null;
        }
    };

    const filterClientsByTag = (client) => {
        return client.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    };

    return (
        <div>
            <Navbar2/>
            <TextField
                type="text"
                placeholder="Search tags"
                value={searchTerm}
                onChange={handleSearch}
                sx={{ margin: '16px', width: 'calc(100% - 32px)' }} // Add margin bottom
                variant='outlined'
            />
            <TableContainer sx={{ margin: 'auto', maxWidth: '95%', border: '2px solid black' }}>
                <Table sx={{ borderCollapse: 'collapse' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'sx={{ border: '2px solid black' }}><h2>{t('cardNames.Name')}</h2></TableCell>
                            <TableCell align='center'sx={{ border: '2px solid black' }}><h2>{t('Domains.Domain')}</h2></TableCell>
                            <TableCell align='center'sx={{ border: '2px solid black' }}><h2>PDF Link</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan="3">Loading...</TableCell>
                            </TableRow>
                        ) : error ? (
                            <TableRow>
                                <TableCell colSpan="3">Error: {error}</TableCell>
                            </TableRow>
                        ) : clientsData.filter(filterClientsByTag).map((client) => (
                            <TableRow key={client._id.$oid}>
                                <TableCell align='center'sx={{ border: '1px solid black' }}>{t(`cardNames.${client.name}`)}</TableCell>
                                <TableCell align='center'sx={{ border: '1px solid black' }}>{t(`cardDomains.${client.domain}`)}</TableCell>
                                <TableCell align='center'sx={{ border: '1px solid black' }}>
                                    <Button 
                                        variant="contained" // Add border to the button
                                        onClick={() => handleClick(client)}
                                        sx={{ justifyContent: 'center' }} // Center the button
                                    >
                                        View PDF
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Contact;
