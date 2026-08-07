<template>
    <a class="w-full h-8 sticky top-0 z-50" href="https://forms.gle/FkeHg1AnZ1LpR32q7" target="_blank">
        <div class="w-full h-full bg-gradient-to-r from-[#EDC001aa] via-[#fed001] to-[#EDC001aa] text-gray-800 flex items-center justify-center shadow-lg rounded-b-md">
            <div class="relative w-full h-full overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-shimmer"></div>
                <div class="relative z-10 font-bold text-center w-full h-full flex justify-center items-center">{{ message }}</div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
defineProps({
message: {
    type: String,
    required: true
}
})
</script>

<style scoped>
@keyframes shimmer {
0% {
    transform: translateX(-100%);
}
25% {
    transform: translateX(100%);
}
100% {
    transform: translateX(100%);
}
}

.animate-shimmer {
animation: shimmer 10s infinite;
}
</style>