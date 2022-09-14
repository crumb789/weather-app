<template>
    <div class="slide-wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>

.slide-wrapper{
    display: flex;
    max-width: 300px;

    justify-content: center;
    align-items: center;
    column-gap: 14px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

</style>