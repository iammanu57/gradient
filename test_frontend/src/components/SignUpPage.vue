<template>
    <div v-if="isOpenSignUp" class="signup-box">
        <div class="adspaces">

        </div>
        <div class="formspace">
            <img src="./SSlogo.png" alt="logo" />
            <p class="tagline">Lets learn and grow together...</p>
            <form class="signup-form" @submit="onSubmit">
                <div class="form-blocks">
                    <input type="text" placeholder="Full Name" v-model="name"/>
                </div>
                <div class="form-blocks">
                    <input type="email" placeholder="Email Address" v-model="mail"/>
                </div>
                <div class="form-blocks">
                    <input type="number" placeholder="Phone Number" v-model="number"/>
                </div>
                <div class="form-blocks">
                    <input type="password" placeholder="Create Password" v-model="password"/>
                </div>
                <div class="form-blocks">
                    <input type="password" placeholder="Confirm Password" v-model="cpassword"/>
                </div>
                <button type="submit" class="submitbtn">Create</button>
                <p class="logintoggler">Already have an account? <span @click="logintoggle">Login</span></p>
            </form>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: 'SignUpPage',
        props: ['isOpenSignUp'],
        data(){
            return{
                name: null,
                mail: null,
                number: null,
                password: null,
                cpassword: null
            }
        },
        methods: {
            logintoggle() {
                this.$emit('logintoggle')
            },
            onSubmit(e){
                e.preventDefault();
                console.log(this.$data)
                this.name=null
                this.mail=null
                this.number=null
                this.password=null
                this.cpassword=null
            }
        },
        emits: ['logintoggle']
    }
</script>

<style scoped>
    .signup-box{
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
        margin-bottom: 2rem;
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
    .logintoggler{
        font-weight: 100;
        font-size: 13px;
        margin-top: 1rem;
    }
    .logintoggler>span{
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