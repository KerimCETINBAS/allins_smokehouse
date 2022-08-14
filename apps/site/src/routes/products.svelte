<script>
import Banner from "@allins/libs.components/banner.svelte";
import Container from "@allins/libs.components/container.svelte";



</script>
<section>
    <Banner pageHeader="Urunlerimiz" pageSubHeader="Bir birinden lezzetli tatlari deneyin" bg="4.jpg" />
</section>


<section class="py-23 bg-light-700">

    <Container>

        <div class="grid grid-cols-4 gap-4">
            <div class="product-card">
                <div id="price">
                    <strong>42 TL</strong>
                </div>
                <img src="1.jpg" alt="">
                <h3>Kuzu kokorec - normal kiyim</h3>
                <div id="ingredients">
                    <ol>
                        <li>Tuz</li>
                        <li>Pul Biber</li>
                        <li>Kimyon</li>
                        <li>Kekik</li>
                     </ol>
                </div>

              
                <div class="text-left p-4">
                   Siparis vermek icin tiklayiniz
                </div>
            </div>


          
        </div>
    </Container>
</section>


<style lang="less">
    .product-card {
        @apply flex flex-col relative w-full bg-dark-400 text-gray-200 text-center;

        img {
            filter: brightness(.5)
        }
        h3 {
            @apply font-semibold text-sm  uppercase p-4;
        }
        
        #ingredients {
            @apply  h-32 px-4 ;
            ol {
            @apply flex flex-row flex-wrap gap-2 ;
            li {
                @apply bg-dark-900 px-2 h-8 py-1 cursor-pointer;
            }
        }
        }

        div#price {
            @apply absolute  top-0 left-0  z-1  text-left p-4;
            strong {
                @apply text-left text-white;
            }
        }
    }
</style>