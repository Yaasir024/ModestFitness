<template>
    <section class="bg-black lg:flex cursor-light">
      <div class="pt-[48px] px-[20px] xs:px-[45px] sm:px-[64px] pb-[42px] w-full">
        <h2
          class="text-[28px] sm:text-[32px] md:text-[64px] leading-[32px] sm:leading-[40px] md:leading-[65px] tracking-[0.02em] max-w-[225px] 3xs:max-w-[250px] xs:max-w-full font-medium font-manuka text-white">
          Subscribe to our newsletter</h2>
        <div class="mt-[24px] w-full bg-white p-1.5 xs:p-2">
          <form @submit.prevent class="flex">
            <input type="text" placeholder="Email address"
              class="w-full px-[24px] text-[20px] xs:text-[24px] leading-[26px] xs:leading-[31px] bg-transparent border-none outline-none xs:font-medium text-black"><button
              type="submit"
              class="text-[20px] xs:text-[24px] leading-[26px] xs:leading-[31px] tracking-[-0.01em] px-[16px] xs:px-[24px] py-[10px] xs:py-[18px] bg-black flex items-center text-white"><span
                class="">Submit</span> <svg class="arrow ml-[16px] w-[18px] xs:w-[24px] h-[16px] xs:h-[20px]"
                viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                  stroke="#E5E5DB" stroke-width="0.6"></path>
              </svg></button>
          </form>
        </div>
        <p class="mt-[20px] text-base leading-[21px] tracking-[0.01em] font-bold text-[#ad371d]">Please include an @ in
          the email address</p>
      </div>
    </section>
</template>