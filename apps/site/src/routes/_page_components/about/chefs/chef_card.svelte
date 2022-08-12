<script>

import HoverableImage from "@allins/libs.components/hoverable_image.svelte";

</script>
<div>
    <div  class="w-full h-62">
        <HoverableImage  src="/1.jpg"  alt="" />
    </div>
    <h3>Haydar Dumen</h3>
    <p>Bas asci</p>
 
</div>


<style lang="less">
    h3 {
        @apply text-2xl text-dark-900 mt-6 text-center;
        font-family: 'Pirata One', cursive;
    }

    p {
        @apply relative  text-dark-900 text-lg font-semibold pt-2 text-center;
        font-family: 'Mukta', sans-serif;
    }

    a{
        @apply text-xl text-gray-700 mt-6 border-dashed border-b-1 border-gray-700;
        font-family: 'Pirata One', cursive;
    }
</style>