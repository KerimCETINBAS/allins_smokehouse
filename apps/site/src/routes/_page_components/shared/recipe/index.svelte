<script>
    import Container from "@allins/libs.components/container.svelte";
    import SectionHeader from "@allins/libs.components/section_header.svelte";
    import SectionSubheader from "@allins/libs.components/section_subheader.svelte";
    import RecipeCard from "./recipe_card.svelte";
    
    </script>
    <div class="bg-dark-600 py-22">
        <Container>
            <div>
                <SectionSubheader text="SON HABERLER" />
                <SectionHeader text="Tariflerimiz" />
    
                <div class="grid grid-cols-3 gap-12 pt-12">
                    {#each Array(3) as _ }
                        <RecipeCard />
                    {/each}
                </div>
            </div>
        </Container>
    </div>