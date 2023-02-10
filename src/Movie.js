import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import MovieSub from "./routes/components/MovieSub";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        /* fetch()는 promise를 반환한다.
         * 아래 getMovies 함수처럼 async-await 사용 시 훨씬 직관적이고 간편하게 사용할 수 있다.
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
        */
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map(
                        (movie, index) => (
                            <MovieSub
                                key={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                                index={index}
                            />
                        )
                        // MovieSub.js 새로 만들면서 주석 처리
                        //(
                        // <div key={movie.id}>
                        //     {/* 다 붙어서 구별이 잘 안됨, 구역별로 나누려고 index로 처리 */}
                        //     {index === 0 ? null : (
                        //         <div>
                        //             <hr />
                        //             <br />
                        //         </div>
                        //     )}
                        //     <img src={movie.medium_cover_image} />
                        //     <h2>{movie.title}</h2>
                        //     {movie.aa?.aaa}
                        //     <p>{movie.summary}</p>
                        //     <ul>
                        //         {movie.genres.map((g) => (
                        //             <li key={g}>{g}</li>
                        //         ))}
                        //     </ul>
                        // </div>
                        //)
                    )}
                </div>
            )}
        </div>
    );
}

export default Movie;
