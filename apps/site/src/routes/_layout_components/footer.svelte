<script>
    import Container from "@allins/libs.components/container.svelte";
    import HeaderDashed from "@allins/libs.components/header_dashed.svelte";
    import Logo from "@allins/libs.components/logo.svelte";
    
    </script>
    
    <footer class="bg-dark-900">
        <section >
            <Container>
                <div class="grid grid-cols-4 gap-8 py-22">
                    <div>
                        <Logo color="text-white" size={5}/>
                        <p  id="grid-1-2">
                            Steakhouse the nunc bibe endum in finibus elit the solli citudin elit.
                        </p>
    
                        <div id="grid-1-3">
                             <a href="/"> 
                                <i class="fa-brands fa-facebook-f"></i>
                             </a>
                             <a href="/">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
    
                            <a href="/">
                                <i class="fa-brands fa-whatsapp"></i>'
                            </a>
                        </div>
                    </div>
                    <div>
                        <HeaderDashed text="Telefon & Eposta" />
                        <ul 
                        id="grid-2-2"
                        class="flex flex-col py-4 gap-3">
                            <li>
                                <a href="/">0 (282) 000 00 00</a>
                            </li>
                            <li>
                                <a href="/">0 allins@gmail.com</a>
                            </li>
                        </ul>
                    </div>
    
                    <div>
                        <HeaderDashed text="Adresimiz" />
                        <address 
                        id="grid-3-2"
                        class="py-4">
                            24 King St, Charleston, SC 29401 USA
                        </address>
                    </div>
    
                    <div>
                        <HeaderDashed text="Calisma Saatleri" />
                        <ul 
                        id="grid-2-2"
                        class="flex flex-col py-4 gap-3">
                            <li>
                               <span>Hafta ici 9 - 11</span>
                            </li>
                            <li>
                                <span>Cumartesi ici 10 - 2</span>
                            </li>
                            <li>
                                <span>Pazar kapali</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
        <section class="border-t-1 border-dashed border-gray-600 py-12">
            <Container>
               <div 
                id="footer-bottom"
                class="text-white text-sm flex flex-col gap-5">
                    <div>
                        <span>© 2021 Winta . All right reserved.</span>
                    </div>
                    <div>
                        <span>Terms & Conditions</span>
                    </div>
               </div>
            </Container>
        </section>
    </footer>
    
    
    <style lang="less">
        #grid-1-2 {
            @apply my-4 text-gray-300 leading-relaxed text-sm;
            font-family: 'Mukta', sans-serif;
        }
    
        #grid-1-3 {
            @apply grid grid-cols-3;
            a i {
                @apply text-3xl text-white;
            }
        }
        #grid-2-2 {
            @apply text-gray-300 text-sm;
        }
    
        #grid-3-2 {
            @apply text-gray-300 text-sm;
        }
    
        #grid-4-2 {
            @apply text-gray-300 text-sm;
        }
    
    
        #footer-bottom {
            font-family: 'Mukta', sans-serif;
        }
    </style>