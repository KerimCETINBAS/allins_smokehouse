
<script lang="ts">
    export let src: string = "";
    export let alt: string = "";
</script>
<div class="h-full">
    <img class="w-full  h-full object-cover size" {src} {alt} />
</div>



<style lang="less">
    img {
        @apply duration-300 object-cover;
        &:hover {
            @apply w-[97%] h-[97%] p-[3%];
            
        }
    }
</style>