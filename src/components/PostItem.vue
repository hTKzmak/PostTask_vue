<script setup>
import { ref } from 'vue'
import ButtonElem from './UI/ButtonElem.vue';
import { usePostStore } from '@/stores/postStore';

const props = defineProps({
    info: Object,
})

let displayComments = ref('false')
let commentsBtn = ref('Комментарии')

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

</script>

<template>
    <div class="post-item" :id="info.id">
        <h2>{{ info.title }}</h2>
        <div v-if="displayComments">
            <div class="post-item-buttons">
                <!-- <ButtonElem title="Удалить" :funcAction="deleteHandle"/> -->
                <button class="justBtn" @click="showComments">{{ commentsBtn }}</button>
                <p>Кол-во комментариев: {{ info.comments.length }}</p>
                <button class="justBtn">Изменить</button>
                <button class="justBtn deletBtn" @click="deleteHandle(info.id)">Удалить</button>
            </div>
        </div>
        <div v-else>
            <div class="post-item-comments">
                <div class="add-comment">
                    <input type="text" id="add-comment" placeholder="Новый пост">
                    <ButtonElem title="Добавить" :funcAction="addHandle" />
                </div>

                <!-- Лист с комментариями, в котором будет commentItem (с комментарием и с кнопкой удаления)  -->

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


.deletBtn {
    background-color: #FF218B;
}
</style>