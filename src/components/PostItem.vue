<script setup>
import { reactive, ref, defineProps, watch } from 'vue'
import ButtonElem from './UI/ButtonElem.vue';
import { usePostStore } from '@/stores/postStore';
import CommentsList from './CommentsList.vue'

const props = defineProps({
    info: Object
})

let displayComments = ref('false')
let commentsBtn = ref('Комментарии')
let InputComment = ref('')
let showChanger = usePostStore().showChanger


function deleteHandle(id) {
    usePostStore().deletePost(id)
}

function showComments() {
    displayComments = !displayComments
    if (displayComments) {
        commentsBtn.value = 'Комментарии'
    }
    else {
        commentsBtn.value = 'Спрятать'
    }
}


function addCommHandle(id, value) {
    usePostStore().addComment(id, value)
}

function getInfoHandle(id, title){
    usePostStore().getPostInfo(id, title)
}

// title будет изменяться после внесения изменений в showChanger.title
// нужен для изменения title после изменений в ChangerPost.vue
watch(() => showChanger.title, (newTitle) => {
    const post = props.info;
    if (post.id === showChanger.id) {
        post.title = newTitle
    }
});

</script>

<template>
    <div class="post-item" :id="info.id">
        <h2>{{ info.title }}</h2>
        <div v-if="displayComments">
            <div class="post-item-buttons">
                <button class="justBtn" @click="showComments">{{ commentsBtn }}</button>
                <p>Кол-во комментариев: {{ info.comments.length }}</p>
                <button class="justBtn" @click="getInfoHandle(info.id, info.title)">Изменить</button>
                <button class="justBtn deleteBtn" @click="deleteHandle(info.id)">Удалить</button>
            </div>
        </div>
        <div v-else>
            <div class="post-item-comments">
                <div class="add-comment">
                    <input type="text" id="add-comment" placeholder="Новый пост" v-model="InputComment">
                    <button class="justBtn" @click="addCommHandle(info.id, InputComment)">Добавить</button>
                </div>

                <CommentsList :info="info" />

                <button class="justBtn" @click="showComments">{{ commentsBtn }}</button>
            </div>
        </div>
    </div>
</template>

<style>
.post-item {
    background-color: #FCFBFB;
    padding: 16px 25px;
    width: 800px;
    border-radius: 15px;
    border: 2px solid #0094FF;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.post-item-buttons,
.post-item-comments {
    border-top: 1px solid #9C9C9C;
    padding-top: 15px;
}

.post-item-buttons {
    display: flex;
    justify-content: space-between;
}


.add-comment {
    display: flex;
    justify-content: space-between;
}

#add-comment {
    width: 75%;
    border-radius: 15px;
    border: 1px solid #6E6E6E;
    font-size: 16px;
    padding: 3px 10px;
}


.deleteBtn {
    background-color: #FF218B;
}
</style>