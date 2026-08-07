<template>
  <div class="w-full flex justify-center items-center mb-9">
    <div class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <div class="w-full flex flex-col items-start mb-9">
        <h1 class="text-3xl lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white">
          Our Partners
        </h1>
      </div>
      
      <!-- Updated partner types: replaced "Normal" with the three new categories -->
      <div v-for="type in ['Platinum', 'Gold', 'Silver', 'Gift', 'Wristband', 'Leisure','Education']" :key="type" class="mb-8">
        <template v-if="getPartnersByType(type).length > 0">
          <h2 class="text-xl lg:text-2xl font-semibold mb-4" 
              :class="getPartnerTypeClass(type)">
            {{ type }} Partners
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="partner in getPartnersByType(type)" :key="partner.id" class="partner-box col-span-1">
              <div class="backdrop-brightness-150 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform w-full h-full border border-gray-700">
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <img v-if="partner.name !== 'mystery'" 
                       :src="partner.imageUrl" 
                       :alt="partner.name" 
                       :class="[partner.bgStyle, getPartnerImageClass(partner)]">
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-question mb-4">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/>
                    <path d="M12 17h.01"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      
      <div v-if="partners.length === 0" class="text-center">
        No partners available at the moment.
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// Add your new partner logos here
import platinumLogo from '../assets/logos/platinumlogo.png'
import gold1Logo from '../assets/logos/gold1logo.png'
import gold2Logo from '../assets/logos/gold2logo.png'
import gold3Logo from '../assets/logos/gold3logo.png'
import silverLogo from '../assets/logos/silverlogo.png'
import normal1Logo from '../assets/logos/normal1logo.png'
import normal2Logo from '../assets/logos/normal2logo.jpeg'
import normal3Logo from '../assets/logos/normal3logo.png'
import educationlogo from '../assets/logos/educationlogo.jpg'
// import normal4Logo from '../assets/logos/normal4logo.png'

const partners = ref([
  // Platinum
  {
    id: 10,
    name: 'Platinum Partner',
    imageUrl: platinumLogo,
    partnershipType: 'Platinum',
    bgStyle: "bg-white",
  },
  // Gold
  {
    id: 11,
    name: 'Gold Partner 1',
    imageUrl: gold1Logo,
    partnershipType: 'Gold',
    bgStyle: "bg-white",
  },
  {
    id: 12,
    name: 'Gold Partner 2',
    imageUrl: gold2Logo,
    partnershipType: 'Gold',
    bgStyle: "bg-white",
  },
  {
    id: 13,
    name: 'Gold Partner 3',
    imageUrl: gold3Logo,
    partnershipType: 'Gold',
    bgStyle: "bg-white",
  },
  // Silver
  {
    id: 14,
    name: 'Silver Partner',
    imageUrl: silverLogo,
    partnershipType: 'Silver',
    bgStyle: "bg-white",
  },
  // Replaced Normal with specific partner types
  {
    id: 22,
    name: 'Gift Partner',
    imageUrl: normal2Logo,
    partnershipType: 'Gift',
    bgStyle: "bg-white",
  },
  {
    id: 21,
    name: 'Wristband Partner',
    imageUrl: normal3Logo,
    partnershipType: 'Wristband',
    bgStyle: "bg-white",
  },
  {
    id: 20,
    name: 'Leisure Partner',
    imageUrl: normal1Logo,
    partnershipType: 'Leisure',
    bgStyle: "bg-white",
  },
  {
    id: 23,
    name: 'Education Partner',
    imageUrl: educationlogo,
    partnershipType: 'Education',
    bgStyle: "bg-white",
  },
])

// Function to filter partners by partnership type
const getPartnersByType = (type) => {
  return partners.value.filter(partner => partner.partnershipType === type)
}

// New function to get the appropriate CSS class for each partner type
const getPartnerTypeClass = (type) => {
  switch(type) {
    case 'Platinum': return 'text-slate-100 drop-shadow-lg';
    case 'Gold': return 'text-amber-300 drop-shadow-lg';
    case 'Silver': return 'text-slate-300 drop-shadow-lg';
    case 'Gift': return 'text-orange-300 drop-shadow-lg';
    case 'Wristband': return 'text-orange-300 drop-shadow-lg';
    case 'Leisure': return 'text-orange-300 drop-shadow-lg';
    case 'Education': return 'text-orange-300 drop-shadow-lg';
    default: return 'text-orange-300 drop-shadow-lg';
  }
}

// New function to determine image sizing based on partner
const getPartnerImageClass = (partner) => {
  // Keep Ideal Motors (id: 13) at full width, make others smaller
  if (partner.partnershipType === 'Gold' && partner.id == 11 ) {
    return 'w-2/4 object-contain'; // Makes Dan & Ken 50% width
  }
  if (partner.partnershipType === 'Gold' && partner.id == 13) {
    return 'w-3/4 object-contain'; // Makes Ideal Motors 75% width
  }
  if (partner.partnershipType === 'Gold' && partner.id == 12) {
    return 'w-3/4 object-contain'; // Makes Euro Motors 75% width
  }
  // Make Gift, Wristband, Leisure, and Platinum partners smaller
  if (['Gift', 'Wristband', 'Leisure', 'Platinum'].includes(partner.partnershipType)) {
    return 'w-2/4 object-contain'; // Makes these partner types 50% width
  }
  return 'w-full object-contain'; // Default full width for all other logos
}
</script>

<style scoped>
.partner-box {
  @apply flex flex-col;
}
</style>