<script lang="ts" setup>
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import CompositionButton from '@/views/compositions/components/CompositionButton.vue'
import CompositionItems from '@/compositions'

type Icons = Record<string, string>

const loadingIcons = ref(true)
const icons: Ref<Icons | undefined> = ref()

// Dyanmically import icons
onMounted(async() => {
  icons.value = (await import ('@/utils/icons')).default as Icons
  loadingIcons.value = false
})

const getIcon = (name: string) => {
  if (icons.value)
    return icons.value[name]
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-28 lg:px-8">
    <u-headline class="text-4xl sm:text-4xl">
      Compositions
    </u-headline>
    <u-subtitle class="mt-4 text-textTwo">
      Collection of component compisitions using Unlocked for a variety of purposes.
    </u-subtitle>

    <div v-for="(category, index) in CompositionItems" :key="index" class="mt-14 md:mt-20">
      <div class="item flex flex-col md:flex-row border-b pb-4 border-interfaceContrast">
        <u-subtitle>
          <u-icon v-if="!loadingIcons" class="inline mr-2">
            {{ getIcon(category.icon) }}
          </u-icon>
          {{ category.name }}
        </u-subtitle>
        <u-subtitle class="text-textTwo md:ml-4">
          {{ category.desc }}
        </u-subtitle>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <template v-for="composition in category.items" :key="composition.name">
          <CompositionButton :item="composition" />
        </template>
      </div>
    </div>
  </div>
</template>
