
<script lang="ts">
    export let name:string = "Mozzarella Dippers";
    export let price:number = 55;
    export let description: string = "Fried mozzarella sticks, marinara sauce";
</script>
<div id="menu-item">
    <h3 class=""> {name} <span>{price}   &#8378;</span></h3>
    <p class="text-white text-sm mt-2"> {description} </p>
</div>



<style lang="less">
    #menu-item {
        h3 {
            @apply flex flex-row justify-between text-gray-700 text-2xl border-dashed border-b border-b-gray-500;
            font-family: 'Pirata One', cursive;
            span {
                @apply text-3xl;
            }
        }
        
    }
</style>