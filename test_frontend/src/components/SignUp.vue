<template>
    <div class="signup">
        <my-icons icon="fa-solid fa-user-plus" />
        <button>{{text}}</button>
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
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