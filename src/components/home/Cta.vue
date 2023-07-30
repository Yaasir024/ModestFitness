<template>
    <section class="cta h-[30dvh] bg-black/60 flex items-center justify-center px-3">
        <h3 class="text-white text-[32px] xs:text-[46px] sm:text-[54px] md:text-[60px] font-semibold text-center">Exclusively For female</h3>
    </section>
</template>

<style scoped>
.cta {
    position: relative;
}



.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url('https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGFlcm9iaWNzJTIwc2Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop'); */
  background: url('./../../assets/images/cta.jpeg');
    background-size: cover;
    background-position: center;
  filter: brightness(80%); /* Adjust the filter as needed */
  z-index: -1;
}
</style>