type Props = {
  type?: "full" | "half" | "empty";
};

export const Star = ({ type }: Props) => {
  if (type === "full") return <i className="fas fa-star" style={{ color: 'gold' }}></i>;
  if (type === "half") return <i className="fas fa-star-half-alt" style={{ color: 'gold' }}></i>;
  if (type === "empty") return <i className="far fa-star"></i>;
  return null;
};
