<script lang="ts">
    export let text:string = ""
</script>
 <h2 id="section-header">
    <span class="text-gray-700">
        {text.split(" ")[0] || ""}
    </span>
    <span>
        {text.split(" ")[1] || ""}
    </span>
    
</h2>

<style lang="less">
    #section-header {
        @apply relative  text-white text-5xl tracking-wide;
        font-family: 'Pirata One', cursive;
    }
</style>