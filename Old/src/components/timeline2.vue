<template>
    <div class="flex justify-center mt-7">
        <div class="timeline md:w-4/6 w-full">
            <div class="timeline-item left animate-elementL  opacity-60" ref="ele1"
                :class="{ 'animate-fade-in': ele1.view }" @click="handleClick(1)">
                <div class=" timeline-content ">

                    <img :src="registrationsOpen" alt="registration open" class="w-1/2 image-to-overlay " />

                    <h3
                        class="text-4xl opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-amber-50 via-amber-100 to-amber-100">
                        Registrations Opened</h3>

                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">
                        1<sup
                            class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">st</sup>
                        September 2023
                    </p>
                    <div class="w-full flex justify-start">
                        <countdown-timer targetDate='2023-09-01'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>
            <!-- <div class="timeline-center center">
            <div class=" ">

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
                    <path d="M50 20L50 80M25 55L50 80L75 55" fill="none" stroke="#FFFFFF" stroke-width="5"
                        stroke-linecap="round" />
                </svg>
            </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-content">
                <h3
                    class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
                    Registrations Closing</h3>
                <p>bla bla</p>
                Add any other content you want to display here
            </div>
        </div> -->
            <!-- <div class="timeline-center center">
                <div class=" ">

                    <svg width="95" height="28" viewBox="0 0 95 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.29217 12.581C6.84252 14.1917 5.44996 15.8079 4.02841 17.3874C3.59051 17.8739 3.38828 18.4577 2.88495 18.8603C1.85805 19.6818 2.84018 19.7216 3.2338 20.4302C3.95639 21.7308 5.41967 21.8979 6.19905 22.8721C6.55959 23.3228 7.40988 23.3659 7.86579 23.8218C8.33678 24.2928 8.76349 24.8521 9.33873 25.1397"
                            stroke="white" stroke-width="3" stroke-linecap="round" />
                        <path
                            d="M3.05937 20.2557C6.72613 20.2557 10.036 19.558 13.7188 19.558C18.244 19.558 22.1229 20.1009 26.355 21.7287C28.4818 22.5467 30.1807 24.5961 32.1886 25.4885C34.07 26.3247 36.0762 26.1862 38.1385 26.1862C39.3804 26.1862 42.6958 26.7321 43.6038 25.9149C44.4158 25.1842 45.469 24.9413 46.3171 24.0931C46.841 23.5693 47.8535 22.525 48.4878 22.2713C53.2103 20.3823 53.9919 15.4013 53.9919 10.6623C53.9919 5.33421 61.4628 4.55735 65.4265 4.55735C67.9467 4.55735 70.0273 4.97014 72.4617 5.27444C74.3119 5.50571 76.393 6.30162 78.2372 6.30162C81.1108 6.30162 83.3205 6.02404 86.0864 5.33258C88.7559 4.6652 91.0923 2.92654 93.4123 1.76653"
                            stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>

                </div>
            </div> -->
            <div class="timeline-item right animate-elementR  " ref="ele2" :class="{ 'animate-fade-in': ele2.view }">
                <div class="timeline-content relative">
                    <div class="w-full flex justify-end">
                        <img :src="prelis" alt="registration open" class="w-1/2 opacity-60" />
                    </div>

                    <div class="text-right">
                        <h3
                            class="text-4xl opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-amber-50 via-amber-100 to-amber-200">
                            Preliminary Round
                        </h3>
                        <p
                            class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">
                            1<sup
                                class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">st</sup>
                            October 2023
                        </p>


                        <div class="w-full flex justify-end">
                            <countdown-timer targetDate='2023-10-01'></countdown-timer>
                        </div>
                        <!-- Add any other content you want to display here -->
                    </div>
                </div>
            </div>


            <div class="timeline-item left animate-elementL " ref="ele3" :class="{ 'animate-fade-in': ele3.view }">
                <div class="timeline-content">
                    <img :src="announcingSemi" alt="registration open" class="w-1/2 image-to-overlay opacity-60" />
                    <h3
                        class="text-4xl opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300">
                        Announcing Semi Finalists</h3>
                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">
                        1<sup
                            class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">st</sup>
                        October 2023
                    </p>
                    <div class="w-full flex justify-start">
                        <countdown-timer targetDate='2023-10-01'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>

            <div class="timeline-item right animate-elementR " ref="ele4" :class="{ 'animate-fade-in': ele4.view }">
                <div class="timeline-content">
                    <div class="w-full flex justify-end">
                        <img :src="semiFinal" alt="registration open" class="w-1/2 " />
                    </div>
                    <h3
                        class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
                        Semi Finals</h3>
                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">
                        15<sup
                            class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">th</sup>
                        October 2023
                    </p>
                    <div class="w-full flex justify-end">
                        <countdown-timer targetDate='2023-10-15'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>

            <div class="timeline-item left animate-elementL " ref="ele5" :class="{ 'animate-fade-in': ele5.view }">
                <div class="timeline-content">
                    <img :src="finalistsAnounced" alt="registration open" class="w-1/2 image-to-overlay" />
                    <h3
                        class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                        Announcing Finalists </h3>
                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">
                        15<sup
                            class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-100 to-amber-200">th</sup>
                        October 2023
                    </p>
                    <div class="w-full flex justify-start">
                        <countdown-timer targetDate='2023-10-15'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>

            <div class="timeline-item right animate-elementR" ref="ele6" :class="{ 'animate-fade-in': ele6.view }">
                <div class="timeline-content">
                    <div class="w-full flex justify-end">
                        <img :src="finals" alt="registration open" class="w-1/2" />
                    </div>
                    <h3
                        class=" mt-1 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                        Finals</h3>
                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                        25<sup
                            class="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r  from-amber-400 via-amber-500 to-amber-600">th</sup>
                        October 2023 at 5.00 PM</p>
                    <div class="w-full flex justify-end">
                        <countdown-timer targetDate='2023-10-25'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>

            <div class="timeline-item left animate-elementL" ref="ele7" :class="{ 'animate-fade-in': ele7.view }">
                <div class="timeline-content">
                    <img :src="winners" alt="registration open" class="w-1/2 image-to-overlay" />
                    <h3
                        class=" mt-1 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-600 to-amber-500">
                        Winners Announced </h3>
                    <p
                        class="text-2xl mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-600 to-amber-500">
                        25<sup
                            class="text-lg mt-1 text-transparent  bg-clip-text bg-gradient-to-r from-amber-600 via-amber-600 to-amber-500">th</sup>
                        October 2023 at 5.00 PM</p>
                    <div class="w-full flex justify-start">
                        <countdown-timer targetDate='2023-10-25'></countdown-timer>
                    </div>
                    <!-- Add any other content you want to display here -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script >
