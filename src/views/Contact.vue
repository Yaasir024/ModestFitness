<script setup>
import Header from '@/components/navigations/Header.vue';
import Hero from '@/components/home/Hero.vue';
</script>


<template>
    <main class="py-4 bg-black min-h-screen">
        <Header />
        <div class="hero min-h-[40dvh] md:min-h-[70dvh] flex flex-col items-center pt-14">
            <div class="flex flex-col items-center px-[20px]">
                <h1
                    class="text-white text-[52px] sm:text-[68px] md:text-[84px] leading-[48px] sm:leading-[62px] md:leading-[92px] font-semibold font-pp text-center">
                    Contact Us</h1>
                <p class="mt-[12px] text-[18px] sm:text-[24px] leading-[22px] sm:leading-[36px] text-white text-center">
                    Need more info about our gym, you're more than welcomed to contact us.</p>
            </div>
        </div>
        <div class="mt-12 flex items-center justify-center flex-wrap gap-x-[20px] gap-y-[30px]">
            <div class="bg-white p-6 rounded-xl w-[300px] flex flex-col items-center">
                <div class="text-main mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                    </svg>
                </div>
                <h4 class="text-[24px] font-semibold">VISIT US</h4>
                <h2 class="text-[16px] font-medium text-center text-main mt-2">20A kotangora Street Off Ibrahim Taiwo Road by Ajoke
                    Model Nursery and Primary School, Ilorin, Kwara State</h2>
            </div>
            <div class="bg-white p-6 rounded-xl w-[300px] flex flex-col items-center">
                <div class="text-main mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                    </svg>
                </div>
                <h4 class="text-[24px] font-semibold">CALL US</h4>
                <h2 class="text-[16px] font-medium text-center text-main mt-2">+234 (0) 8060411288</h2>
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
}</style>