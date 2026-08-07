<template>
  <div class="w-full flex justify-center items-center mt-10 mb-9">
    <div
      class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
    >
      <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2 w-[80%]">
        Register Now
      </h2>
      <p class="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
        Registrations for
        <span class="font-bold text-[#EDC001]">Speech Olympiad</span> are open now. Time to own your voice!
      </p>
      <p class="mt-1 text-gray-300 leading-6 text-left text-lg font-thin">
        Master the art of public speaking with our comprehensive <a href="https://drive.google.com/file/d/1q593UEqVGyOmJeEzJoMwOyjGEroa8Ksz/view?usp=sharing" target="_blank" class="text-blue-500 hover:text-blue-300 hover:cursor-pointer transition-colors duration-200 font-bold underline">Competition Guidelines</a> and expert tips to elevate your speaking skills!
      </p>

      <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
        <!-- First Name -->
        <div>
          <p class="text-white mb-1">First Name</p>
          <input
            v-model="firstName"
            type="text"
            placeholder="First Name"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Last Name -->
        <div>
          <p class="text-white mb-1">Last Name</p>
          <input
            v-model="lastName"
            type="text"
            placeholder="Last Name"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Registration Number -->
        <div>
          <p class="text-white mb-1">Registration Number</p>
          <input
            v-model="registrationNumber"
            type="text"
            placeholder="Registration Number"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Name on Certificate -->
        <div>
          <p class="text-white mb-1">Name as it should appear on certificate</p>
          <input
            v-model="nameOnCertificate"
            type="text"
            placeholder="Name as it should appear on certificate"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Batch -->
        <div class="relative">
          <p class="text-white mb-1">Batch</p>
          <select
            v-model="batch"
            class="appearance-none w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            required
          >
            <option disabled value="">Select Batch (21-24)</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
          </select>
          <div class="pointer-events-none absolute right-3 top-11 text-white">
            ▼
          </div>
        </div>

        <!-- Faculty -->
        <div class="relative">
          <p class="text-white mb-1">Faculty</p>
          <select
            v-model="faculty"
            class="appearance-none w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            required
          >
            <option disabled value="">Select Faculty</option>
            <option>Faculty of Engineering</option>
            <option>Faculty of Information Technology</option>
            <option>Faculty of Business</option>
            <option>Faculty of Architecture</option>
            <option>Faculty of Medicine</option>
            <option>Faculty of Graduate Studies</option>
          </select>
          <div class="pointer-events-none absolute right-3 top-11 text-white">
            ▼
          </div>
        </div>

        <!-- Department -->
        <div>
          <p class="text-white mb-1">Department</p>
          <input
            v-model="department"
            type="text"
            placeholder="Department"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <p class="text-white mb-1">Email</p>
          <input
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            :class="{ 'ring-2 ring-red-500': emailError }"
            required
          />
          <p v-if="emailError" class="text-red-400 text-sm mt-1">{{ emailError }}</p>
        </div>

        <!-- Phone Number (WhatsApp) -->
        <div>
          <p class="text-white mb-1">Phone Number (WhatsApp)</p>
          <input
            v-model="phone"
            type="tel"
            placeholder="Your WhatsApp Number"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            :class="{ 'ring-2 ring-red-500': phoneError }"
            @input="validatePhoneNumber"
            required
          />
          <p v-if="phoneError" class="text-red-400 text-sm mt-1">{{ phoneError }}</p>
        </div>

        <!-- Previous Participation -->
        <div>
          <p class="text-white mb-4">Have you already participated in Speech Olympiad?</p>
          <div class="flex space-x-4">
            <label class="flex items-center space-x-3 cursor-pointer group">
              <div class="relative">
                <input
                  v-model="previousParticipation"
                  type="radio"
                  value="yes"
                  class="sr-only"
                  required
                />
                <div class="w-6 h-6 border-2 border-gray-400 rounded-full group-hover:border-[#EDC001] transition-all duration-200"
                     :class="previousParticipation === 'yes' ? 'border-[#EDC001] bg-[#EDC001]' : 'bg-gray-800'">
                  <div v-if="previousParticipation === 'yes'" 
                       class="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  </div>
                </div>
              </div>
              <span class="text-white font-medium group-hover:text-[#EDC001] transition-colors duration-200"
                    :class="previousParticipation === 'yes' ? 'text-[#EDC001]' : ''">
                Yes
              </span>
            </label>

            <label class="flex items-center space-x-3 cursor-pointer group">
              <div class="relative">
                <input
                  v-model="previousParticipation"
                  type="radio"
                  value="no"
                  class="sr-only"
                  required
                />
                <div class="w-6 h-6 border-2 border-gray-400 rounded-full group-hover:border-[#EDC001] transition-all duration-200"
                     :class="previousParticipation === 'no' ? 'border-[#EDC001] bg-[#EDC001]' : 'bg-gray-800'">
                  <div v-if="previousParticipation === 'no'" 
                       class="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  </div>
                </div>
              </div>
              <span class="text-white font-medium group-hover:text-[#EDC001] transition-colors duration-200"
                    :class="previousParticipation === 'no' ? 'text-[#EDC001]' : ''">
                No
              </span>
            </label>
          </div>
        </div>

        <!-- How did you hear about this -->
        <div class="relative">
          <p class="text-white mb-1">How did you hear about this competition?</p>
          <select
            v-model="hearAbout"
            class="appearance-none w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            required
          >
            <option disabled value="">Select an option</option>
            <option>Gavel Club of UOM</option>
            <option>Social Media</option>
            <option>Friend</option>
            <option>Other</option>
          </select>
          <div class="pointer-events-none absolute right-3 top-11 text-white">
            ▼
          </div>
        </div>

        <!-- Other option input -->
        <div v-if="hearAbout === 'Other'">
          <p class="text-white mb-1">Please specify</p>
          <input
            v-model="hearAboutOther"
            type="text"
            placeholder="Please specify how you heard about this competition"
            class="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <!-- Terms and Conditions -->
        <div class="flex items-start space-x-3 pt-4">
          <input
            v-model="agreeToTerms"
            type="checkbox"
            id="terms"
            class="mt-1 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
            required
          />
          <label for="terms" class="text-white text-sm cursor-pointer">
            I confirm that I have read and agree to the <a href="#rules" class="text-[#EDC001] underline hover:text-yellow-300">rules and regulations</a>, and I consent to share my information with authorized third parties for relevant purposes.
          </label>
        </div>
        <p v-if="termsError" class="text-red-400 text-sm">{{ termsError }}</p>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading || !isFormValid"
          class="w-full h-12 bg-[#a78e1d] text-gray-100 rounded-lg hover:bg-[#7d6c22] transition-colors hover:text-white font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Submitting...' : 'Submit Registration' }}
        </button>
      </form>

      <!-- Success/Error Messages -->
      <div v-if="successMessage" class="mt-4 p-3 bg-green-600 text-white rounded-lg">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-4 p-3 bg-red-600 text-white rounded-lg">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-FLRed5upxr_5t5lsfvxqY5qbm4IYBg",
  authDomain: "speach-olimpiad.firebaseapp.com",
  projectId: "speach-olimpiad",
  storageBucket: "speach-olimpiad.firebasestorage.app",
  messagingSenderId: "724170715421",
  appId: "1:724170715421:web:5472365d0b12cb0fee71f4",
  measurementId: "G-725FHF4G8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form fields (removed fullName, username, and password)
