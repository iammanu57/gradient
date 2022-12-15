<template>
    <div v-if="isOpenLogin" class="login-box">
        <div class="adspaces">

        </div>
        <div class="formspace">
            <img src="./SSlogo.png" alt="logo" />
            <p class="tagline">Lets learn and grow together...</p>
            <form class="login-form" @submit="loginsubmit">
                <div :class="['form-blocks']">
                    <input type="email" placeholder="Email Address" v-model="mail"/>
                </div>
                <div :class="['form-blocks']">
                    <input type="password" placeholder="Password" v-model="password"/>
                </div>
                <button type="submit" class="submitbtn">Login</button>
                <p class="signuptoggler"><span @click="signuptoggle()">Create a new account</span></p>
            </form>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: 'LoginPage',
        props: ['isOpenLogin'],
        data(){
            return{
                mail: null,
                password: null
            }
        },
        methods: {
            signuptoggle(){
                this.$emit('signuptoggle')
            },
            loginsubmit(e){
                e.preventDefault()

                if(this.mail==null){
                    console.log('Mail empty')
                }

                console.log(this.$data)
                this.mail=null
                this.password=null
            }
        },
        emits: ['signuptoggle']
    }
</script>

<style scoped>
    .login-box{
        position: fixed;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-43%);
        width: 35rem;
        height: 30rem;
        color: #222;
        display: flex;
    }
    .adspaces{
        width: 40%;
        background-color: rgb(207, 142, 0);
    }
    .formspace{
        margin: 0 auto;
        background-color: rgb(241, 241, 241);
        width: 60%;
    }
    .formspace img{
        width: 12rem;
        margin-top: 2rem;
    }
    .tagline{
        font-weight: 100;
        font-size: 13px;
        margin-left: 4rem;
        margin-bottom: 5rem;
    }
    .form-blocks{
        width: 80%;
        margin: .9rem auto;
    }
    .form-blocks>input{
        border: 1px solid rgba(34, 34, 34, 0.411);
        padding: 0.5rem;
        width: 100%;
    }
    .error{
        border: 2px solid red;
    }
    .form-blocks>input:hover
    {
        background-color: rgba(15, 173, 235, 0.315);
    }
    .submitbtn{
        width: 80%;
        border: none;
        background-color: rgba(0, 153, 255, 0.801);
        padding: 0.5rem;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        color: white;
        letter-spacing: 1px;
        transition: .5s;
    }
    .submitbtn:hover{
        letter-spacing: 2px;
        cursor: pointer;
        background-color: rgb(49, 104, 255);
    }
    .signuptoggler{
        font-weight: 100;
        font-size: 13px;
        margin-top: 1rem;
    }
    .signuptoggler>span{
        color: blue;
        border-bottom: 1px solid blue;
        cursor: pointer;
    }
    @media(max-width:600px){
        .adspaces{
            display: none;
        }
    }
    @media(max-width:450px){
        .formspace{
            width:max-content;
        }
    }

    
</style>