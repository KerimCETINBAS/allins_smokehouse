
<script lang="ts">
    export let value: any = "";
    export let placeholder: string = "";
</script>


<textarea type="text" {value} {placeholder} class="px-3 py-2 outline-none border-1 rounded-sm border-gray-500 w-full h-42 resize-none focus:border-gray-800 palaceholder-gray-800" />