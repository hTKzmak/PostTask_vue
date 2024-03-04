<script setup>
import CommentItem from './CommentItem.vue';
import { usePostStore } from '@/stores/postStore';


const props = defineProps({
    info: Object,
})

</script>

<template>
    <div class="comments-list">
        <div v-for="comm in info.comments">
            <CommentItem :comm="comm" :info="info"/>
        </div>
    </div>
</template>

<style>
.comments-list{
    display: grid;
    row-gap: 31px;
    margin-top: 31px;
    margin-bottom: 31px;
}
</style>