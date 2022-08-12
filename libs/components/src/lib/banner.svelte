<script lang="ts">
    import Container from "$lib/container.svelte";
    export let pageHeader: string = ""
    export let pageSubHeader: string = ""
    export let bg: string = ""
</script>
<section id="banner"  >
    <div id="banner-bg" style="--bg: url({bg});"></div>
    <div id="banner-container" class="">
        <Container>
            <div id="banner-header-section" class="py-22">
                <h2 id="banner-header-1">{pageHeader}</h2>
                <h3 id="banner-header-2">{pageSubHeader}</h3>
                <div class="border-t w-22 border-gray-700"></div>
            </div>
        </Container>
    </div>
</section>


<style lang="less">
    #banner {
        @apply relative min-h-112 bg-dark-400 z-0;
       
        #banner-bg {
            @apply relative min-h-112 bg-dark-400 z-1;
            background-image: var(--bg);
            filter: brightness(.3);
        }
        #banner-container {
            @apply absolute w-full h-full top-0 left-0  z-99  pt-[143.5px];
            #banner-header-section {
                @apply flex flex-col gap-3 text-white;
                font-family: 'Pirata One', cursive;
                #banner-header-1 {
                    @apply text-5xl;
                }
                #banner-header-2 {
                    @apply text-2xl leading-loose;
                }
            }
        }
    }
</style>