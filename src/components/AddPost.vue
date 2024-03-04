<script setup>
import { ref, computed } from 'vue'
import ButtonElem from './UI/ButtonElem.vue';

import { usePostStore } from '@/stores/postStore';

let InputValue = ''

function addHandle(value) {
    usePostStore().addPost(InputValue)
}

</script>

<template>
    <header>
        <div class="add-post">
            <input type="text" id="add-post" placeholder="Новый пост" v-model="InputValue">
            <ButtonElem title="Добавить" :funcAction="addHandle" />
        </div>
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: center;
}

.add-post {
    display: flex;
    justify-content: space-between;

    background-color: #FCFBFB;
    padding: 16px 25px;
    border-radius: 15px;
    border: 2px solid #0094FF;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 800px;
}

#add-post{
    width: 561px;
    border-radius: 15px;
    border: 1px solid #6E6E6E;
    font-size: 24px;
    padding: 10px;
}
</style>