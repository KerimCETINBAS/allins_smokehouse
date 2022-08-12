<script lang="ts">
    export let text: string = ""
    export let color: string = "white"
</script>
<span id="section-subheader" class="text-{color}">{text}</span>

<style lang="less">
    #section-subheader {
        @apply relative pl-16 text-sm tracking-widest;
        font-family: 'Mukta', sans-serif;
        &::before {
            content: "";
            @apply absolute w-12 border-t left-0 top-1/2 border-gray-600;

        }
    }
</style>