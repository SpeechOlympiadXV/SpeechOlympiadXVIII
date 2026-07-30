<template>
    <div class="relative bg-zinc-950">

        <img :src="Background.filename" :alt="Background.alt" class="w-full sm:w-1/2 mx-auto">
        <div class="absolute md:top-1/3 i top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex"
            :style="{ 'display': eightV ? '' : 'none' }">
            <!-- <imageAnimation /> -->
            <transition name="bon" mode="out-in">
                <img :src="currentImage" :key="currentImage" class="image" />
            </transition>
            <div class="flex flex-col items-center justify-center ml-4 w-1/2">

                <transition name="bounce" mode="out-in">
                    <p class="text-white p-3 text-3xl ml-2" v-html="eight.fullText" :key="fadeAnimation"
                        :hidden="!fadeAnimation">
                    </p>
                </transition>

                <!-- Additional text elements can be added here -->

                <transition name="slide-fade" mode="out-in">
                    <img :src="sologo" class="w-32" :key="fadeAnimation" :hidden="!fadeAnimation" />
                </transition>
                <p class="text-sm text-green-300 p-1" v-if="success">You have registered successfully</p>
            </div>

        </div>


        <div class="absolute md:top-1/3 i top-1/3 bg-gradient-to-r to-zinc-800 from-black  md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="firstV">
            <p class="text-2xl p-3  text-gray-200 bg-transparent" v-html="first.typedText"></p>

            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="text" placeholder="Ex : John Perera" v-model="fullName" @keyup.enter="firstB(2)" />
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(2)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>
        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black  md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="secondV">
            <p class="text-3xl p-3  text-gray-200 bg-transparent" v-html="second.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="text" placeholder="Enter your University index number here" v-model="universityId"
                    @keyup.enter="firstB(3)" />
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(3)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="thirdV">
            <p class="text-3xl p-3  text-gray-200 bg-transparent" v-html="third.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="mobile" placeholder="Enter your mobile number" v-model="phoneNumber" @keyup.enter="firstB(4)" />
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(4)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>
        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="fourthV">
            <p class="text-3xl p-3 text-gray-200 bg-transparent" v-html="fourth.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="email" placeholder="Enter your email" v-model="email" @keyup.enter="firstB(5)" />
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(5)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>

        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="fifthV">
            <p class="text-3xl p-3 text-gray-200 bg-transparent" v-html="fifth.typedText"></p>
            <div class="relative flex items-center mt-4">

                <select v-model="faculty"
                    class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14"
                    id="grid-state">
                    <option>Faculty of Engineering</option>
                    <option>Faculty of Information Technology</option>
                    <option>Faculty of Architecture</option>
                    <option>Faculty of Business</option>
                    <option>Faculty of Medicine</option>
                </select>
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(6)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>
        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="sixthV">
            <p class="text-3xl p-3 text-gray-200 bg-transparent" v-html="sixth.typedText"></p>
            <div class="relative flex items-center mt-4">
                <input
                    class="w-full placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14 focus:outline-none"
                    type="email" placeholder="Ex : CSE" v-model="department" @keyup.enter="firstB(7)" />
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="firstB(7)">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>
        </div>
        <div class="absolute md:top-1/3 top-1/3 bg-gradient-to-r to-zinc-800 from-black md:left-1/2 w-full sm:w-[50%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center"
            v-if="seventhV">
            <p class="text-3xl p-3 text-gray-200 bg-transparent" v-html="seventh.typedText"></p>
            <div class="relative flex items-center mt-4">

                <select v-model="batch"
                    class="block appearance-none w-full border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500 placeholder-gray-200::placeholder text-xl bg-amber-600 bg-opacity-5 text-gray-200 p-4 rounded-md pr-14"
                    id="grid-state">

                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                </select>
                <button :class="{
                    'absolute right-0 top-0 h-full px-4 bg-amber-200 text-black hover:bg-amber-300': !error,
                    'absolute right-0 top-0 h-full px-4 bg-red-600 text-black hover:bg-red-700': error
                }" @click="finish">
                    &rarr;
                </button>
            </div>
            <p class="text-lg text-red-400 p-1" v-if="error">{{ errorMsg }}</p>
        </div>

        <div v-if="showRulesModal"
            class="absolute md:top-0 top-0 md:left-0 left-0 bg-zinc-700 w-full h-full rounded-lg p-6 shadow-md"
            style="overflow: auto; "> <!-- You can adjust max-height as needed -->
            <button @click="closeRulesModal"
                class="bg-amber-600 text-white p-2 m-2 border-radius-50 hover:bg-orange-700 hover:text-gray-800">
                I Agree &rarr;
            </button>
            <p>Upon signing up for the competition, you are expected to adhere to the regulations and guidelines associated
                with Speech Olympiad XVI.

                Please review the rules and proceed.</p>
            <PageRules />
        </div>

    </div>
