<script lang="ts">
    import Container from "@allins/libs.components/container.svelte";
    import HoverableImage from "@allins/libs.components/hoverable_image.svelte";
    import SectionHeader from "@allins/libs.components/section_header.svelte";
    import SectionSubheader from "@allins/libs.components/section_subheader.svelte";
    import Data from "./home.data"
    
    export let theme: "light" | "dark" = "dark"
    </script>
    
    <div class="{theme}">
        
    <Container>
        <div id="about" class="flex h-auto flex-row gap-12 pb-22">
            <div class="w-1/2 flex flex-col gap-8">
                <SectionSubheader color={theme == "light" ? "gray-900" : "white"}  text={Data.about.sectionHeader}/>
                <SectionHeader text={Data.about.sectionMainHeader} />
                {#each Data.about.paragraph as paragraph }
                    <p class="text-dark-500 section-paragraph">{paragraph}</p>
                {/each}
            </div>
            <div class="w-1/2 flex-1 self-start grid grid-cols-2 grid-rows-3 gap-8">
                <div class="col-span-2 row-span-2">
                    <HoverableImage src="/about1.jpg"  alt="" />
                </div>
    
                <div >
                    <HoverableImage  src="/about2.jpg" alt="" />
                </div>
    
                <div id="year" class="relative border-8   border-true-gray-700">
                    <h2 
                    data-text="Yıllık Tecrübe"
                    class="">  <span>25</span>  </h2>
                </div>
            </div>
        </div>
    </Container>
    </div>
    
    
    <style lang="less">
    
    
        .light {
    
            .section-paragraph {
                @apply text-white text-sm text-gray-900;
                font-family: 'Mukta', sans-serif;
            }
    
            #year {
                h2 {
                    font-family: 'Pirata One', cursive;
                    @apply text-7xl z-1 w-full absolute -left-2 text-gray-700 top-8 bg-white;
                    &::before {
                        content: "";
                        @apply absolute w-10 h-10 -z-1 -top-5 left-7 rounded-1 bg-white;
                    }
                    &::after {
                        content: attr(data-text);
                        @apply absolute text-dark-700 text-sm w-full left-0 -bottom-4 z-2 bg-white;
                        font-family: 'Mukta', sans-serif;
                    }
                }
            }
    
        }
    
        .dark {
            .section-paragraph {
                @apply text-white text-sm ;
                font-family: 'Mukta', sans-serif;
            }
    
            #year {
                h2 {
                    font-family: 'Pirata One', cursive;
                    @apply text-7xl z-1 w-full absolute -left-2 text-gray-700 top-8 bg-dark-700;
                    &::before {
                        content: "";
                        @apply absolute w-10 h-10 -z-1 -top-5 left-7 rounded-1 bg-dark-900;
                    }
                    &::after {
                        content: attr(data-text);
                        @apply absolute text-dark-700 text-sm w-full left-0 -bottom-4 z-2 bg-dark-700;
                        font-family: 'Mukta', sans-serif;
                    }
                }
            }
    
        }
    </style>