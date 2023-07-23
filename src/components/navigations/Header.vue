<template>
    <div class="sticky top-0  px-4 sm:px-6 py-4 z-30 bg-black">
        <header class="px-[24px] py-[12px] flex items-center justify-between bg-white rounded-[20px]">
            <div class="logo">
                <div class="text-[24px] font-bold text-orange-500">ModestFitness</div>
            </div>
            <div class="flex items-center">
                <ul class="flex items-center mr-[20px]">
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="text-[16px] leading-[19px] mr-[20px]">
                        <RouterLink to="/">Schedules</RouterLink>
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
</template>

