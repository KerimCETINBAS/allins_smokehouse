<div class="bg-true-gray-200 flex-1 p-12">
       <div id="header" class=" flex flex-col items-center ">
            <span>ACIK SAATLER</span>
            <h3 class=" border-b-1 border-dashed border-b-red-500">Rezervasyon Icin Arayiniz</h3>
       </div>

       <div id="hours" class="flex flex-row justify-between">
            <div>
                <div>
                    <span>Hafta ici</span>
                </div>
                <ul>
                    <li>10:00</li>
                    <li>22:00</li>
                </ul>
            </div>
            <div>
                <div>
                    <span>Hafta sonu</span>
                </div>
                <ul>
                    <li>12:00</li>
                    <li>19:00</li>
                </ul>
            </div>

       </div>

       
       <div class="flex items-center justify-center p-5">
            <a href="/" class="w-full text-center border-1 w-62 py-2 px-3 border-gray-800"> (282) 000 00 00 </a>
        </div>
</div>

<style lang="less">

    #header {
        span {
            @apply leading-loose text-gray-500;
            font-family: 'Mukta';
        }
        h3 {
            @apply text-4xl leading-loose text-gray-700;
            font-family: 'Pirata One', cursive;
        }
    }

    #hours {
        @apply text-center;
        div span {
            @apply block text-center p-3 pt-12;
            font-family: 'Mukta';
        }

        ul li {
            @apply text-3xl p-1  text-gray-700;
            font-family: 'Pirata One', cursive;
        }
    }
    
    a {
        @apply text-2xl   text-gray-700;
            font-family: 'Pirata One', cursive;
    }
</style>