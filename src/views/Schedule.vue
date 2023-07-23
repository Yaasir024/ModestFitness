<script setup>
import { ref, onMounted } from 'vue';

import Header from '@/components/navigations/Header.vue';
import Hero from '@/components/home/Hero.vue';

import { useScheduleStore } from '../stores/schedule';

const useSchedule = useScheduleStore()

onMounted(() => {
    useSchedule.getSevenDaySchedule()
})
</script>


<template>
    <main class="py-4 bg-black min-h-screen">
        <Header />
        <div class="hero h-[30dvh] xs:min-h-[40dvh] flex flex-col items-center pt-14">
            <div class="flex flex-col items-center">
                <h1
                    class="text-white text-[68px] md:text-[84px] leading-[48px] sm:leading-[62px] md:leading-[92px] font-semibold font-pp text-center">
                    Schedule</h1>
            </div>
        </div>
        <div class="mt-12 flex items-center justify-center flex-wrap gap-y-[20px] px-[20px] sm:px-[80px]">
            <div class="flex-full lg:flex-50% xs:px-3" v-for="schedule in useSchedule.sevenDaySchedule" :key="schedule">
                <div class="schedule-card border-2 border-white bg-white p-4 w-full">
                    <h4 class="text-[20px] font-semibold capitalize">{{ useSchedule.formatDate(schedule.date) }}</h4>
                    <h2 class="text-[26px] font-bold uppercase">{{ schedule.openingTime }} - {{ schedule.closingTime }}</h2>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.hero {
    background: url('https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    /* opacity: .69999998;
  mix-blend-mode: luminosity; */
    /* filter: brightness(40%); */
    /* backgroun */
}

.schedule-card {
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
}
</style>