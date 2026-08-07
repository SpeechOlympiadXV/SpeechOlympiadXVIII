<template>
    <div class="max-w-[1288px] w-[90%] sm:w-[80%] rounded-xl mx-auto my-9 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm">
    <div class="px-9 py-9 mx-auto"> 
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2">
            Finalists
        </h2>

        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-8">
            With unwavering spirit and brilliance, you've conquered the stage—each moment a testament to your talent.
        </div>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-1">
            Now, the final stage awaits—where your journey becomes <span class="text-xl sm:text-2xl italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#edc001] to-cyan-600">Unbound</span>.
        </div>
    </div>
    <div class="flex h-full w-full items-center justify-center px-4">
        <div class="w-[100%] max-w-full px-4"> 
            <ul
                name="fade"
                tag="ul"
                class="flex flex-row gap-7 justify-center flex-wrap"
            >
                <li
                v-for="(item, index) in grid_data_finals"
                :key="`item-${index}`"
                :class="['card-width card-height rounded-lg card-background-final overflow-hidden transition-all duration-300 ease-in-out p-[1px]']"
                :aria-current="hoverIndex === index ? 'true' : 'false'"
                @mouseenter="hoverIndex = index"
                @mouseleave="hoverIndex = null"
                >
                <img class="h-full w-full object-cover rounded-lg" :src="item.image" />
                <div
                    v-show="hoverIndex === index"
                    class="hidden sm:flex absolute top-0 left-0 right-0 items-center justify-center p-4 bg-opacity-50"
                >
                    <p class="typing-effect" style="color: ghostwhite">{{ item.text }}</p>
                </div>
                <div class="block sm:hidden absolute left-0 bottom-0 sm:bottom-2  w-full" style="color: ghostwhite">
                    <p class="w-[90%] mx-auto text-center text-[#edc001] p-2 bg-gray-900 bg-opacity-40 h-12 sm:h-16 font-normal sm:font-extrabold text-[10px] sm:text-xs">
                    {{ item.text }}
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="px-9 py-9 mx-auto"> 
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2">
            Reserved Finalists
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
                :class="{ 'animate-elementL': (number >= reserved_f[0].number) }">
                <div class="flex flex-col items-center">
                    <span class="text-center text-md md:text-lg">{{ reserved_f[0].text }}</span>
                </div>
            </div>
    
        </div>
    </div>
    
        <div class="px-9 py-9 mx-auto"> 
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2">
            Semi Finalists
        </h2>

        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-8">
            With grace and passion, you've emerged into the spotlight—each word you've spoken has been magic.
        </div>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-1">
            Now, the journey to be <span class="text-xl sm:text-2xl italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#edc001] to-[#ff5e5e]">Unleashed</span>, begins.
        </div>
    </div>
    <div class="flex h-full w-full items-center justify-center px-4">
        <div class="w-[100%] max-w-full px-4"> 
            <ul
                name="fade"
                tag="ul"
                class="flex flex-row gap-7 justify-center flex-wrap"
            >
                <li
                v-for="(item, index) in gridData_1"
                :key="`item-${index}`"
                :class="['card-width card-height rounded-lg card-background-semi overflow-hidden transition-all duration-300 ease-in-out p-[1px]']"
                :aria-current="hoverIndex === index ? 'true' : 'false'"
                @mouseenter="hoverIndex = index"
                @mouseleave="hoverIndex = null"
                >
                <img class="h-full w-full object-cover rounded-lg" :src="item.image" />
                <div
                    v-show="hoverIndex === index"
                    class="hidden sm:flex absolute top-0 left-0 right-0 items-center justify-center p-4 bg-opacity-50"
                >
                    <p class="typing-effect" style="color: ghostwhite">{{ item.text }}</p>
                </div>
                <div class="block sm:hidden absolute left-0 bottom-0 sm:bottom-2  w-full" style="color: ghostwhite">
                    <p class="w-[90%] mx-auto text-center text-[#edc001] p-2 bg-gray-900 bg-opacity-40 h-12 sm:h-16 font-normal sm:font-extrabold text-[10px] sm:text-xs">
                    {{ item.text }}
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-9 py-9 mx-auto"> 
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2">
            Reserved Semi Finalists
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
    
            <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
                :class="{ 'animate-elementL': (number >= reserved_1[0].number) }">
                <div class="flex flex-col items-center">
                    <span class="text-center md:text-lg">{{ reserved_1[0].text }}</span>
                </div>
            </div>
    
            <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
                :class="{ 'animate-elementL': (number >= reserved_1[1].number) }">
                <div class="flex flex-col items-center">
                    <span class="text-center md:text-lg">{{ reserved_1[1].text }}</span>
                </div>
            </div>
    
            <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
                :class="{ 'animate-elementL': (number >= reserved_1[2].number) }">
                <div class="flex flex-col items-center">
                    <span class="text-center text-md md:text-lg">{{ reserved_1[2].text }}</span>
                </div>
            </div>
    
            <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
                :class="{ 'animate-elementL': (number >= reserved_1[3].number) }">
                <div class="flex flex-col items-center">
                    <p class="text-center text-md md:text-lg">{{ reserved_1[3].text }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
  
<script>

// import afra from '../assets/images/SemiFinalists/Afra.jpg'
// import chathura from '../assets/images/SemiFinalists/Chathura.jpg'
// import damsith from '../assets/images/SemiFinalists/Damsith Adikari.jpeg'
// import adeepa from '../assets/images/SemiFinalists/Adeepa_.jpg'
// import hasindu from '../assets/images/SemiFinalists/Hasindu Warnapura.jpg'
// import lakindu from '../assets/images/SemiFinalists/Lakindu.png'
// import oshan from '../assets/images/SemiFinalists/Oshan Yalegama.jpg'
// import pasindu from '../assets/images/SemiFinalists/Pasindu_M..png'
// import varun from '../assets/images/SemiFinalists/Poobalaraja Varun .jpg'
// import saai from '../assets/images/SemiFinalists/Saai Syvendra.jpg'
// import sasindi from '../assets/images/SemiFinalists/Sasindi.jpg'

import aloka_f from '../assets/images/finalists/final/aloka.png'
import afra_f from '../assets/images/finalists/final/afra.png'
import neela_f from '../assets/images/finalists/final/neela.png'
import thulasi_f from '../assets/images/finalists/final/thulasi.png'
import ami_f from '../assets/images/finalists/final/ami.png'


import aloka from '../assets/images/finalists/aloka.png'
import afra from '../assets/images/finalists/afra.png'
import neela from '../assets/images/finalists/neela.png'
import anuja from '../assets/images/finalists/anuja.png'
import harshi  from '../assets/images/finalists/harshi.png'
import ranuja from '../assets/images/finalists/ranuja.png'
import ravitha from '../assets/images/finalists/ravitha.png'
import thulasi from '../assets/images/finalists/thulasi.png'
import unduli from '../assets/images/finalists/unduli.png'
import ami from '../assets/images/finalists/ami.png'
import nethu from  '../assets/images/finalists/nethu.png'
import hemi from  '../assets/images/finalists/hemi.png'

export default {


    data() {
        
        return {
            activeItem: null ,
            hoverIndex: null ,


            // gridData_2: [
            //     { text: "Adeepa Kularathne", image: adeepa, number: 0 },
            //     { text: "Afrah Rumie", image: afra, number: 1 },
            //     { text: "Amirthavarshani Ananthan", image: ami, number: 2 },
            //     { text: "Chathura Gunasekara", image: chathura, number: 3 },
            //     { text: "Damsith Adikari", image: damsith, number: 4 },
            //     { text: "Hasindu Warnapura", image: hasindu, number: 5 },
            //     { text: "Lakindu Kariyawasam", image: lakindu, number: 6 },
            //     { text: "Oshan Yalegama", image: oshan, number: 7 },
            //     { text: "Pasindu Weerasinghe", image: pasindu, number: 8 },
            //     { text: "Poobalaraja Varun", image: varun, number: 9 },
            //     { text: "Saai Syvendra", image: saai, number: 10 },
            //     { text: "Sasindi Peiris", image: sasindi, number: 11 },
            //     // Add more items as needed
            // ],

            grid_data_finals : [
                { text: "Afrah Rumie", image: afra_f, number: 1 },
                { text: "Aloka Fernando", image: aloka_f, number: 4 },
                { text: "Neelayadhakshi Priyadhakshan", image: neela_f, number: 6 },
                { text: "Thulasithan Gnanenthiram", image: thulasi_f, number: 10 },
                { text: "Amirthavarshani Ananthan", image: ami_f, number: 12 },
            ],

            gridData_1: [
                
                { text: "Afrah Rumie", image: afra, number: 1 },
                { text: "Aloka Fernando", image: aloka, number: 4 },
                { text: "Amirthavarshani Ananthan", image: ami, number: 12 },
                { text: "Anuja Mahamalage", image:anuja, number: 3 },
                { text: "Harshi Gunawardhane", image: harshi , number: 5 },
                { text: "Hemindi Kalubovila", image: hemi, number: 14 },
                { text: "Neelayadhakshi Priyadhakshan", image: neela, number: 6 },
                { text: "Nethu Lamahewa", image: nethu, number: 13 },
                { text: "Ranuja Jayawardena", image: ranuja, number: 7 },
                { text: "Ravitha Perera", image: ravitha, number: 8 },
                { text: "Thulasithan Gnanenthiram", image: thulasi, number: 10 },
                { text: "Unduli Senadheera", image: unduli, number: 11 },


                // Add more items as needed
            ],

            reserved_f : [
                { text: "Unduli Senadheera", number: 1 },
            ],

            reserved_1: [
            { text: "Hasith Nettikumara", number: 13 },
            { text: "Rasika Gunasekera", number: 14 },
            { text: "Sadil Jayatilaka", number: 15 },
            { text: "Thilakshan Balakrishnan", number: 16 },

            ],

            reserved_2: [
                { text: "Hesandu Hemal", number: 12 },
                { text: "Inodee Fernando", number: 13 },
                { text: "Safnas Kaldeen", number: 14 },
                { text: "Savinu Aththanayake", number: 15 },

                // Add more items as needed
            ],
            animate: false,
            final: false,
            semi: false,
            number: -1
        };
    },
    methods: {
        increment() {
            if (this.number != 16) {
                setTimeout(() => {
                    this.number = this.number + 1;
                    console.log(this.number)
                    this.increment()
                }, 300)
            }
        },

        setActive(index) {
            this.activeItem = index;},

        toggleActive(index) {
            console.log("Index clicked:", index);
            this.activeItem = this.activeItem === index ? null : index;
            console.log("Active clicked:", this.activeItem);
        },
        hoverItem(index) {
            this.hoverIndex = index;
        },
        unhoverItem() {
            this.hoverIndex = null;
        }



    },
    mounted() {
        console.log(this.number)
        this.increment()
    }
};
</script>
  
<style scoped>
    .card-width {
        width: 42%; 
    }

    @media (min-width: 640px) { /* sm */
        .card-width {
            width: 35%;
        }
    }

    @media (min-width: 768px) { /* md */
        .card-width {
            width: 30%;
        }
    }

    @media (min-width: 1024px) { /* lg */
        .card-width {
            width: 25%;
        }
    }

    @media (min-width: 1280px) { /* xl */
        .card-width {
            width: 19%;
        }
    }


    .card-height {
        height: 80%;
    }
    
    .card-background-semi {
        /* background: rgb(237,192,1); */
        background: linear-gradient(166deg, rgba(132,106,0,1) 0%, rgba(132,0,30,1) 100%);
    }

    .card-background-final {
        /* background: rgb(237,192,1); */
        background: linear-gradient(166deg, #e5be06 0%, #0991b0 100%);
    }

    li {
        transition: width 0.5s ease; /* Ensures smooth transition for width changes */
        width: 100%; /* Default width for all items */
    }

    @media (min-width: 640px) { /* sm */
        li[aria-current="true"] {
            width: 37%; /* Active item width for sm screens */
        }
    }
    
    @media (min-width: 768px) { /* md */
        li[aria-current="true"] {
            width: 31%; /* Active item width for md screens */
        }
    }
    @media (min-width: 1024px) { /* lg */
        li[aria-current="true"] {
            width: 26%; /* Active item width for lg screens */
        }
    }
    @media (min-width: 1280px) { /* xl */
        li[aria-current="true"] {
            width: 22%; /* Active item width for xl screens */
        }
    }
    

    
    .gradient-border {
        border-image: linear-gradient(to bottom right, rgba(132,106,0,1), rgba(132,0,30,1));
        border-image-slice: 1;
        border-radius: 10px;
        overflow: hidden;
    }

    /* Specific hover styles for first and last items if needed */




.animate-fade-in {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 2s ease, transform 2s ease;
}

.animate-fade-inL {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 2s ease, transform 2s ease;
}

.timeline-item {
    display: flex;
    width: 80%;
    margin: 20px 0;
}

.animate-elementL {
    opacity: 1;
    transform: translateX(0px);

}

.featurette-heading {
    font-size: 30px;
}

@media (min-width: 40em) {
    .featurette-heading {
        font-size: 50px;
    }
}

@media (min-width: 62em) {
    .featurette-heading {
        margin-top: 7rem;
    }
}

@media (max-width: 62em) {
    .featurette-heading {
        padding-top: 2rem;
        font-weight: bold;
    }

    .app-testimonial-card {
        transition-delay: 0s;
    }
}
    @keyframes typing {
    0% {
        max-width: 0;
    }
    100% {
        max-width: 100%;
    }
    }

    

    .typing-effect {
        font-family: 'Courier New', monospace;
        border-right: none; /* Caret color */
        white-space: nowrap;
        overflow: hidden; /* Keeps the content from spilling outside the container */
        text-wrap: wrap;
        text-align: center;
        display: inline-block;
        font-weight: bold; /* Making sure the font is bold */
        font-size: 20px; /* Adjust font size as needed */
        animation: typing 2s steps(20, end) ;
    }

</style>
  