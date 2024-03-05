<script setup>
import { usePostStore } from '@/stores/postStore';

let showChanger = usePostStore().showChanger
console.log('res:', showChanger)

</script>

<template>
    <div :class="showChanger.value ? 'change-post showChanger' : 'change-post hideChanger'">
        <div class="changer-item">
            <textarea name="" id="" cols="30" rows="10">{{ showChanger.title }}</textarea>
            <div class="changer-buttons">
                <button class="justBtn">Подтвердить</button>
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
    padding: 50px;
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
}

.exitBtn {
    background-color: #FF218B;
}
</style>