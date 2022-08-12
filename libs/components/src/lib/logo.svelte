<script lang="ts">
    export let color: string = ""
    export let size: number = 5;
</script>

<section id="logo" class="inline-block">
    <div id="logo-upper" class="text-6xl">
        <strong class="{color} text-{size}xl">
            ALLINS
        </strong>
    </div>
    <div id="logo-bottom" class="text-xs px-1 bg-gray-600 text-white font-extralight tracking-widest">
            SMOKEHOUSE
    </div>
</section>


<style lang="less">
      #logo {
            #logo-upper {
                font-family: 'Pirata One', cursive;
                font-weight: 100;
                letter-spacing: .2rem;
            }
            #logo-bottom {
            
                    font-family: 'Mukta', sans-serif;
                    text-align: center;
            }

      
        }
</style>