import CountdownTimer from './countdown.vue';
import registrationsOpen from "../assets/images/Registrations_open.png";
import prelis from "../assets/images/Prelis.png";
import announcingSemi from "../assets/images/Semi_Finalists_announced.png"
import semiFinal from "../assets/images/Semi_Finals.png"
import finalistsAnounced from "../assets/images/Finalists_announced.png"
import finals from "../assets/images/Finals.png"
import winners from "../assets/images/winners_announced.png"




export default {
    components: {
        CountdownTimer,
    },
    methods: {

        handleScroll() {
            const element = this.$el;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            const offset = windowHeight / 2;

            // Check if the element is in the viewport
            if (rect.top + this.ele2.height + offset < windowHeight) {
                this.ele2.view = true;
            }
            if (rect.top + this.ele1.height < windowHeight) {
                this.ele1.view = true;
            }

            if (rect.top + this.ele3.height + 2 * offset < windowHeight) {
                this.ele3.view = true;
            }
            if (rect.top + this.ele4.height + 3 * offset < windowHeight) {
                this.ele4.view = true;
            }
            if (rect.top + this.ele5.height + 4 * offset < windowHeight) {
                this.ele5.view = true;
            }
            if (rect.top + this.ele6.height + 5 * offset < windowHeight) {
                this.ele6.view = true;
            }
            if (rect.top + this.ele7.height + 6 * offset < windowHeight) {
                this.ele7.view = true;
            }
        },
        handleClick(title) {
            switch (title) {
                case 1:
                    const currentURLWithoutHash = window.location.href.split('#')[0];

                    // Combine the current URL with the desired fragment identifier
                    const newURL = currentURLWithoutHash + '#register';

                    // Navigate to the new URL
                    window.location.href = newURL;
                    break;

                default:
                    break;
            }
        }
    },
    mounted() {
        setTimeout(() => {
            if (this.$refs.ele1 && this.$refs.ele2 && this.$refs.ele3 && this.$refs.ele4 && this.$refs.ele5 && this.$refs.ele6 && this.$refs.ele7) {
                // Get the height of the element
                this.ele1.height = this.$refs.ele1.offsetHeight;
                this.ele2.height = this.$refs.ele2.offsetHeight;
                this.ele3.height = this.$refs.ele3.offsetHeight;
                this.ele4.height = this.$refs.ele4.offsetHeight;
                this.ele5.height = this.$refs.ele5.offsetHeight;
                this.ele6.height = this.$refs.ele6.offsetHeight;
                this.ele7.height = this.$refs.ele7.offsetHeight;
                // Log the height to the console (or use it as needed)
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                console.log('Element height:', this.ele1.height, this.ele7.height, windowHeight);
            }
            window.addEventListener('scroll', this.handleScroll);
        }, 100);


        // window.onload = () => {
        //     // Check if the element exists
        //     if (this.$refs.ele1 && this.$refs.ele2 && this.$refs.ele3 && this.$refs.ele4 && this.$refs.ele5 && this.$refs.ele6 && this.$refs.ele7) {
        //         // Get the height of the element
        //         this.ele1.height = this.$refs.ele1.offsetHeight;
        //         this.ele2.height = this.$refs.ele2.offsetHeight;
        //         this.ele3.height = this.$refs.ele3.offsetHeight;
        //         this.ele4.height = this.$refs.ele4.offsetHeight;
        //         this.ele5.height = this.$refs.ele5.offsetHeight;
        //         this.ele6.height = this.$refs.ele6.offsetHeight;
        //         this.ele7.height = this.$refs.ele7.offsetHeight;
        //         // Log the height to the console (or use it as needed)
        //         const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        //         console.log('Element height:', this.ele1.height, this.ele7.height, windowHeight);
        //     }
        //     window.addEventListener('scroll', this.handleScroll);
        // }
        // Optionally, you can call handleScroll() initially if the element is already in the viewport.
        // this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
        return {

            registrationsOpen,
            prelis,
            announcingSemi,
            semiFinal,
            finalistsAnounced,
            finals,
            winners,
            shouldAnimate: false,
            ele1: {
                view: false,
                height: 100
            },
            ele2: {
                view: false,
                height: 100
            },
            ele3: {
                view: false,
                height: 100
            },
            ele4: {
                view: false,
                height: 100
            },
            ele5: {
                view: false,
                height: 100
            },
            ele6: {
                view: false,
                height: 100
            },
            ele7: {
                view: false,
                height: 100
            },

        };
    },
};
</script>
  
<style scoped>
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}

.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timeline-item {
    display: flex;
    width: 80%;
    margin: 20px 0;
}

.timeline-center {
    display: flex;
    width: 100%;
    height: 20px;
}

.timeline-item.left {
    justify-content: flex-start;
    text-align: left;
}

.timeline-item.right {
    justify-content: flex-end;
    text-align: right;
}

.timeline-center.center {
    height: 20px;
    justify-content: center;
    text-align: center;
}

.timeline-content {
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;

    /* max-width: 300px; */
}

/* styles.css */
.animate-elementR {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 2s ease, transform 2s ease;
}

.animate-elementL {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 2s ease, transform 2s ease;
}

.animate-fade-in {
    opacity: 1;
    transform: translateX(0);
}

.gradient-overlay {
    position: relative;
    display: inline-block;
}

.gradient-overlay::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    pointer-events: none;
}
</style>
  