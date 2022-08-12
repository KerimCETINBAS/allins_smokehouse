<script>

import Banner from "@allins/libs.components/banner.svelte";
import Menu from "./_page_components/shared/menu/index.svelte"
import Promo from "./_page_components/shared/promo/index.svelte"
</script>

<section id="banner" class="w-full">  <Banner pageHeader="Menumuz" bg="/1.jpg" pageSubHeader="OUR MENU AND TODAY'S MENU" /> </section>

<section id="menu" class="w-full py-23  bg-dark-900">  <Menu /> </section>
<section> <Promo theme="light" /> </section>