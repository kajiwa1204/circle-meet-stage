<script setup lang="ts">
import { usePlatformChoice } from "../composables/usePlatformChoice";

// showSwitch: false にすると、切り替えボタンを出さず中身だけ出し分ける。
// Part 0 で選んだ状態を引き継ぐだけでよい箇所で使う。
withDefaults(defineProps<{ showSwitch?: boolean }>(), { showSwitch: true });

const { platform, setPlatform } = usePlatformChoice();
</script>

<template>
  <div class="platform-tabs">
    <div v-if="showSwitch" class="platform-tabs__switch" role="tablist">
      <button
        type="button"
        role="tab"
        :aria-selected="platform === 'mac'"
        :class="{ 'is-active': platform === 'mac' }"
        @click="setPlatform('mac')"
      >
        macOS
      </button>
      <button
        type="button"
        role="tab"
        :aria-selected="platform === 'win'"
        :class="{ 'is-active': platform === 'win' }"
        @click="setPlatform('win')"
      >
        Windows
      </button>
    </div>

    <!-- v-show なので、切り替えてもスクロール位置やコードの見た目が保たれる -->
    <div v-show="platform === 'mac'" class="platform-tabs__panel">
      <slot name="mac" />
    </div>
    <div v-show="platform === 'win'" class="platform-tabs__panel">
      <slot name="win" />
    </div>
  </div>
</template>

<style scoped>
.platform-tabs__switch {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
}

.platform-tabs__switch button {
  padding: 0.25rem 1.1rem;
  border: 1px solid rgba(127, 127, 127, 0.5);
  border-radius: 999px;
  font-size: 0.9rem;
  line-height: 1.6;
  transition: all 0.15s;
}

.platform-tabs__switch button:hover {
  border-color: #2e7d6b;
}

.platform-tabs__switch button.is-active {
  border-color: #2e7d6b;
  background: #2e7d6b;
  color: #fff;
}
</style>
