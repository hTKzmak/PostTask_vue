<script setup>
import CommentItem from './CommentItem.vue';
import { usePostStore } from '@/stores/postStore';
import ButtonElem from './UI/ButtonElem.vue';

const props = defineProps({
    info: Object,
    comm: Object,
})

function deleteHandle(){
    usePostStore().deleteComment(props.info.id, props.comm.id)
}

</script>

<template>
    <div class="comment-item">
        <div class="comment">
            <p>{{ comm.text }}</p>
        </div>
        <ButtonElem title="Удалить" class="deleteBtn" :funcAction="deleteHandle" />
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