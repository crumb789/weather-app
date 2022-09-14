<template>
    <div class="slide-wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>

.slide-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

</style>