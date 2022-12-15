<template>
    <Transition name="fade" appear>
        <div class="head" v-if="isOpenCourse">
            <div class="courses">
                <ul class="course-control">
                    <li>Science</li>
                    <li>Commerce</li>
                    <li>Education</li>
                </ul>
            </div>
        </div>
    </Transition>
</template>

<script>
import { Transition } from 'vue';

    export default{
    name: "Head",
    props: ["isOpenCourse"],
    components: { Transition }
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active{
        transition: all .5s ease-out;
    }

    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    .course-control{
        list-style: none;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.4);
        width:fit-content;
    }
    .course-control li{
        font-size: 1rem;
        cursor: pointer;
        width: 100%;
        padding: 1rem;
        color: aliceblue;
    }
    .course-control li:hover,
    .course-control :active{
        background: rgba(200,200,200,0.9);
        color: #222;
    }

</style>