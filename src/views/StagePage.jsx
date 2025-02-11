import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

export default function StagePage() {
    const stageevents = [
        {stageid: "1", eventtext: "Coldplay", uid: "1", category: "Pop"},
        {stageid: "1", eventtext: "Queen", uid: "2", category: "Rock"},
        {stageid: "2", eventtext: "Billie Eilish", uid: "3", category: "Pop"},
        {stageid: "2", eventtext: "Lady Gaga", uid: "4", category: "Pop"},
        {stageid: "1", eventtext: "Linkin Park", uid: "5", category: "Rock"},
        {stageid: "1", eventtext: "Greenday", uid: "6", category: "Rock"},
        {stageid: "2", eventtext: "Tom Odell", uid: "7", category: "Soft Pop"},
        {stageid: "2", eventtext: "James Arthur", uid: "8", category: "Soft Pop"},
    ];
    
    const { stageId } = useParams(); 
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const events = stageevents.filter((event) => stageId === event.stageid);
    
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.eventtext.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    return (
        <div className="stage-page">
            <h1 className="stage-title">Stage {stageId} Events</h1>
            
            <div className="input-group">
                <label className="input-label">Search by artist:</label>
                <input 
                    type="text" 
                    id="search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search for artist" 
                    className="input-field"
                />
            </div>
            
            <div className="input-group">
                <label className="input-label">Filter by category:</label>
                <select 
                    id="category" 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-field"
                >
                    <option value="all">All</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Soft Pop">Soft Pop</option>
                </select>
            </div>
            
            <h2 className="event-list-title">List of Events</h2>
            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <div key={event.uid} className="event-item">
                            <Link to={`/musicfestival/detailpage/${event.uid}`} className="event-link">{event.eventtext}</Link>
                        </div>
                    ))
                ) : (
                    <p className="no-events">No events found.</p>
                )}
            </div>
        </div>
    );
}
