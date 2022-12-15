<template>
    <div class="login">
        <my-icons icon="fa-solid fa-user" />
        <button>{{text}}</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: ['text'],
    }
</script>

<style scoped>
    button{
        border: none;
        background: none;
        padding: 0.5em;
        font-size: 12px;
        cursor: pointer;
        color: white;
    }
</style>