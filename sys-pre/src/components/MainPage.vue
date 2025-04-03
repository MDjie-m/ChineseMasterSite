<template>
  <div :class="['min-h-screen flex flex-col transition-colors duration-300', isDarkMode ? 'bg-gray-900' : 'bg-white']">
    <!-- 顶部导航栏 -->
    <header :class="['fixed top-0 left-0 right-0 border-b z-50 transition-colors duration-300', isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100']">
      <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img :src="logoUrl" alt="Logo" class="h-8 w-8 object-contain" />
          <span :class="['text-xl font-bold', isDarkMode ? 'text-white' : 'text-black']">中国研究网</span>
        </div>
        <div class="flex items-center space-x-8">
          <a href="#" :class="['hover:text-gray-900 transition-colors', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600']">看看介绍</a>
          <a href="#"
             @mouseenter="showOptions = true"
             :class="['hover:text-gray-900 transition-colors relative', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600']">
            找找学长学姐
          </a>
          <a href="#" :class="['hover:text-gray-900 transition-colors', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600']">给资问题</a>
          <a href="#" :class="['hover:text-gray-900 transition-colors', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600']">人肉导师</a>
          <a href="#" :class="['hover:text-gray-900 transition-colors', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600']">我的站长</a>
          <button
              @click="toggleTheme "
              class="flex items-center space-x-1 transition-colors"
              :class="[isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900']">
            <el-icon class="text-xl">
              <component :is="isDarkMode ? 'Moon' : 'Sunny'" />
            </el-icon>
            <span>{{ isDarkMode ? '熬夜冲刺' : '白天猛学' }}</span>
          </button>
        </div>
        <div class="flex items-center space-x-4">
          <el-button type="primary" class="!rounded-button whitespace-nowrap">
            注册
          </el-button>
          <el-button :class="['!rounded-button whitespace-nowrap', isDarkMode ? 'text-white border-gray-600' : '']">
            登录
          </el-button>
        </div>
      </nav>
    </header>
    <!-- 主要内容区域 -->
    <main class="container mx-auto px-4 pt-24 pb-32">
      <div v-show="showOptions"
           @mouseleave="showOptions = false"
           :class="['rounded-lg p-8 mb-12 transition-colors duration-300', isDarkMode ? 'bg-gray-800' : 'bg-gray-50']">
        <h2 :class="['text-xl font-medium mb-6', isDarkMode ? 'text-white' : '']">想干嘛：</h2>
        <div class="grid grid-cols-2 gap-8">
          <a href="#" :class="['p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer', isDarkMode ? 'bg-gray-700' : 'bg-white']">
            <el-icon class="text-3xl text-blue-600 mb-4"><Document /></el-icon>
            <h3 :class="['text-lg font-medium mb-2', isDarkMode ? 'text-white' : '']">取联系</h3>
            <p :class="[isDarkMode ? 'text-gray-300' : 'text-gray-600']">快速获取导师联系方式，开启学术交流</p>
          </a>
          <a href="#" :class="['p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer', isDarkMode ? 'bg-gray-700' : 'bg-white']">
            <el-icon class="text-3xl text-green-600 mb-4"><Folder /></el-icon>
            <h3 :class="['text-lg font-medium mb-2', isDarkMode ? 'text-white' : '']">买原味资料</h3>
            <p :class="[isDarkMode ? 'text-gray-300' : 'text-gray-600']">获取最新研究资料，助力学术研究</p>
          </a>
        </div>
      </div>
    </main>
    <!-- 底部导航 -->
    <footer :class="['py-12 sticky bottom-0 w-full transition-colors duration-300', isDarkMode ? 'bg-gray-800' : 'bg-gray-50']">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <div class="flex space-x-4">
              <a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600']">
                <el-icon><Position /></el-icon>
              </a>
              <a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600']">
                <el-icon><Message /></el-icon>
              </a>
              <a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600']">
                <el-icon><VideoPlay /></el-icon>
              </a>
              <a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600']">
                <el-icon><Link /></el-icon>
              </a>
            </div>
          </div>
          <div>
            <h4 :class="['font-medium mb-4', isDarkMode ? 'text-white' : '']">使用场景</h4>
            <ul class="space-y-2">
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">界面设计</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">用户体验</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">原型设计</a></li>
            </ul>
          </div>
          <div>
            <h4 :class="['font-medium mb-4', isDarkMode ? 'text-white' : '']">探索</h4>
            <ul class="space-y-2">
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">设计规范</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">原型制作</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">开发特性</a></li>
            </ul>
          </div>
          <div>
            <h4 :class="['font-medium mb-4', isDarkMode ? 'text-white' : '']">资源</h4>
            <ul class="space-y-2">
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">博客</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">最佳实践</a></li>
              <li><a href="#" :class="['transition-colors', isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">配色方案</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { useThemeStore } from "@/stores/themestore";
import { storeToRefs } from 'pinia'
import { Document, Folder, Position, Message, VideoPlay, Link, Moon, Sunny, Timer, Clock } from '@element-plus/icons-vue';

export default {
  name: 'MainPage',
  setup() {
    const {isDarkMode,toggleTheme} = storeToRefs(useThemeStore())
    const showOptions = ref(false)
    watch(isDarkMode, (newVal) => { // 监听主题变化
      console.log('mode changed:', newVal);
    });

    return {
      isDarkMode,
      showOptions,
      toggleTheme,
      Document, Folder, Position, Message, VideoPlay, Link, Moon, Sunny, Timer, Clock
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 1440px;
}
/* Dark mode styles */
:deep(.el-button) {
  transition: all 0.3s ease;
}
:deep(.el-button--default) {
  background-color: transparent;
}
</style>
