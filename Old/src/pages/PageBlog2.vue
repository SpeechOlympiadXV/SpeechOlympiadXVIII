
  
<template>
    <div>
        <div v-if="isLoading" class="loading">Loading...</div>
        <div v-else>
            <h1>{{ postData.title }}</h1>
            <div v-html="postData.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            postData: {},
        };
    },
    methods: {
        handleResponse(response) {
            this.postData.title = response.title;
            this.postData.content = response.content;
            this.isLoading = false;
        },
    },
    mounted() {
        // Replace 'YOUR-API-KEY' with your actual API key
        const apiKey = 'AIzaSyBMOiTpc_PPERG4ZhPbTQIZ8uAHnNzsKos';
        // Replace the API URL with your Blogger API endpoint
        const apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://speecholympiad.blogspot.com/?key=' + apiKey;
        window.handleResponse = this.handleResponse;
        // Fetch data from the Blogger API using JSONP
        const script = document.createElement('script');
        script.src = apiUrl + '&callback=handleResponse';
        document.body.appendChild(script);
    },
};
</script>

<style scoped>
.loading {
    text-align: center;
    margin: 20px;
    font-size: 18px;
}
</style>

