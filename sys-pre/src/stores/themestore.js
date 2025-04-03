// stores/themeStore.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const isDarkMode = ref(false)

    // 监听变化并应用到HTML标签
   watch(isDarkMode, (val) => {
        document.documentElement.classList.toggle('dark', val)
        localStorage.setItem('darkMode', val)
    }, { immediate: true })

    function toggleTheme() {
        console.log("changed theme")
        isDarkMode.value = !isDarkMode.value
        console.log(isDarkMode.value)
    }

    return {isDarkMode,toggleTheme }
})