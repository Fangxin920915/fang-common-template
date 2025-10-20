<template>
  <div class="demo-block">
    <div class="demo-block__preview">
      <slot name="demo" />
    </div>
    <div class="demo-block__control" @click="isExpanded = !isExpanded">
      <span class="demo-block__control-text">
        {{ isExpanded ? '隐藏代码' : '显示代码' }}
      </span>
      <svg
        class="demo-block__control-icon"
        :class="{ 'is-expanded': isExpanded }"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
        />
      </svg>
    </div>
    <div v-show="isExpanded" class="demo-block__source">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
  transition: all 0.2s;
}

.demo-block:hover {
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.demo-block__preview {
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-block__control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}

.demo-block__control:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.demo-block__control-text {
  font-size: 14px;
}

.demo-block__control-icon {
  width: 16px;
  height: 16px;
  fill: currentcolor;
  transition: transform 0.2s;
}

.demo-block__control-icon.is-expanded {
  transform: rotate(180deg);
}

.demo-block__source {
  border-top: 1px solid var(--vp-c-divider);
}

.demo-block__source :deep(div[class*='language-']) {
  margin: 0;
  border-radius: 0;
}

.demo-block__source :deep(.vp-code-group) {
  margin: 0;
}
</style>
