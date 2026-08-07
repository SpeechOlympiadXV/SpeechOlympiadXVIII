<script>
export default {
    data: () => ({
        years: [
            {
                title: "Registrations Open",
                color: 'amber-lighten-4',
                date: '',
            },
            {
                title: "Registrations Closing",
                color: 'amber-lighten-3',
                date: '',
            },
            {
                title: "Preliminary Round",
                color: 'amber-lighten-2',
                date: '',
            },
            {
                title: "Announcing Semi Finalists",
                color: 'amber-lighten-1',
                date: '',
            },
            {
                title: "Semi Finals",
                color: 'amber-darken-1',
                date: '',
            },
            {
                title: "Announcing Finalists",
                color: 'amber-darken-2',
                date: '',
            },
            {
                title: "Finals",
                color: 'amber-darken-3',
                date: '',
            },
            {
                title: "Announcing Winners",
                color: 'amber-darken-4',
                date: '',
            },
        ],
    }),
    methods: {
        handleClick(title) {
            switch (title) {
                case "Registrations Open":
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
    }
}
</script>
<template>
    <div class=" w-full justify-center flex  items-center bg-gradient-to-br to-transparent from-zinc-900">
        <div class="md:w-1/2 w-full py-4 px-5">
            <v-timeline align="start">
                <v-timeline-item v-for="(date, i) in years" :key="i" :dot-color="date.color" size="small">
                    <template v-slot:opposite>
                        <h2 :class="`mt-n1 text-xl  cursor-pointer headline font-weight-light mb-4 text-${date.color}`"
                            @click="handleClick(date.title)">
                            {{ date.title }}
                        </h2>
                    </template>
                    <div class=" justify-center items-center">

                        <div :class="`pt-1 headline font-weight-bold text-blue-grey-lighten-5 `" v-text="date.date"></div>
                        <!-- <div>
                            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                            euismod
                            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix
                            an
                            salutandi sententiae. -->
                        <!-- </div> -->
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</template>