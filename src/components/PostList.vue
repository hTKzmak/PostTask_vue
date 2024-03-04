<script setup>
import PostItem from './PostItem.vue';
import { usePostStore } from '@/stores/postStore';

let postStore = usePostStore()
let postData = usePostStore().postData

// console.log(postData)

</script>

<template>
    <div class="post-list">
        <div v-for="info in postData">
            <PostItem :info="info" />
        </div>
    </div>
</template>

<style>
.post-list {
    margin-top: 60px;
    display: grid;
    justify-content: center;
    gap: 37px;
}
</style>