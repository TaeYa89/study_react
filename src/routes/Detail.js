import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
        console.log(detail);
        console.log(json.data.movie);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={detail.large_cover_image} alt={detail.title} />
                    <h1>{detail.title}</h1>
                    <p>
                        {detail.year}년 {detail.runtime}분
                    </p>
                    <p>RATE : {detail.rating}</p>
                    <p>LIKE : {detail.like_count}</p>
                    <p>
                        GENRES :
                        {detail.genres.map((g, gIndex) =>
                            gIndex === 0 ? (
                                <span key={g}> {g}</span>
                            ) : (
                                <span key={g}>, {g}</span>
                            )
                        )}
                    </p>
                    <p>{detail.description_full}</p>
                    <YouTube
                        videoId={detail.yt_trailer_code}
                        opts={{
                            width: "560",
                            height: "315",
                            playerVars: {
                                autoplay: 0,
                                rel: 0,
                                modestbranding: 1,
                            },
                        }}
                        onEnd={(e) => {
                            e.target.stopVideo(0);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;
