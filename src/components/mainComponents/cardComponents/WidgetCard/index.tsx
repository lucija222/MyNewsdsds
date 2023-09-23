import CardTitle from "../CardTitle";
import "./WidgetCard.scss";

interface WidgetCardProps {
    timestamp: string;
    title: string;
    url: string;
}

const WidgetCard = ({ timestamp, title, url }: WidgetCardProps) => {
    return (
        <>
            <time>{timestamp}</time>
            <CardTitle url={url} title={title} />
        </>
    );
};

export default WidgetCard;