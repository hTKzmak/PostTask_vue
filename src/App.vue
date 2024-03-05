<script setup>
import { ref } from 'vue'

import AddPost from './components/AddPost.vue';
import PostList from './components/PostList.vue';
import ChangerPost from './components/ChangerPost.vue';

</script>

<template>
    <div class="container">
        <ChangerPost/>
        <AddPost/>
        <PostList/>
    </div>
</template>

<style>
</style>
