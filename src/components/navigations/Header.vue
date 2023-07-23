<script setup>
import { ref, onMounted } from 'vue';

import { useClickOutside } from "@/composables/useClickOutside";

const mobileNav = ref(null)
const showMobileNav = ref(false)

useClickOutside(mobileNav, () => {
    showMobileNav.value = false;
});

</script>

<template>
    <div class="sticky top-0  px-4 sm:px-6 py-4 z-30 bg-black" v-if="false">
        <header class="px-[24px] py-[12px] flex items-center justify-between bg-white rounded-[20px]">
            <div class="logo">
                <div class="text-[24px] font-bold text-orange-500">ModestFitness</div>
            </div>
            <div class="flex items-center">
                <ul class="flex items-center px-[24px] py-[12px]">
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/schedule">Schedules</RouterLink>
                    </li>
                    <li class="text-[16px] leading-[19px]">
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
                <div class="hidden md:block">
                    <RouterLink to="/">
                        <button
                            class="px-[12px] py-[10px] rounded-[40px] text-white text-[16px] leading-[19px] font-bold bg-orange-500">Register</button>
                    </RouterLink>
                </div>
            </div>
        </header>
    </div>
    <header class="sticky top-0 bg-white px-6 z-30">
        <div class="flex items-center justify-between h-[64px]">
            <div class="logo">
                <div class="text-[24px] font-bold text-main">ModestFitness</div>
            </div>
            <div class="hidden md:flex items-center">
                <ul class="flex items-center mr-[20px]">
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/schedule">Schedules</RouterLink>
                    </li>
                    <li class="text-[16px] leading-[19px]">
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="hidden md:block" v-if="false">
                <RouterLink to="/">
                    <button
                        class="px-[12px] py-[10px] rounded-[40px] text-white text-[16px] leading-[19px] font-bold bg-main">Register</button>
                </RouterLink>
            </div>
            <div class="block md:hidden relative" ref="mobileNav">
                <button class="flex items-center" @click="showMobileNav = !showMobileNav">
                    <svg height="24" width="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
                            fill-rule="nonzero" />
                    </svg>
                </button>
                <transition name="nav">
                    <div class="fixed top-0 bottom-0 right-0 w-full xs:w-[65vw] bg-white" v-if="showMobileNav">
                        <div class="flex flex-col h-full">
                            <div class="">
                                <div class="flex items-center justify-end h-[64px] border-b px-4">
                                    <button class="" @click="showMobileNav = !showMobileNav">
                                        <svg height="24" width="24" clip-rule="evenodd" fill-rule="evenodd"
                                            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                                        </svg>
                                    </button>
                                </div>
                                <ul class="flex flex-col mt-4">
                                    <li class="text-[18px] leading-[19px] px-[24px] py-[12px]">
                                        <RouterLink to="/">Home</RouterLink>
                                    </li>
                                    <li class="text-[18px] leading-[19px] px-[24px] py-[12px]">
                                        <RouterLink to="/schedule">Schedules</RouterLink>
                                    </li>
                                    <li class="text-[18px] leading-[19px] px-[24px] py-[12px]">
                                        <RouterLink to="/contact">Contact</RouterLink>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-auto px-[24px] pb-[40px]">
                                <p class="text-sm text-black/60 max-w-[380px] mt-2">
                                    PHONE: +234 (0) 8060411288
                                </p>
                                <!-- <button
                                    class="px-[12px] py-[10px] rounded-md text-[16px] leading-[19px] font-bold bg-main w-full">Register</button> -->
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
}
</style>