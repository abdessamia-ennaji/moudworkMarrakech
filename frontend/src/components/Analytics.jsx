// In a new component (e.g., Analytics.jsx)
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../pages/login/Sidebar';

function Analytics() {
    const [visits, setVisits] = useState([]);

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/analytic/get-visits');
                setVisits(response.data);
            } catch (error) {
                console.error('Error fetching visit data', error);
            }
        };

        fetchVisits();
    }, []);

    return (
        <div className="content-admin">
            <Sidebar />
            <ul className="visit-list">
            {visits.map(visit => (
                <li key={visit.id} className="visit-item">
                <div className="visit-details">
                    <span className="visit-id">{visit.id}</span>
                    <span className="visit-ip">{visit.ip_address}</span>
                    <span className="visit-time">{visit.visit_time}</span>
                </div>
                </li>
            ))}
            </ul>
       </div>
    );
}

export default Analytics;
