<script setup>
import { ref, onMounted } from 'vue';
import LaurelWreath from './LaurelWreath.vue';

const textAnimationDone = ref(false);
const stars = ref([])

onMounted(() => {
    // Make laurel wreath appear earlier - reduced from 3000ms to 1000ms
    setTimeout(() => {
        textAnimationDone.value = true; // This triggers stars at 500ms
    }, 3000); // Changed to 500ms to match wreath timing

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        stars.value.push({
        id: i,
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            filter : `blur(${Math.random() * 5}px)`,
            backgroundColor : `${Math.random() > 0.5 ? 'white' : '#EDC001'}`
        }
     })
    }
});
</script>

<template>
    <div class="w-full h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] background-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <div v-if="textAnimationDone" class="absolute inset-0">
          <div v-for="star in stars" :key="star.id" :style="star.style" class="star"></div>
        </div>

        
        <!-- Laurel Wreath Background -->
        <div class="absolute w-auto h-auto z-0 opacity-[25%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LaurelWreath />
        </div>
        
        <!-- Main Text Container -->
        <div class="w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 z-10 relative">
            
            <!-- First Line: "Own Your Voice" -->
            <div class="flex flex-col items-center mb-8">
                <div class="animate-fade-in animation-delay-500 animation-fill-forwards">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white text-center leading-tight tracking-tight">
                        OWN YOUR 
                        <span class="block text-white unleashed-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">VOICE</span>
                    </h1>
                </div>
            </div>
            
            <!-- Golden Separator Line -->
            <div class="animate-fade-in animation-delay-1000 animation-fill-forwards my-6">
                <div class="w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#EDC001] to-transparent golden-glow"></div>
            </div>
            
            <!-- Second Line: "Earn Your Crown" -->
            <div class="flex flex-col items-center mt-8">
                <div class="animate-fade-in animation-delay-1500 animation-fill-forwards">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDC001] text-center leading-tight tracking-tight">
                        EARN YOUR 
                        <span class="block text-[#EDC001] unbound-text-shadow text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">CROWN</span>
                    </h2>
                </div>

            </div>
            
        </div>
    </div>
</template>

<style scoped>
.unleashed-shadow {
    text-shadow: 0 0 20px rgba(188, 156, 35, 0.8), 0 0 40px rgba(188, 156, 35, 0.4);

}

.unbound-text-shadow {
    text-shadow: 0 0 20px rgba(237, 192, 1, 0.8), 0 0 40px rgba(237, 192, 1, 0.4);
}

.golden-glow {
    box-shadow: 0 0 20px rgba(237, 192, 1, 0.6), 0 0 40px rgba(237, 192, 1, 0.3);
}

.star {
    position: absolute;
    width: 0.25rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 9999px;
    backdrop-filter: blur(100%);
    opacity: 0;
    animation: twinkle 5s infinite;
}

@keyframes twinkle {
    0% {
        opacity: 0;
        transform: scale(1);
        translate: 0 0;
    }
    50% {
        opacity: 0.7;
        transform: scale(1.5);
    }
    100% {
        opacity: 0;
        transform: scale(1);
        translate: 0 -30px;
    }
}

.background-gradient {
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: radial-gradient(75% 75% at 50% 50%, #000000 59%, #181818 100%);
}


/* Fade-in animation utilities */
.animate-fade-in {
    animation: fadeIn 1.2s ease-out;
    opacity: 0; /* This is controlled by CSS, not HTML */
}

.animation-delay-500 {
    animation-delay: 0.5s;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

.animation-delay-1500 {
    animation-delay: 1.5s;
}

.animation-fill-forwards {
    animation-fill-mode: forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Responsive text sizing */
@media (max-width: 640px) {
    h1, h2 {
        line-height: 1.1;
    }
}

@media (min-width: 1024px) {
    .w-full.max-w-6xl {
        max-width: 80rem;
    }

}
</style>