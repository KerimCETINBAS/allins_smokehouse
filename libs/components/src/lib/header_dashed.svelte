<script lang="ts">
    export let text: string = ""
</script>

<div>
    <h3>
        {text}
    </h3>
</div>


<style lang="less">
    h3 {
        @apply pb-2 text-white text-2xl font-light border-dashed;
        @apply border-b-1 border-gray-600;
        font-family: 'Pirata One', cursive;
    }
</style>