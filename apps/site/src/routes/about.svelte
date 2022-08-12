<script>
import Banner from "@allins/libs.components/banner.svelte";
import About from "./_page_components/shared/about.svelte";
import Chefs from "./_page_components/about/chefs/index.svelte";
import Slider_2 from "./_page_components/shared/slider_2/index.svelte"
</script>

<section ><Banner pageHeader="Hakkimizda"  pageSubHeader="Allins'e Hos Geldiniz" bg="/1.jpg"  /></section>
<section class="py-23"><About theme="light" /></section>
<section> <Chefs /> </section>
<section> <Slider_2 /> </section>