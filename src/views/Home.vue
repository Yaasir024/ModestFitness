<script setup>
import Header from '@/components/navigations/Header.vue';
import Hero from '@/components/home/Hero.vue';
import Facilities from '@/components/home/Facilities.vue';
import Contact from '@/components/home/Contact.vue';
import Subscribe from '@/components/home/Subscribe.vue';
import Cta from '@/components/home/Cta.vue';
import Footer from '@/components/navigations/Footer.vue';
</script>

<template>
    <div class="">
        <Header />
        <main class="">
            <Hero />
            <Facilities />
            <Contact />
            <Subscribe />
            <Cta />
        </main>
        <Footer />
    </div>
</template>