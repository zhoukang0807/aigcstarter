<!--
  * 名称：SvgIcon
  * @param name String required
  * @param size String | number
  * Usage:
  * Use <svg-icon><chat-icon></chat-icon></svg-icon> in template

  * 使用方式：
  * 在 template 中使用 <svg-icon><chat-icon></chat-icon></svg-icon>
-->
<template>
  <span class="svg-icon" :class="[customClass]" :style="customStyle" @click="handleClick">
    <component :is="icon" v-if="icon"></component>
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { addSuffix } from '../../../utils/utils';

interface Props {
  size?: string | number,
  responseSize?: string | number,
  customClass?: string,
  icon?: Component,
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

const customStyle = computed(() => (props.size ? `width: ${addSuffix(props.size)};height: ${addSuffix(props.size)};` : ''));

function handleClick(event: Event) {
  emit('click', event);
}
</script>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
