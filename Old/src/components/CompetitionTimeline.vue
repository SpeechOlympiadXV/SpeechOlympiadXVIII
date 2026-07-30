<template>
    <div class="p-9 m-9 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-xl w-[90%] ml-[5%] md:w-[80%] md:ml-[10%] mr-auto">
    <div class="">
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2 w-[80%] text-wrap">
        Timeline
        </h2>
        <p class="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
        Key stages and dates
        </p>
    </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
            
        <div
        v-for="(stage, index) in stages"
        :key="stage.name"
        class="relative my-8 w-full sm:w-[100%] mx-auto"
        >
            <!-- Vertical line -->
            <div :class="['absolute overflow-visible top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform sm:-translate-x-1/2 w-[1px] ', stage.id === stages.length ? 'h-0' : 'h-[120%]', stage.lineStyle]"></div>
            
            <!-- Diamond shape -->
            <div
              :class="['absolute top-12 sm:left-[52%] md:left-[51.5%] lg:left-[50.5%] xl:left-[48.5%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45', stage.diamondStyle]"
            >
              <!-- inner diamond for non focused sections-->
              <div class="absolute w-2 h-2 bg-[#272722] left-[25%] top-[25%]" :class="[stage.upcoming && 'hidden']">
              </div>
          </div>
            
            <div
              class="sm:ml-8 flex flex-col sm:flex-row items-center sm:justify-between sm:items-start mb-4"
            >
              <div class="pl-[10%] w-[90%] sm:pl-8">
                <div :class="['flex w-[100%] items-center mb-2', stage.id % 2 == 0 ? 'justify-start' : 'justify-end']">
                  <div :class="['ml-0 w-full sm:w-[45%] p-4 flex flex-col mb-5 rounded-lg', stage.id % 2 == 0 ? 'sm:text-end' : '', stage.upcoming === true ? 'backdrop-brightness-200 border-[1px] border-[#edc00155]' : 'backdrop-brightness-125']">
                    <h3 class="text-xl md:text-2xl lg:text-3xl font-semibold mb-4" :class="[stage.upcoming ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EDC001]' : 'text-gray-400']">
                      {{ stage.name }}
                    </h3>
                    <time class="text-sm xl:text-md" :class="[stage.upcoming ? 'text-gray-200' : 'text-gray-400']">
                      {{ stage.date }}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <section class="mt-8">
        <button class="flex items-center justify-center w-56 h-12 bg-[#a78e1d] text-gray-100 rounded-lg hover:bg-[#7d6c22] transition-colors hover:text-white" @click="click('#semi')">
          Current Standings
        </button>
      </section> -->
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "EnhancedVerticalCompetitionTimeline",
    methods : {
      click(urlString) {
        window.location.href = urlString
      }
    },
    setup() {
      const stages = ref([
        {
          id : 1,
          name: "Preliminary Round",
          date: "31st August, 2025",  
          upcoming : false,
          lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc00133]',
          diamondStyle: 'bg-[#594d1b]',
        },
        {
          id : 2,
          name: "Semi Finals",
          date: "14th September, 2025",
          upcoming : false,
          lineStyle: 'bg-gradient-to-b from-[#edc00133] to-[#edc001]',
          diamondStyle: 'bg-[#594d1b]',
        },
        {
          id : 3,
          name: "Finals",
          date: "30th September, 2025",
          upcoming : true,
          lineStyle: 'bg-gradient-to-t from-[#edc00133] to-[#edc001]',
          diamondStyle: 'color-pulse',
        },
      ]);
  
      return { stages };
    },
  });
  </script>
  
<style scoped>
.visibiliy {
    display: none;
}

.color-pulse {
  background-color: #edc001;
  animation: color-pulse 3s linear infinite;
}

@keyframes color-pulse {
  40% {
    background-color: #edc001;
  }

  50% {
    background-color: #edc001;
  }

  80% {
    background-color: #ffe675;
  }
}

@media (min-width: 640px) {
    .visibiliy {
        display: block;
    }
}
</style>
  