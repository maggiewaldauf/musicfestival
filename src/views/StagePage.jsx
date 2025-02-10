import { Link, useParams } from "react-router-dom";


export default function StagePage() {
    const stageevents = [
        {stageid: "1", eventtext: "Coldplay", uid: "1"},
        {stageid: "1", eventtext: "Queen", uid: "2"},
        {stageid: "2", eventtext: "Billie Eilish", uid: "3"},
        {stageid: "2", eventtext: "Lady Gaga", uid: "4"}
    ];
    
    const {stageId} = useParams(); //Get stageId from link

    //Get events that matches stageid and id from link
    //Result an array of stageevents called "events"
    const events = stageevents.filter((event) => stageId === event.stageid);
    return (
        <div>
            <h2>List of Events on Stage {stageId} </h2>
            {events.map((event) => (
                <div key= {event.id}>
                    <Link to={`/musicfestival/detailpage/${event.uid}`}>{event.eventtext}</Link>
                </div>
            ))}
        </div>
    )
}