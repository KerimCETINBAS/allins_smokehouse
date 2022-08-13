<script>
import Banner from "@allins/libs.components/banner.svelte";
import Container from "@allins/libs.components/container.svelte";
import Input from "@allins/libs.components/input.svelte";
import Textarea from "@allins/libs.components/textarea.svelte";

</script>

<section>
    <Banner pageHeader="Kayit" pageSubHeader="Allinse kaydolun" bg="/2.jpg" />
</section>
<section class="py-23">
    <Container>
        <form action="/" class="flex flex-col gap-6">
           <div  class="flex flex-row gap-6">
                <Input placeholder="Adiniz " />
                <Input placeholder="Soyadiniz" />
           </div>

           <div class="flex flex-row gap-6">
                <Input placeholder="Telefonunuz " />
                <Input placeholder="Epostaniz" />
            </div>

            <div class="flex flex-row gap-6">
                 <Textarea placeholder="Adresiniz" />
            </div>
            <div>
                <button class="border-1 px-4 py-2 text-gray-700 border-gray-300 hover:(bg-gray-700 text-white)">Kayit ol</button>
            </div>
        </form>
    </Container>
</section>