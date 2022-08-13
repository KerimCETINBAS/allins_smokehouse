
<script context="module" lang="ts">
    import type { Load} from "@sveltejs/kit"
    export const load: Load = async ({session}) => {

        console.log(session)
    }
</script>
<script lang="ts">
    //#region imports
    import Banner from "./_page_components/home/banner/banner.svelte";

    import About from "./_page_components/shared/about.svelte";
    import Menu from "./_page_components/shared/menu/index.svelte";
    import Promo from "./_page_components/shared/promo/index.svelte";
    import Recipe from "./_page_components/shared/recipe/index.svelte";
    import Slider_2 from "./_page_components/shared/slider_2/index.svelte";
    import TodaysMenu from "./_page_components/shared/today_menu/index.svelte";
    // import Data from "_data.ts";
    // //#endregion imports/


    let theme: "light" | "dark" = "dark"
</script>


<section id="banner" class="w-full h-screen"> <Banner /> </section>

<section id="about" class="{theme == "light" ? "bg-white" : "bg-dark-700"}"> <About {theme} /> </section>

<section id="menu" class="w-full py-23  bg-dark-900">  <Menu /></section>

<section id="promo" class="w-full h-auto"> <Promo /></section>

<section> <TodaysMenu /> </section>

<section> <Slider_2 /></section>

<section> <Recipe /></section>



<style lang="less">
    #about {
       @apply w-full h-auto  py-23; 
    }
    #banner {
        @apply relative w-full h-screen;
    }
</style>