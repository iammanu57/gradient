<template>
    <button v-on:click="onClick()" :style="{background: color}" class="bluebtn">{{ text }}</button>
</template>

<script>
    export default{
        name: 'BlueButton',
        props: ['text','color'],
        methods: {
            onClick(){
                console.log('Its clicked')
            }
        }
    }
</script>

<style>
    

</style>