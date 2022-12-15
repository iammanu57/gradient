<template>
    <div class="topbar">
        <Login text="Login" @click="togglelogin()"/>
          | 
        <SignUp text="Signup" @click="togglesignup()"/>
    </div>
</template>

<script>
    import Login from './Login.vue'
    import SignUp from './SignUp.vue'

    export default {
        name: 'Top',
        components: {
            Login, SignUp
        },
        methods:{
            togglesignup(){
                this.$emit('toggleSignup')
            },
            togglelogin(){
                this.$emit('toggleLogin')
            }
        },
        emits: ['toggleSignup','toggleLogin']
    }
</script>

<style>
    
</style>