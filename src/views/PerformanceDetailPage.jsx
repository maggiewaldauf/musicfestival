import { useParams } from "react-router-dom";

export default function PerformanceDetailPage() {
    const eventdetail = [
        {uid: "1", time: "Coldplay will play at 10 am"}, 
        {uid: "2", time: "Queen will play at 12 noon without Freddie, sorry!"},
        {uid: "3", time: "Billie Eilish will play at 3 pm"}, 
        {uid: "4", time: "Lady Gaga will play at 5pm"},
        {uid: "5", time: "Linkin Park will play at 7 pm"}, 
        {uid: "6", time: "Greenday will play at 9pm"},
        {uid: "7", time: "Tom Odell will play at 11pm"}, 
        {uid: "8", time: "James Arthur will play at midnight"}
    ];

    const {eventId}= useParams();
    const event = eventdetail.find((event) => event.uid === eventId);

    return (
        <div>
            The artist will perform: {event.time};
        </div>
    )
}