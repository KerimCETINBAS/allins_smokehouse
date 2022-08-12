<script>

import Banner from "@allins/libs.components/banner.svelte";
import Container from "@allins/libs.components/container.svelte";
import ContactInfo from "./_page_components/contact/contact_info/index.svelte"
</script>
<section>
    <Banner bg="3.jpg" pageHeader="Iletisim" pageSubHeader="Bize ulasin" />
</section>
<div class="flex flex-row pt-23">
    <Container>
        <section> <ContactInfo /> </section>
        <div></div>
    </Container>
</div>