<template>
    <div class="back">
        <ul class="list-control">
            <MenuItems title="Computer Based Test" bg="rgba(255, 36, 36, 0.35)" iconid="fa-solid fa-computer"/>
            <MenuItems title="Collection of courses" bg="rgba(72, 255, 36, 0.35)" iconid="fa-solid fa-book"/>
            <MenuItems title="Common Admission Form" bg="rgba(58, 36, 255, 0.35)" iconid="fa-solid fa-paperclip"/>
            <MenuItems title="Study Abroad" bg="rgba(255, 186, 36, 0.35)" iconid="fa-solid fa-plane-departure"/>
            <MenuItems title="Explore Collages & Degrees" bg="rgba(255, 36, 200, 0.35)" iconid="fa-solid fa-graduation-cap"/>
        </ul>
    </div>
</template>

<script>

    import MenuItems from './MenuItems.vue'
    export default {
        name: 'IconList',
        components : {
            MenuItems
        }
    }
</script>