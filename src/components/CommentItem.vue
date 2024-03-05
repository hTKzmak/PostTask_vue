<script setup>
import CommentItem from './CommentItem.vue';
import { usePostStore } from '@/stores/postStore';

const props = defineProps({
    info: Object,
    comm: Object,
})

</script>

<template>
    <div class="comment-item">
        <div class="comment">
            <p>{{ comm.text }}</p>
        </div>
        <button class="justBtn deleteBtn" @click="usePostStore().deleteComment(info.id, comm.id)">Удалить</button>
    </div>
</template>

<style>
.comment-item {
    display: flex;
    justify-content: space-between;
}

.comment {
    width: 75%;
    border-radius: 15px;
    border: 1px solid #6E6E6E;
    font-size: 16px;
    padding: 3px 10px;

    align-items: center;
    display: flex;
}

.comment > p {
    margin: 0;
}
</style>