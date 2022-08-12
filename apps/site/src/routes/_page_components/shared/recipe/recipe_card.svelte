<script lang="ts">
    import HoverableImage from "@allins/libs.components/hoverable_image.svelte";

</script>
<div>
    <div  class="w-full h-62">
        <HoverableImage  src="/1.jpg"  alt="" />
    </div>
    <h3>Burder Big Daddy Receipt</h3>
    <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis...</p>
    <a href="/">Detaylar</a>
</div>


<style lang="less">
    h3 {
        @apply text-3xl text-white mt-6;
        font-family: 'Pirata One', cursive;
    }

    p {
        @apply relative my-6 text-white text-sm;
        font-family: 'Mukta', sans-serif;
    }

    a{
        @apply text-xl text-gray-700 mt-6 border-dashed border-b-1 border-gray-700;
        font-family: 'Pirata One', cursive;
    }
</style>