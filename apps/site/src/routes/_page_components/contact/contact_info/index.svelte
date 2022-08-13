<script lang="ts">
    //import Container from "@allins/libs.components/container.svelte";
    import SectionHeader from "@allins/libs.components/section_header.svelte";
    import Input from "@allins/libs.components/input.svelte";
    import Textarea from "@allins/libs.components/textarea.svelte";
    
    </script>

<div id="contact-info" >
        
    <div>
        <SectionHeader theme="light"  text="Iletisim Bilgileri" />
    
        <ul class="flex flex-col">
            <li>
                <div class="icon">
                    <i class="fa fa-phone fa-2x p-4 text-gray-700"></i>
                </div>
                <div class="text">
                    <span>Telefon numarasi</span>
                    <a href="/"> (282) 000 00 00</a>
                </div>
            
            </li>
            <li>
                <div class="icon">
                    <i class="fa-solid fa-location-dot text-gray-700 fa-2x p-4"></i>
                </div>
                <div class="text">
                    <span>Adres</span>
                    <address> Corlu tekirdaf</address>
                </div>
            </li>
            <li>
                <div class="icon">
                    <i class="fa fa-envelope text-gray-700 fa-2x p-4"></i>
                </div>
                <div class="text">
                    <span>Adres</span>
                    <address> Corlu tekirdaf</address>
                </div>
            </li>
        </ul>
    </div>
   
    <div class="mt-12 w-full">
        <SectionHeader theme="light"  text="Iletisim Formu" />
        <form action="" class="grid grid-cols-2 gap-6 pt-8">
            <Input placeholder="Adiniz" />
            <Input placeholder="Epostaniz"/>
            <div class="col-span-2">
                <Textarea  placeholder="Mesajiniz" />
            </div>
            <button class="border-1 py-2 text-gray-600 hover:(bg-gray-800 text-white)">Gonder</button>
        </form>
    </div>
</div>

<style lang="less"> 
    #contact-info {
        ul {
            @apply py-4;
            li {
                @apply flex flex-row mt-2;
                
                .icon {
                    @apply w-18;
                }
                .text { 
                    @apply flex flex-col  p-2;
                    span {
                        @apply flex flex-col gap-2  text-gray-700 text-xl;
                        font-family: 'Pirata One', cursive;
                    }

                    a, address {
                        @apply  text-gray-400 text-sm;
                        font-family: 'Mukta', cursive;
                    }
                }
            }
        }
    }
</style>