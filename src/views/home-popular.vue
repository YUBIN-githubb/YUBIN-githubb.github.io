<script setup lang="ts">
import MovieGrid from "@/components/popular/MovieTable.vue";
import MovieInfiniteScroll from "@/components/popular/MovieInfiniteScroll.vue";
import { fetchPopularMovies } from "@/script/movie/TmdbApi"; // TMDB API 호출 함수
import { defineComponent, onMounted, ref } from "vue";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTh, faBars);

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});

const currentView = ref("grid");
const movies = ref([]); // 영화 데이터를 저장할 변수
const isLoading = ref(true); // 로딩 상태 관리

const setView = (view: string) => {
  currentView.value = view;
};

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "auto";
};

// TMDB API를 호출하여 영화 데이터를 가져오는 함수
const loadMovies = async () => {
  try {
    isLoading.value = true;
    movies.value = await fetchPopularMovies(); // TMDB API 호출
  } catch (error) {
    console.error("영화를 가져오는 중 오류 발생:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  disableScroll();
  loadMovies(); // 컴포넌트가 로드되면 영화 데이터를 가져옵니다.
});
</script>

<template>
  <div class="popular-container">
    <div class="view-toggle">
      <button
          @click="() => {
          setView('grid');
          disableScroll();
        }"
          :class="{ active: currentView === 'grid' }"
      >
        <font-awesome-icon :icon="['fas', 'th']" />
      </button>
      <button
          @click="() => {
          setView('list');
          enableScroll();
        }"
          :class="{ active: currentView === 'list' }"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>

    <!-- 로딩 상태 표시 -->
    <div v-if="isLoading">로딩 중...</div>

    <!-- MovieGrid 컴포넌트에 데이터 전달 -->
    <MovieGrid
        v-if="currentView === 'grid' && !isLoading"
        title="인기 영화"
        :movies="movies"
    />

    <!-- MovieInfiniteScroll 컴포넌트에 데이터 전달 -->
    <MovieInfiniteScroll
        v-if="currentView === 'list' && !isLoading"
        title="인기 영화"
        :movies="movies"
    />
  </div>
</template>

<style scoped>
.view-toggle {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

.view-toggle button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.view-toggle button.active {
  background-color: #535bf2;
}

@media (max-width: 768px) {
  .view-toggle {
    margin-top: 80px;
  }
}
</style>
