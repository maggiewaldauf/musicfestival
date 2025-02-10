import { useParams } from "react-router-dom";

export default function PerformanceDetailPage() {
    const eventdetail = [
        {uid: "1", time: "Coldplay will play at 10 am"}, 
        {uid: "2", time: "Queen will play at 12 noon without Freddie, sorry!"},
        {uid: "3", time: "Billie Eilish will play at 3 pm"}, 
        {uid: "4", time: "Lady Gaga will play at 5pm"}
    ];

    const {eventId}= useParams();
    const event = eventdetail.find((event) => event.uid === eventId);

    return (
        <div>
            The artist will perform: {event.time};
        </div>
    )
}