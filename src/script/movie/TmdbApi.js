import axios from "axios";

// TMDB API Base URL
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .env에서 API 키 가져옴

// TMDB 인기 영화 데이터 가져오기
export async function fetchPopularMovies() {
    try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
            params: {
                api_key: TMDB_API_KEY,
                language: "ko-KR",
                page: 1, // 1페이지의 데이터 가져오기
            },
        });
        return response.data.results; // 결과에서 영화 데이터 반환
    } catch (error) {
        console.error("TMDB API 호출 실패:", error);
        throw error;
    }
}
