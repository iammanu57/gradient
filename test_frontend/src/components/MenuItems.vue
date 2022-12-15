<template>
    <li class="item">
        <my-icons class='square' :style="{background: bg}" :icon=iconid />
        {{title}}
    </li>
</template>

<script>
    export default{
        name: 'MenuItem',
        props: ['title','bg','iconid']
    }
</script>