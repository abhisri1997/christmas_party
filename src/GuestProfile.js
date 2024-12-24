import React from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { guests, events } from './app.constant';

const GuestProfile = () => {
    const { name } = useParams();
    const guest = guests.find(g => g.name.toLowerCase() === name.toLowerCase());

    if (!guest) return <div>Guest not found</div>;

    const guestData = {
        ...guest,
        events: events,
        partyTime: "08:00 PM to Indefinite",
        uniqueCode: `PARTY-${guest.id}-${Date.now()}`,
        pageURL: window.location.href,
    };

    return (
        <div className="guest-profile">
            <h2>Welcome {guest.name}!</h2>
            <div className="qr-container">
                <QRCodeSVG
                    value={JSON.stringify(guestData.pageURL)}
                    size={256}
                    level="H"
                />
            </div>
            <div className="guest-info">
                <p>Role: {guest.role}</p>
                <p>Party Personality: {guest.personality}</p>
                <h3>Events:</h3>
                {guestData.events.map(event => (
                    <div key={event.id} className="event-card">
                        <h4>{event.name}</h4>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestProfile;