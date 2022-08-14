<script>
    import Container from "@allins/libs.components/container.svelte"
    import Logo from "@allins/libs.components/logo.svelte";

    
</script>



<div class="w-full  p-[10px] absolute top-0 z-999  ">
    <Container>
        <aside >
            <ul class="flex flex-row gap-8 text-white justify-end mt-4">
                <li><a sveltekit:prefetch href="/"><i class="fa-brands fa-whatsapp"></i> (282) 000 00 00</a></li>
                <li><a sveltekit:prefetch href="/login">Giris</a></li>
                <li><a sveltekit:prefetch href="/register">Kayit</a></li>
               
             </ul>
        </aside>
        <div id="header" class="h-[143.5px] flex flex-row" >
           <Logo />
            <section id="nav" class="<lg:hidden">
                <nav>
                    <ul>
                       <li><a sveltekit:prefetch href="/">
                                <i class="fa fa-home"></i>
                           </a>
                        </li>
                       <li><a sveltekit:prefetch href="/products">Products</a></li>
                       <li><a sveltekit:prefetch href="/about">About</a></li>
                       <li><a sveltekit:prefetch href="/menu">Menu</a></li>
                       <li><a sveltekit:prefetch href="/gallery">Gallery</a></li>
                       <li><a sveltekit:prefetch href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </section>

            <section id="nav-collapse-button" class="lg:hidden">
                <span><i class="fa-solid fa-bars text-3xl"></i></span>
            </section>
          </div>
            
    </Container>
    
</div>



<style lang="less">
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&family=Pirata+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&family=Pirata+One&display=swap');

    #header {
        @apply text-white; 
        @apply flex flex-row justify-between items-center;
     
        #nav {
         
          nav ul {
            @apply flex flex-row gap-9 justify-center items-center;
            li {
                @apply text-xl;
                font-family: 'Pirata One', cursive;
            }
          }
        }
    }
</style>
