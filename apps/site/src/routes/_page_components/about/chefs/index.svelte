<script>
    import Container from "@allins/libs.components/container.svelte";
    import SectionHeader from "@allins/libs.components/section_header.svelte";
    import SectionSubheader from "@allins/libs.components/section_header.svelte";
    import ChefCard from "./chef_card.svelte";
    
    </script>
    <div class="bg-light-900 py-22">
        <Container>
            <div>
                <SectionHeader text="Seflerimiz" />
    
                <div class="grid grid-cols-3 gap-12 pt-12">
                    {#each Array(3) as _ }
                        <ChefCard />
                    {/each}
                </div>
            </div>
        </Container>
    </div>