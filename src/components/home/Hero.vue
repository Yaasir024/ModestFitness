<template>
    <div class="hero px-4 sm:px-6 h-[calc(100dvh-64px)] relative flex items-center justify-center">
        <div class="text-white px-[24px] flex flex-col items-center justify-center">
            <h1
                class="text-[#fdb705] text-[52px] sm:text-[68px] md:text-[96px] leading-[48px] sm:leading-[62px] md:leading-[92px] font-semibold font-pp">
                Modest Fitness</h1>
            <p class="long-text mt-[12px] text-[18px] sm:text-[30px] leading-[22px] sm:leading-[36px] text-white font-semibold uppercase">
                Stronger and Healthier than ever </p>
        </div>
        <div id="hero-marquee"
            class="absolute bottom-0 left-0 right-0 text-xl xs:text-[24px] leading-[26px] sm:leading-[31px] tracing-[0.02em] font-bold uppercase bg-gray-300 flex z-10">
            <div class="py-[14px] px-[15px] sm:px-[24px] font-bold">NEWS</div>
            <div class="marquee w-full">
                <div class="marquee__group">
                    <span class="font-bold">Grand Opening Saturday July 29, 2023. Starts 7:00 AM</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                    <span class="font-bold">20% Discount Off registration for first 10 members</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <span class="font-bold">Grand Opening Saturday July 29, 2023. Starts 7:00 AM</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                    <span class="font-bold">20% Discount Off registration for first 10 members</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>





<style scoped>
.hero {
    background: url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    /* opacity: .69999998;
  mix-blend-mode: luminosity; */
    /* filter: brightness(40%); */
    /* backgroun */
}
.hero .long-text {
    text-shadow: 1px 1px 5px #000;
}
.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 12px;
    mask-image: linear-gradient(var(to bottom, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    min-width: 100%;
    animation: scroll-x 22s linear infinite;
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-100% - 12px));
    }
}
</style>

