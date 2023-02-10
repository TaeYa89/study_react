import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../../MovieSub.module.css";

function MovieSub({ id, coverImg, title, summary, genres, rating, index }) {
    return (
        <div className={styles.movie_container}>
            <Link to={`/movie/${id}`}>
                {/* 제목에만 link 걸려니 불편해서 div 영역 자체에 link 처리 */}
                {/* 다 붙어서 구별이 잘 안됨, 구역별로 나누려고 index로 처리, css 추가로 필요없음 */}
                {/* {index === 0 ? null : (
                    <div>
                        <hr />
                        <br />
                    </div>
                )} */}
                <img src={coverImg} alt={title} />
                <h2>
                    {title}
                    {/* <Link to={`/movie/${id}`}>{title}</Link> */}
                </h2>
                {/* <p>{summary}</p> */}
                <div>
                    {genres.map((g, gIndex) =>
                        gIndex === 0 ? (
                            <span key={g}>{g}</span>
                        ) : (
                            <span key={g}>, {g}</span>
                        )
                    )}
                    {/* <ul>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul> */}
                </div>
                <div>★ {rating}</div>
            </Link>
        </div>
    );
}

MovieSub.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieSub;
