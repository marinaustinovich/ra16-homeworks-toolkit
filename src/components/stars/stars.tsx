import { Star } from "../star/star";

type Props = {
  count: number;
};

export const Stars = ({ count }: Props) => {
  const fullStars = Math.floor(count);
  const halfStar = count % 1 ? 1 : 0;
  const emptyStars = 10 - fullStars - halfStar;

  return (
    <ul className="list-inline">
      {Array.from({ length: fullStars }, (_, index) => (
        <li key={`full-${index}`} className="list-inline-item"><Star type="full" /></li>
      ))}
      {halfStar > 0 && (
        <li className="list-inline-item"><Star type="half" /></li>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <li key={`empty-${index}`} className="list-inline-item"><Star type="empty" /></li>
      ))}
    </ul>
  );
};

