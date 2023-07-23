<script setup>
import { ref, computed } from "vue";

const currentYear = computed(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
})
</script>

<template>
    <footer class="bg-black text-white pt-2 pb-5 md:py-2">
        <p class="flex items-center justify-center">
            <span class="text-[12px]">Modest Fitness. All Rights reserved. © {{ currentYear }}</span>
        </p>
    </footer>
</template>