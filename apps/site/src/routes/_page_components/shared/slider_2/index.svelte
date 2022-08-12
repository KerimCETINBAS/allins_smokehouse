<script lang="ts">
    import Container from "@allins/libs.components/container.svelte";
    import type { IImageType } from "@allins/libs.types/dist/kit.slide";
    import { onMount } from "svelte";
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    export let img: IImageType = {
        src: "/1.jpg",
        alt: "et gorseli"
    };

    let sliderBg:HTMLDivElement;
    onMount(()=> { sliderBg.style.backgroundImage = `url(${img.src})`; })
</script>

<div id="slider" class="h-98 w-full relative" >
        <div  id="slider-cover" bind:this="{sliderBg}"></div>
        <Container>
            <div id="splide">
                <Splide  hasTrack={false} options={{perPage:1}} aria-label="c" >
                           <div class="h-96 w-222 mx-auto">
                                <SplideTrack>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div class="slider-item ">
                                        
                                            <h3>Main</h3>
                                            <h4>CORLU, TEKIRDAG</h4>
                                            <p>
                                                The name Winta, in principle, quite fully describes the restaurant's concept: red meat and red wine - what else is needed for a steakhouse!
                                            </p>
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                                <div class="splide__arrows hidden" />
                           </div>
               
                        
                    </Splide>
            </div>
        </Container>
</div>




<style lang="less">

    #slider {
        #slider-cover {
            @apply absolute z-0 w-full h-full left-0 top-0 bg-red-400;
            
            background-attachment: fixed;
            filter:brightness(.3);
        }
        #splide {
            @apply absolute left-0 w-full h-full top-0 z-2;
            .slider-item {
                @apply h-90  w-3/5  mx-auto gap-4 flex flex-col items-center justify-center;
                filter:brightness(1);
                h3 {
                    font-family: 'Pirata One', cursive;
                    @apply text-4xl  text-gray-700;
                }

                h4 {
                    font-family: 'Mukta', sans-serif;
                    @apply text-base  text-white;
                }
                p {
                    font-family: 'Mukta', sans-serif;
                    @apply text-base  text-gray-200;
                }
            }
        }
       
    }
</style>