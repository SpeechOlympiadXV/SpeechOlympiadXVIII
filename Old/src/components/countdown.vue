<template>
    <h1
        class="text-xl antialiased tracking-tight italic  bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300">
        {{ countdown }}</h1>
</template>
  
<script>
export default {
    props: {
        targetDate: {
            type: String, // Adjust the type to match your date format (e.g., String or Date)
            required: true,
        },
    },
    data() {
        return {
            intervalId: null,
            countdown: 'Calculating...',
        };
    },
    methods: {
        updateCountdown() {
            const targetDate = new Date(this.targetDate)
            targetDate.setHours(17, 0, 0, 0)
            const currentDate = new Date().getTime();
            const timeDifference = targetDate - currentDate;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                this.countdown = `${days}D ${hours}H ${minutes}M ${seconds}S`;
            } else {
                this.countdown = 'Concluded';
                clearInterval(this.intervalId);
            }
        },
    },
    mounted() {
        this.intervalId = setInterval(this.updateCountdown, 1000);
        this.updateCountdown(); // Initial update
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
};
</script>
  