

<script lang="ts">
    import Container from '@allins/libs.components/container.svelte';
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/core';
    import MenuItem from './menu_item.svelte';
</script>
<svelte:head>
    <link href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" rel="stylesheet"/>
</svelte:head>

<Container>
    <div>
        <h2 id="section-header">Menu List</h2>
    </div>
    <div id="section-container" class="w-full h-full flex flex-col  text-center mt-22 duration-300 transition-all">
            <Splide aria-label="My Favorite Images" hasTrack={ false } options={{perPage:4, preloadPages:4, padding: {
                left: 100,
                top: 120,
                right: 100
            }}}>
                <SplideTrack>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/cow.svg" class="w-12 h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/salad.svg" class="w-12 h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/wine.svg" class="w-12  h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/cow.svg" class="w-12 h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/salad.svg" class="w-12 h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="slider-item">
                            <img src="/wine.svg" class="w-12  h-12" alt="">
                            <h3>Main</h3>
                        </div>
                    </SplideSlide>
                    
                </SplideTrack>
                <div class="splide__arrows invisible ">
                    <button class="splide__arrow mt-10 splide__arrow--prev absolute top-0 left-0 h-12 w-12  border rounded-1 border-gray-500">
                        <i class="fa fa-chevron-left text-gray-500"></i>
                    </button>
                    <button class="splide__arrow  mt-10 splide__arrow--next absolute top-0 right-0 absolute border rounded-1 top-0 h-12 w-12  border-gray-500">
                        <i class="fa fa-chevron-right text-gray-500"></i>
                    </button>
                </div>
            </Splide>
    </div>
    
    <div class="grid grid-cols-2 gap-x-42 gap-y-8 pt-22">
        
        {#each Array(10) as _ }
            <MenuItem />
        {/each}
    </div>
</Container>



<style lang="less">
    #section-header {
        @apply relative text-6xl text-center text-white pb-4;
        font-family: 'Pirata One', cursive;
        &::after {
            @apply absolute w-22 border-t-2  border-t-gray-700 bottom-0 left-[calc(50%-(5.5rem/2))];
            content: ""
        }
    }

    .slider-item {
        @apply flex flex-col items-center justify-center gap-4;
        font-family: 'Pirata One', cursive;
        h3 {
            @apply text-2xl text-white;
        }
    }

    #section-container:hover {
       
        .splide__arrows {
            
            @apply  visible duration-300 transition-all;
        }
    }
</style>