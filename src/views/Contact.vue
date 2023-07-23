<script setup>
import Header from '@/components/navigations/Header.vue';
import Hero from '@/components/home/Hero.vue';
</script>


<template>
    <main class="py-4 bg-black min-h-screen">
        <Header />
        <div class="hero min-h-[70dvh] flex flex-col items-center pt-14">
            <div class="flex flex-col items-center">
                <h1
                class="text-white text-[52px] sm:text-[68px] md:text-[84px] leading-[48px] sm:leading-[62px] md:leading-[92px] font-semibold font-pp text-center">Contact Us</h1>
                <p class="mt-[12px] text-[18px] sm:text-[24px] leading-[22px] sm:leading-[36px] text-white">
                Need more info about our gym, you're more than welcomed to contact us.</p>
            </div>
        </div>
        <div class="mt-12 flex items-center justify-center flex-wrap">
            <div class="bg-white p-6 rounded-xl">
                <h4 class="">VISIT US</h4>
                <h2 class="">20A kotangora Street Off Ibrahim Taiwo Road by Ajoke Model Nursery and Primary School, Ilorin, Kwara State</h2>
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
</style>