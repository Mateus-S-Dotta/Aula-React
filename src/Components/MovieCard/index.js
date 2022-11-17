import './styles.css';

function MovieCard({ photo, title, note }) {
    return (
        <div className="movie-card">
            <img className="movie-img" src={photo} />
            <div className="movie-info">
                <span className="movie-title">{title}</span>
                <span className="movie-note">{note}</span>
            </div>
        </div>
    )
}

export default MovieCard;