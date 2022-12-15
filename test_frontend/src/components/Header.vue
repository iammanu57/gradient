<template>
    <header class="header">
        <div class="left">
            <img src="./SSlogo.png" alt="logo" />
            <my-icons  :class="[isOpenHam?'cross':'hamburger']" @click="hamswitch()" icon="fa-solid fa-bars" /> 
            <my-icons  :class="[isOpenHam?'hamburger':'cross']" @click="hamswitch()" icon="fa-solid fa-xmark" /> 
        </div>
        <div class="right">
            <Button @click="course()" @mouseover="course()" text="All Courses" color="aqua" />
            <Button @click="degrees()" @mouseover="degrees()" text="Degrees" color="aqua" />
            <Button @click="abroad()" @mouseover="abroad()" text="Study Abroad" color="orange" />
        </div>
        <div class="righter">
            <BlueButton text="Get Counseling" color="blue" />
        </div>
    </header>
    <Head />
</template>

<script>
    import Button from './Button.vue'
    import BlueButton from './BlueButton.vue'

    export default{
        name: 'Header',
        props:{
            isOpenHam: Boolean
        },
        components: {
            Button,
            BlueButton
        },
        methods:{
            course(){
                this.$emit('switch')
            },degrees(){
                this.$emit('change')
            },abroad(){
                this.$emit('toggle')
            },
            hamswitch(){
                this.$emit('hamswitch')
            }
        },
        emits: ['switch','change','toggle','hamswitch']
    }
</script>

<style>
    header{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        z-index: 1;
        background-color: rgb(255, 255, 255);
        width: 100%;
        box-shadow: 3px 3px 5px rgba(17, 17, 17, 0.329);
    }
    .left{
        display: flex;
        align-items: center;
    }
    .hamburger,.cross{
        display: none;
    }
    .right{
        display: flex;
        /* gap: 1rem; */
        align-items: center;
    }
    p{
        font-weight: 700;
        font-size: 20px;
    }
    .btn{
        border: none;
        background: transparent;
        font-size: 13px;
        margin: 0 1rem;
    }
    .btn:hover{
        border-bottom: 2px solid rgb(27, 0, 102);
        cursor: pointer;
    }
    .bluebtn{
        border: none;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 13px;
        cursor: pointer;
        color: aliceblue;

    }
    .left img{
        width: 8rem;
        background-size: cover;
    }
</style>