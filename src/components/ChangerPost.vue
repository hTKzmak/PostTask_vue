<script setup>
import { usePostStore } from '@/stores/postStore';
import { ref, watch } from 'vue';

let showChanger = usePostStore().showChanger
let textValue = ref('')

// textValue будет автоматически обновляться при изменении id в showChanger
// нужен для отображения текста в textarea (так как используется v-model, то используется данный код для изменения значения в textarea)
watch(() => showChanger.id, (newId) => {
    const post = usePostStore().postData.find(post => post.id === newId)
    if (post) {
        textValue.value = post.title
    }
})

function changerHandle(value){
    usePostStore().changePostValue(value)
}

</script>

<template>
    <div :class="showChanger.value ? 'change-post showChanger' : 'change-post hideChanger'">
        <div class="changer-item">
            <textarea id="textArea" cols="30" rows="10" v-model="textValue">{{ showChanger.title }}</textarea>
            <div class="changer-buttons">
                <button class="justBtn" @click="changerHandle(textValue)">Подтвердить</button>
                <button class="justBtn exitBtn" @click="showChanger.value = false">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<style>
.hideChanger {
    display: none;
}

.showChanger {
    display: flex;
}

.change-post {
    height: 100vh;
    width: 100vw;
    background-color: #6C9EFF96;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    opacity: 1;
    pointer-events: all;
    z-index: 1;
}

.changer-item {
    background-color: #FCFBFB;
    border: 2px solid #0094FF;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 15px;
    padding: 20px;
}

.changer-buttons{
    display: flex;
    gap: 27px;
    justify-content: end;
    margin-top: 16px;
}

textarea{
    border: 1px solid #6E6E6E;
    border-radius: 15px;
    padding: 10px;
    font-size: 24px;
    width: 715px;
    height: 113px;
    resize: none;
}


.exitBtn {
    background-color: #FF218B;
}
</style>