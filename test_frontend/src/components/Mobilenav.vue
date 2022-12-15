<template>
    <div class="mobile" v-if="isOpenHam">
        <ul class="mobilenavlist">
            <li class="navitem">Degrees</li>
            <li class="navitem">All Courses</li>
            <li class="navitem">Study Abroad</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'Mobilenav',
        props: ['isOpenHam']
    }
</script>

<style>
    .mobile{
        display: none;
    }
    @media(max-width: 600px){
        .mobile{
            width: 60%;
            position: absolute;
            display: flex;
            left: 40%;
            background-color: rgba(7, 2, 27, 0.733);
            height: 100vh;
            backdrop-filter: blur(4px);
        }
        .mobilenavlist{
            list-style: none;
            margin-top: 3rem;
            width: 100%;
        }
        .navitem{
            color: #fff;
            width: 100%;
            padding: 2rem;
        }
        .navitem:hover{
            background-color: rgba(94, 94, 94, 0.4);
        }
    }
</style>