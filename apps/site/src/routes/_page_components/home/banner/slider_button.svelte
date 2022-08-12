<script lang="ts">
    import { onMount } from "svelte";
    import { fly, scale, fade } from "svelte/transition"
    import { cubicInOut, quadIn, quadInOut, quadOut, sineInOut } from "svelte/easing"
    import type { KitSlider } from "@allins/libs.types"
    export let button:KitSlider.IButtonType 
</script>

<div  id="slider-link" >
    <a in:scale={{duration:400, delay: 800, easing: quadIn}} data-content="{button.text}"  href="{button.url}">
        <span>
            {button.text}
        </span>
    </a>
</div>



<style lang="less">
        #slider-link {
            
            a {
                
                @apply relative text-lg tracking-widest text-white p-3 px-4 rounded rounded-sm bg-gray-800 transition-all  duration-300;
                font-family: 'Mukta', sans-serif;
                &::after {
                        content: "";
                        @apply absolute left-0 top-0 w-0 h-full bg-gray-400;
            
                    }
                &:hover {
                    @apply duration-300;
                    

                    &::after {
                        content: "";
                        @apply absolute left-0 top-0 opacity-100 w-full h-full bg-dark-800 opacity-25 z-999 duration-300;
            
                    }
                }
               
            }
        }
</style>