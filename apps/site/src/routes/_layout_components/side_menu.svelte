<script lang="ts">
import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation"
    let scrollPos: number;
    let scrollHeight:number;
    let scrollPercentage:number = 0;
    onMount(()=> scrollHeight = document.body.offsetHeight - window.innerHeight)

    const handleScroll = () => {
        scrollPercentage = Math.round(( scrollPos / scrollHeight ) * 100)
    
    }
    afterNavigate(()=> {
        scrollHeight = document.body.offsetHeight - window.innerHeight
    })
    const handleScrollClick = () => {
        window.scrollTo(0,0)
        scrollPos = 0;
    }
</script>
<svelte:window bind:scrollY={scrollPos} on:scroll={handleScroll}/>

{#if scrollPercentage > 10}
    <div on:click="{handleScrollClick}"  class="fixed flex justify-center items-center  z-999 bottom-8 right-16 w-16 ">
        <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle"
            stroke-dasharray="{scrollPercentage}, 100"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        
        </svg>

        <span  class="absolute font-semibold text-gray-700"> <i class="fa fa-chevron-up"></i></span>
    </div>
{/if}

<style lang="less">

:global(html) {
    scroll-behavior: smooth;
}
.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle {
  @apply stroke-gray-800;
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
}

</style>