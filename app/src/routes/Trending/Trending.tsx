import Card from "../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import { Container } from "../../styles/global.style";

const animes = [
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer - Kimetsu no Yaiba",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 6,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.36,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer - Kimetsu no Yaiba",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.16,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 6,
    url: "/lol",
  },
  {
    name: "Demon Slayer",
    img: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    note: 9.36,
    url: "/lol",
  },
];

export default function Trending() {
  return (
    <Container>
      <CardGrid>
        {animes.map((anime) => (
          <Card
            name={anime.name}
            note={anime.note}
            img={anime.img}
            url={anime.url}
          />
        ))}
      </CardGrid>
    </Container>
  );
}
