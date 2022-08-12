<script>
    import Container from "@allins/libs.components/container.svelte";
    import SectionHeader from "@allins/libs.components/section_header.svelte";
    import SectionSubheader from "@allins/libs.components/section_subheader.svelte";
    
    </script>
    
    
    
    <div class="h-202 bg-dark-900">
        <Container>
            <div class="py-22 flex flex-col gap-6">
                <SectionSubheader text="STEAK & SARAP" />
                <SectionHeader text="Gunun Menusu" />
            </div>
    
            <div class="grid grid-cols-3 gap-12">
                
                {#each Array(6) as _ }
                    <div class="card bg-dark-700 h-52 flex items-center px-12 ">
                       <div class="card-cover  duration-300">
                            <img class="card-img" src="/cow.svg" alt="">
                            <h3 class="card-header pt-4">Starters</h3>
                       </div>
                       <div class="hidden card-list duration-300">
                            <h3 class="card-header">Starters</h3>
                            <ul class="text-white">
                                {#each Array(5) as _, i }
                                    <li> Menu {i} ..... { ( Math.random() * 122) .toFixed(2)}</li>
                                {/each}
                            </ul>
                          
                       </div>
                    </div>
                {/each}
                
    
                
            </div>
        </Container>
    </div>
    
    
    <style lang="less">
        .card {
            @apply cursor-pointer;
            .card-header {
                @apply text-3xl text-white;
                font-family: 'Pirata One', cursive;
            }
        }
        .card:hover {
            .card-cover {
                @apply hidden;
            }
            .card-list {
                @apply block;
            }
          
    
    
        }
    </style>