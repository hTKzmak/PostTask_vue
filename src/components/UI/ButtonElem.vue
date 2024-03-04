<script>
export default {
    props: ['title', 'funcAction']
}
</script>

<template>
    <button class="justBtn" @click="funcAction">{{ title }}</button>
</template>

<style></style>