const firstName = ref('');
const lastName = ref('');
const nameOnCertificate = ref('');
const email = ref('');
const phone = ref('');
const registrationNumber = ref('');
const department = ref('');
const batch = ref('');
const faculty = ref('');
const previousParticipation = ref('');
const hearAbout = ref('');
const hearAboutOther = ref('');
const agreeToTerms = ref(false);

// Loading and message states
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// Validation states
const emailError = ref('');
const phoneError = ref('');
const termsError = ref('');

// Email validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
const validatePhoneNumber = () => {
  const phoneRegex = /^[0-9+\-\s()]+$/;
  if (phone.value && !phoneRegex.test(phone.value)) {
    phoneError.value = 'Please enter a valid phone number (numbers, +, -, spaces, and parentheses only)';
  } else {
    phoneError.value = '';
  }
};

// Watch email for validation
watch(email, (newEmail) => {
  if (newEmail && !validateEmail(newEmail)) {
    emailError.value = 'Please enter a valid email address';
  } else {
    emailError.value = '';
  }
});

// Computed property for form validation (removed password validation)
const isFormValid = computed(() => {
  return (
    firstName.value.trim() &&
    lastName.value.trim() &&
    nameOnCertificate.value.trim() &&
    email.value.trim() &&
    validateEmail(email.value) &&
    phone.value.trim() &&
    !phoneError.value &&
    registrationNumber.value.trim() &&
    department.value.trim() &&
    batch.value &&
    faculty.value &&
    previousParticipation.value &&
    hearAbout.value &&
    (hearAbout.value !== 'Other' || hearAboutOther.value.trim()) &&
    agreeToTerms.value
  );
});

const clearMessages = () => {
  setTimeout(() => {
    successMessage.value = '';
    errorMessage.value = '';
  }, 5000);
};

const handleSubmit = async () => {
  // Validate terms
  if (!agreeToTerms.value) {
    termsError.value = 'You must agree to the Terms and Conditions to continue';
    return;
  }
  
  termsError.value = '';
  loading.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const registrationData = {
      firstName: firstName.value,
      lastName: lastName.value,
      registrationNumber: registrationNumber.value,
      nameOnCertificate: nameOnCertificate.value,
      batch: batch.value,
      faculty: faculty.value,
      department: department.value,
      email: email.value,
      phone: phone.value,
      previousParticipation: previousParticipation.value,
      hearAbout: hearAbout.value,
      hearAboutOther: hearAboutOther.value,
      agreeToTerms: agreeToTerms.value,
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'registrations'), registrationData);
    console.log('Registration submitted with ID: ', docRef.id);
    
    // Reset form
    firstName.value = '';
    lastName.value = '';
    registrationNumber.value = '';
    nameOnCertificate.value = '';
    batch.value = '';
    faculty.value = '';
    department.value = '';
    email.value = '';
    phone.value = '';
    previousParticipation.value = '';
    hearAbout.value = '';
    hearAboutOther.value = '';
    agreeToTerms.value = false;

    successMessage.value = 'Registration submitted successfully! Welcome to Speech Olympiad!';
    
  } catch (error) {
    console.error('Error submitting registration: ', error);
    errorMessage.value = 'Error submitting registration: ' + error.message;
  } finally {
    loading.value = false;
    clearMessages();
  }
};
</script>