</template>
  
  
  
<script>
import dragon1 from '../assets/images/dragon1-2.png'
import dragon2 from '../assets/images/dragon2-2.png'
import Background from "../assets/images/gavelium.jpg"
import SOlogo from "../assets/images/new_logo.png"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SOLogo from "../components/SOLogo.vue";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"
import PageRules from './PageRules.vue';
export default {
    name: "AnimatedText",
    components: {

        PageRules
    },
    data() {
        return {
            Background: {
                filename: Background,
                alt: "Alt Text for Image",
            },
            firstV: true,
            secondV: false,
            thirdV: false,
            fourthV: false,
            fifthV: false,
            sixthV: false,
            seventhV: false,
            eightV: false,
            fullName: '',
            universityId: '',
            phoneNumber: '',
            email: '',
            faculty: '',
            department: '',
            batch: '',
            errorMsg: '',
            error: false,
            success: false,
            showMessage: false,
            showRulesModal: true,
            fadeAnimation: false,
            currentImage: dragon1,
            sologo: SOlogo,
            first: {
                typedText: "",
                fullText: 'Greetings contestant! Congratulations on taking your first step towards Speech Olympiad XVI. Let\'s proceed! <br/> Please provide your full name.',
                currentIndex: 0,
            },
            second: {
                typedText: "",
                fullText: "Hi, what is your university id? ",
                currentIndex: 0,
            },
            third: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            fourth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            fifth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            sixth: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            seventh: {
                typedText: "",
                fullText: "Hi, what is your university id?",
                currentIndex: 0,
            },
            eight: {
                typedText: "",
                fullText: "Thankyou & Good luck on your journey! 🥳",

                currentIndex: 0,
            }

        };
    },
    methods: {
        typeText(obj) {
            if (obj.currentIndex <= obj.fullText.length) {
                obj.typedText = obj.fullText.slice(0, obj.currentIndex);
                obj.currentIndex++;

                setTimeout(() => this.typeText(obj), 20);
            }


        },
        verifyMobileNumber(number) {
            // Define a regular expression pattern
            const pattern = /^(0|\+94)[0-9+]{9,}$/;

            // Test the number against the pattern
            return pattern.test(number);
        },
        isValidEmail(email) {
            // Define a regular expression pattern for a valid email address
            const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Test the email against the pattern
            return pattern.test(email);
        },
        closeMessage() {
            this.showMessage = false;
        },
        firstB(th) {
            switch (th) {
                case 2:
                    this.error = false;

                    if (!this.fullName.split(" ")[0]) {
                        this.error = true;
                        this.errorMsg = "You must enter your full name"

                    } else {
                        this.firstV = false
                        this.secondV = true
                        this.second.fullText = this.fullName.split(" ")[0] + ", kindly enter your university index number."
                        this.typeText(this.second);
                    }

                    break;
                case 3:
                    this.error = false;

                    if (!this.universityId) {
                        this.error = true;
                        this.errorMsg = "You must enter your university ID"

                    } else {
                        this.secondV = false
                        this.thirdV = true
                        this.third.fullText = '2 down 5 to go! <br/> Could you please provide your phone number, preferably your WhatsApp contact number?'
                        this.typeText(this.third);
                    }
                    break;
                case 4:
                    this.error = false;

                    if (!this.phoneNumber) {
                        this.error = true;
                        this.errorMsg = "You must enter your MobileNumber"

                    } else if (!this.verifyMobileNumber(this.phoneNumber)) {
                        this.error = true;
                        this.errorMsg = "You must enter a valid MobileNumber"
                    } else {
                        this.thirdV = false
                        this.fourthV = true
                        this.fourth.fullText = "May we kindly request your email address?"
                        this.typeText(this.fourth);
                    }
                    break;
                case 5:
                    this.error = false;

                    if (!this.email) {
                        this.error = true;
                        this.errorMsg = "You must enter your Email"

                    } else if (!this.isValidEmail(this.email)) {
                        this.error = true;
                        this.errorMsg = "You must enter a valid Email"
                    } else {
                        this.fourthV = false
                        this.fifthV = true
                        this.fifth.fullText = "Great! You're almost there. <br/> In which faculty are you currently enrolled?"
                        this.typeText(this.fifth);
                    }
                    break;
                case 6:
                    this.error = false;

                    if (!this.faculty) {
                        this.error = true;
                        this.errorMsg = "you must select your faculty"

                    } else {
                        this.fifthV = false
                        this.sixthV = true
                        this.sixth.fullText = this.fullName.split(" ")[0] + ", please mention your department."
                        this.typeText(this.sixth);
                    }
                    break;
                case 7:
                    this.sixthV = false
                    this.seventhV = true
                    this.seventh.fullText = "Final Question! <br/> Which batch are you from?"
                    this.typeText(this.seventh);
                    break;
                case 8:



                    this.seventhV = false;
                    this.eightV = true;
                    this.typeText(this.eight);
                    this.switchImage();
                    setTimeout(() => {
                        this.fadeAnimation = true;

                        this.eight.fullText = "Thank you & Good luck on your journey!";
                        this.sologo = SOlogo;
                    }, 1500);
                    setTimeout(() => {
                        this.success = true
                    }, 4000);
                    break;
                default:
                    break;
            }

            // this.firstV = false
            // this.secondV = true
            // this.thirdV = false
            // this.fourthV = false
            // this.fifthV = false
            // this.sixthV = false
            // this.seventhV = false

            // this.second.fullText = this.fullName + ", What is your University ID ?"
            // this.typeText(this.second);
        },
        finish() {

            this.seventhV = false;
            this.submitForm();
            this.firstB(8);
            // this.showMessage = true;
        },
        async submitForm() {
            console.log("formRan")

            const firebaseConfig = {
                apiKey: "AIzaSyBMOiTpc_PPERG4ZhPbTQIZ8uAHnNzsKos",
                authDomain: "speech-olympiad.firebaseapp.com",
                projectId: "speech-olympiad",
                storageBucket: "speech-olympiad.appspot.com",
                messagingSenderId: "718732602589",
                appId: "1:718732602589:web:d2b3a682106d06fc773f34",
                measurementId: "G-T1D958J5EE"
            }

            // init firebase
            initializeApp(firebaseConfig)

            // init firestore service
            const db = getFirestore()
            const docRef = doc(collection(db, "registrations"));
            // data to send
            const dataObj = {
                fullName: this.fullName,
                universityId: this.universityId,
                phoneNumber: this.phoneNumber,
                email: this.email,
                faculty: this.faculty,
                department: this.department,
                batch: this.batch,
                time: new Date()
            };
            console.log('efewf')
            await setDoc(docRef, dataObj);

            // console.log('Document written with ID: ', docRef.id);

            console.log('efewf')
            try {


                // Reset form fields after successful submission
                this.fullName = '';
                this.universityId = '';
                this.phoneNumber = '';
                this.email = '';
                this.faculty = '';
                this.department = '';
                this.batch = '';
                this.showMessage = true;
            } catch (error) {
                console.error('Error adding document: ', error);
            }
            console.log('efewf')
        },
        switchImage() {
            // Simulate loading a new image
            setTimeout(() => {
                this.currentImage = dragon2;
            }, 1500); // 1 second
        },
        openRulesModal() {
            this.showRulesModal = true;
        },
        closeRulesModal() {
            this.showRulesModal = false;
        },

    },
    mounted() {

        this.typeText(this.first);


    },
};
</script>
  
  
<style scoped>
@keyframes typing {
    from {
        width: 0;
    }
}

.image {
    width: 10rem;
    height: 15rem;

    margin-left: 20px;
    /* filter: blur(1px); */
    /* Initial blur effect */
}

.typed {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite alternate;
}

@keyframes blink-caret {
    to {
        border-right-color: transparent;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.bon-enter-active {
    animation: bounce-in 0.1s;
}

.bon-leave-active {
    animation: bounce-in 0.1s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black overlay */
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
