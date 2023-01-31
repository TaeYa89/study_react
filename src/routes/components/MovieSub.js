import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieSub({ coverImg, title, summary, genres, index }) {
    return (
        <div>
            {/* 다 붙어서 구별이 잘 안됨, 구역별로 나누려고 index로 처리 */}
            {index === 0 ? null : (
                <div>
                    <hr />
                    <br />
                </div>
            )}
            <img src={coverImg} alt={title} />
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

// Movie.PropTypes = {
//     coverImg: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default MovieSub;
