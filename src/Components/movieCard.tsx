interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export default function MovieCard(props: MovieCardProps) {
  const { id, title, poster_path, release_date, vote_average, overview } =
    props;

  return (
    <div className="card">
      <img
        key={id}
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={`${title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p>
          <small>RELEASE DATE: {release_date}</small>
        </p>
        <p>
          <small>RATING: {vote_average}</small>
        </p>
        <p className="card--description">{overview}</p>
      </div>
    </div>
  );
}
