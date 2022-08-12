<script>
import Banner from "@allins/libs.components/banner.svelte";
import Container from "@allins/libs.components/container.svelte";
import HoverableImage from "@allins/libs.components/hoverable_image.svelte";

</script>
<section> <Banner bg="3.jpg" pageHeader="Galeri" pageSubHeader="Muhtesem lezzetterimize goz atin" /> </section>
<section class="py-22 bg-dark-600   ">
    <Container>
        <div class="grid grid-cols-4 gap-4">
            {#each Array(20) as _ }
                <div class="w-full  object-contain  {`col-span-${Math.floor((Math.random() * 2) + 1)}`}" >
                    <HoverableImage src="{`/${ Math.floor((Math.random() * 3) + 1)}`}.jpg"/>
                </div>
                
            {/each}
        </div>
    </Container>
</section>