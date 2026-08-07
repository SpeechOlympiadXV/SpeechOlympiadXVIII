<template>
    <div class="mb-4 p-6" v-if="!admin">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Enter your password" v-model="password" />
        <div class="mb-4">
            <button class="bg-transparent    text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                @click="login">
                Get In &rarr;
            </button>
        </div>
    </div>
    <div v-if="admin">
        <h1 class="text-2xl font-semibold mb-4">Registrations</h1>
        <button
            class="bg-gray-500 w-64 m-3 hover:bg-gray-600 text-gray-300 border-gray-200 font-bold py-2 px-4 outline-1 rounded focus:outline-none focus:shadow-outline"
            @click="downloadCsvFile">
            Download Data
        </button>
        <div class="overflow-x-auto">
            <p>Latest First</p>
            <table class="min-w-full border divide-y divide-gray-300">
                <thead class="bg-gray-100 text-black">
                    <tr>
                        <th class="py-2 px-4">Full Name</th>
                        <th class="py-2 px-4">University ID</th>
                        <th class="py-2 px-4">Email</th>
                        <th class="py-2 px-4">Faculty</th>
                        <th class="py-2 px-4">Department</th>
                        <th class="py-2 px-4">Batch</th>
                        <th class="py-2 px-4">Phone Number</th>
                        <th class="py-2 px-4">Time</th>
                        <!-- Add other fields as needed -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="registration in sortedRegistrationsD" :key="registration.id">
                        <td class=" py-2 px-4">{{ registration.fullName }}</td>
                        <td class="py-2 px-4">{{ registration.universityId }}</td>
                        <td class="py-2 px-4">{{ registration.email }}</td>
                        <td class="py-2 px-4">{{ registration.faculty }}</td>
                        <td class="py-2 px-4">{{ registration.department }}</td>
                        <td class="py-2 px-4">{{ registration.batch }}</td>
                        <td class="py-2 px-4">{{ registration.phoneNumber }}</td>
                        <td class="py-2 px-4">{{ registration.time }}</td>
                        <!-- Add other fields as needed -->
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
  
<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

export default {
    data() {
        return {
            registrations: [],
            password: '',
            admin: false
        };
    },
    computed: {
        sortedRegistrationsD(order) {

            return this.registrations.slice().sort((a, b) => b.time - a.time);

        },
        sortedRegistrationsA(order) {

            // Sort by time in ascending order
            return this.registrations.slice().sort((a, b) => a.time - b.time);

        },

    },
    methods: {
        login() {
            if (this.password == "Speechsoso") {
                this.admin = true;
            }
        },
        downloadCsvFile() {
            let fileName = 'RegistrationData.csv'
            let csvData = this.convertJsonToCsv(this.sortedRegistrationsA)
            const blob = new Blob([csvData], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        },
        convertJsonToCsv(jsonData) {

            const separator = ',';

            // Extract keys from the first object to create CSV header
            const csvHeader = Object.keys(jsonData[0]).join(separator);

            // Convert JSON objects to CSV rows
            const csvRows = jsonData.map(obj =>
                Object.values(obj).map(value =>
                    typeof value === 'string' && value.includes(separator)
                        ? `"${value}"`
                        : value
                ).join(separator)
            );

            // Combine header and rows
            const csvContent = [csvHeader, ...csvRows].join('\n');

            return csvContent;
        }



    },
    async mounted() {
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

        const querySnapshot = await getDocs(collection(db, "registrations"));
        // fullName: this.fullName,
        //         universityId: this.universityId,
        //         phoneNumber: this.phoneNumber,
        //         email: this.email,
        //         faculty: this.faculty,
        //         department: this.department,
        //         batch: this.batch,
        //         time: new Date()
        this.registrations = querySnapshot.docs.map((doc) => {

            const data = doc.data();


            return {

                fullName: data.fullName,
                universityId: data.universityId,
                phoneNumber: data.phoneNumber,
                email: data.email,
                faculty: data.faculty,
                department: data.department,
                batch: data.batch,
                time: data.time.toDate(),
            };
        });
    }
};
</script>
  