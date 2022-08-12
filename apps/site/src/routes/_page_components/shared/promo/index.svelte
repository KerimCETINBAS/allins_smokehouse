<script lang="ts">
    import Container from "@allins/libs.components/container.svelte";
    import { onMount } from "svelte";
        export let theme: "dark" | "light" = "dark"
    
        let promoBg:HTMLElement;
        
        onMount(()=> {
            const attr = promoBg.getAttribute("data-img") || ""
            promoBg.style.backgroundImage = `url("${attr}")`
            promoBg.style.height = `334px`
        })
    </script>
    
    <div class="relative {theme}" >
        <div id="promo-bg" bind:this="{promoBg}"  class="w-full  h-72"  data-img="/1.jpg" >
             
        </div>
    
        <div class="absolute top-0 left-0 w-full h-full py-12">
            <Container>
                <div class="flex flex-row gap-22">
                    <div class="w-1/2 flex flex-col">
                       <span class="w-30 h-30 rounded-1 bg-red-600 bg-opacity-75 flex items-center justify-center">
                        <i class="fa-solid fa-play fa-3x text-white"></i>
                   
                       </span>
                       <h4 id="promo-vid">Promo videosu izle</h4>
                    </div>
                    <div class="relative w-1/2">
                        <div id="promo-card" class="{theme == "dark" ? 'bg-dark-900': 'bg-light-900'}">
                            <div class="flex flex-col">
                                <span>REZERVASYON ICIN ARAYINIZ</span>  
                                <h3>Calisma Saatleri</h3>
                                <div id="working-times" class="flex flex-row pt-5">
                                    <div class="w-full">
                                        <h5>Hafta ici</h5>
                                        <ul>
                                            <li>10:00</li>
                                            <li>22:00</li>
                                        </ul>
                                    </div>
                                    <div class="w-full">
                                        <h5>Hafta sonu</h5>
                                        <ul>
                                            <li>12:00</li>
                                            <li>19:00</li>
                                        </ul>
                                    </div>
                                </div>
    
                                <button id="number" class="border-1 m-8 p-4 rounded  border border-gray-800 text-white items-center justify-center hover:bg-gray-700 cursor-pointer">0 (282) 00 00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
            <div class="flex-1 {theme == "dark" ? "bg-true-gray-800" : "bg-light-300"} py-22 z-11 ">
                <Container>
                    <div id="promo-bottom-section">
                        <div class="w-1/2">
                            <h3>Want to cook something tasty? Read our best recipes.</h3>
                            <a href="/">Yer ayirt</a>
                        </div>
                    </div>
                </Container>
        </div>
    </div>
    
    
    <style lang="less">
        #promo-bg {
            @apply w-full bg-cover bg-no-repeat ;
            background-image: url("/1.jpg");
            background-repeat: no-repeat;
            filter:  brightness(45%) saturate(110%);
            background-attachment: fixed;
        }
    
      
    
        .dark {
            #promo-bottom-section {
                @apply text-2xl text-white;
                font-family: 'Pirata One', cursive;
    
                a {
                    font-family: 'Mukta', sans-serif;
                    @apply text-sm px-6 py-3 mt-3 rounded-sm bg-true-gray-900 inline-block  uppercase;
                    
                }
    
            }
            #promo-card {
                @apply mx-12 h-112 p-12;
                span {
                    @apply text-center text-white;
                    font-family: 'Mukta', sans-serif;
                }
    
                h3 {
                    @apply text-5xl text-gray-700 p-5 border-dashed border-b-1 border-red-900;
                    font-family: 'Pirata One', cursive;
    
                }
    
                #working-times {
                    @apply w-full  text-gray-700 p-5 ;
                    h5 {
                        @apply text-white w-full text-center pb-4;
                        font-family: 'Mukta', sans-serif;
                    }
    
                    ul li {
                        @apply text-3xl text-center;
                        font-family: 'Pirata One', cursive;
                    }
                }
    
                #number {
                    @apply text-xl text-center;
                    font-family: 'Pirata One', cursive;
                }
    
            
            }
        }
    
        .light {
            #promo-bottom-section {
                @apply text-2xl ;
                font-family: 'Pirata One', cursive;
    
                a {
                    font-family: 'Mukta', sans-serif;
                    @apply text-sm px-6 py-3 rounded-sm text-white bg-gray-700 inline-block  uppercase;
                    
                }
    
            }
            #promo-card {
            @apply mx-12 h-112 p-12;
            span {
                @apply text-center text-gray-700;
                font-family: 'Mukta', sans-serif;
            }
    
            h3 {
                @apply text-5xl text-gray-700 p-5 border-dashed border-b-1 border-red-900;
                font-family: 'Pirata One', cursive;
    
            }
    
            #working-times {
                @apply w-full  text-gray-700 p-5 ;
                h5 {
                    @apply text-gray-700 w-full text-center pb-4;
                    font-family: 'Mukta', sans-serif;
                }
    
                ul li {
                    @apply text-3xl text-center;
                    font-family: 'Pirata One', cursive;
                }
            }
    
            #number {
                @apply text-xl text-center text-gray-700;
                font-family: 'Pirata One', cursive;
                &:hover {
                    @apply text-white;
                }
            }
    
          
        }
        }
    
        #promo-vid {
                @apply text-4xl text-white mt-6;
                font-family: 'Pirata One', cursive;
            }
    </style>