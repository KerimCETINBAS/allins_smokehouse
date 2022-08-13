<script>

import Banner from "@allins/libs.components/banner.svelte";
import Container from "@allins/libs.components/container.svelte";
import ContactInfo from "./_page_components/contact/contact_info/index.svelte"
import OpeningHours from "./_page_components/contact/opening_hours/index.svelte"
</script>
<section>
    <Banner bg="3.jpg" pageHeader="Iletisim" pageSubHeader="Bize ulasin" />
</section>
<div class="flex flex-row py-23">
    <Container>
        <div class="flex flex-row gap-22 w-full justify-between ">
            <section > <ContactInfo /> </section>
            <section> <OpeningHours /> </section>
        </div>
        <iframe class="mt-22 h-142 w-full" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24029.503012586127!2d27.8102016!3d41.1631616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1660340925075!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
</div>