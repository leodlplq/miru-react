import { CardContainer, Overlay, CardTitle } from "./Card.style";

type CardProps = {
  name: string;
  note: number;
  img: string;
  url: string;
};

export default function Card({ name, note, img, url }: CardProps) {
  return (
    <CardContainer>
      <img src={img} alt={`Cover of ${name}`} />
      <Overlay href={url}>
        <span>{note} ⭐</span>
        <CardTitle>{name}</CardTitle>
      </Overlay>
    </CardContainer>
  );
}
