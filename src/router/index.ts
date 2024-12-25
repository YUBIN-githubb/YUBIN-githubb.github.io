import { createRouter, createWebHistory } from "vue-router";
import HomeMain from "@/views/home-main.vue";
import HomePopular from "@/views/home-popular.vue"; // 인기 영화 페이지 추가
import HomeSearch from "@/views/home-search.vue";
import HomeWishlist from "@/views/home-wishlist.vue";

const routes = [
    {
        path: "/",
        name: "HomeMain",
        component: HomeMain,
    },
    {
        path: "/popular",
        name: "HomePopular", // 인기 영화 페이지 라우트
        component: HomePopular,
    },
    {
        path: "/search",
        name: "HomeSearch",
        component: HomeSearch,
    },
    {
        path: "/wishlist",
        name: "HomeWishlist",
        component: HomeWishlist,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
