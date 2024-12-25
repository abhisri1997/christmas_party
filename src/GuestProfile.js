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
        venue: "S05 506, Smondoville, Electronic City, Bangalore"
    };

    return (
        <div className="guest-profile">
            <h2>Welcome {guest.name}!</h2>
            <div className="qr-container">
            <img src={guest.photo} alt={`${guest.name}'s`} className="guest-photo" />
                <QRCodeSVG
                    value={JSON.stringify(guestData.pageURL)}
                    size={256}
                    level="H"
                    style={{ display: 'block' }}
                />
            </div>
            <div className="guest-info">
                <p>Role: {guest.role}</p>
                <p>Party Personality: {guest.personality}</p>
                <p>What you have to do: Bring the booze of your choice and do research on dad jokes.</p>
                <h3>Time:</h3> <p>{guestData.partyTime}</p>
                <h3>Venue:</h3> <p>{guestData.venue}</p>
                <h3>Events:</h3>
                {guestData.events.map(event => (
                    event.name === "What's in my mouth?" ? (
                        <div key={event.id} className="event-card surprise-event">
                            <h4>Surprise Event!</h4>
                            <p>{event.name}</p>
                        </div>
                    ) : (
                        <div key={event.id} className="event-card">
                            <h4>{event.name}</h4>
                            <p>{event.description}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default GuestProfile;