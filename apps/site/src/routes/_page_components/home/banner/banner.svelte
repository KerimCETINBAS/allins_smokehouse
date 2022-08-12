<script lang="ts">
    import Container from "@allins/libs.components/container.svelte"
    import { onMount } from "svelte";
    import { fly, scale, fade } from "svelte/transition"
    import { cubicInOut, quadIn, quadInOut, quadOut, sineInOut } from "svelte/easing"
    import type { KitSlider } from "@allins/libs.types"
    import SliderButton from "./slider_button.svelte";
    import Data from "../../shared/home.data";
    export const slides =  Data.banner.slides as KitSlider.ISlideType

    let currentSlide = 0;

    const setSliderTimer = (timer: number = 8000) => {
        sliderTimer = setInterval(()=> {
            if(currentSlide == slides.length - 1) return currentSlide = 0
            else
                currentSlide += 1;
        },timer);
    }

    let sliderTimer: NodeJS.Timer;
    onMount(()=> {
        setSliderTimer()
        return () => {
            clearInterval(sliderTimer);
        }
    })

    const handleNextSlide = () => {
        clearInterval(sliderTimer);
        if(currentSlide == slides.length - 1) return currentSlide = 0;
        else 
            currentSlide += 1;
        setSliderTimer()
        
    }

    const handlePrewSlide = () => {
        clearInterval(sliderTimer);
        if(currentSlide == 0) return currentSlide = slides.length - 1;
        else 
            currentSlide -= 1;
        setSliderTimer()
        
    }
</script>
{#key currentSlide}
<div id="slide">
   
    <Container>
        <div class="flex flex-col  justify-center  flex-1 h-screen pt-[142.5px] gap-8 ">
        
       
            <span in:fly={{y:100, duration: 400, easing: cubicInOut}} id="slider-text">
                {slides[currentSlide].text}
            </span>
        
            <strong in:fly={{y:100, duration: 400, delay: 300, easing: quadInOut}} id="slider-header">
                {slides[currentSlide].header}
            </strong>
         
            <SliderButton button={slides[currentSlide].button} />

            <div class=" absolute top-0 left-0 w-full h-screen -z-1 bg-dark-900">
                <img in:fade={{duration: 1000, easing: sineInOut}}  src="{slides[currentSlide].img.src}" alt="">
            </div>
          

            <!-- #region slider buttons -->
            <div class="z-2 absolute left-0 w-full bottom-12  ">
                <Container>
                    <div class="flex flex-row gap-4 items-end justify-end">
                        <span 
                        on:click={handlePrewSlide}
                        class="text-white flex w-10 h-10 border border-gray-800 rounded-1 items-center justify-center hover:bg-gray-700 cursor-pointer">
                            <i class="fa fa-chevron-left"></i>
                        </span>


                        <span 
                        on:click="{handleNextSlide}"
                        class="text-white flex w-10 h-10 border border-gray-800 rounded-1 items-center justify-center hover:bg-gray-700 cursor-pointer">
                            <i class="fa fa-chevron-right"></i>
                        </span>
                    </div>
                </Container>
            </div>
            <!-- #endregion slider buttons -->
        </div>

  
    </Container>
   
</div>
{/key}


<style lang="less">
 
        
       #slide {
            
            img {
            
                @apply -z-999 w-full h-full;
                background-image: url("/1.jpg");
                background-repeat: no-repeat;
                filter:  brightness(45%) saturate(110%);
        
            }

            #slider-text {
                @apply text-xl text-white;
                font-family: 'Mukta', sans-serif;
            }

            #slider-header {
                @apply text-7xl tracking-widest text-white ;
                font-family: 'Pirata One', cursive;
            }

       
       }
 

</style>