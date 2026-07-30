<template>
    <div class="speech-olympiad">
        <AppHeroSection :imagePath="MadutshikaTitle">
            <!-- <div class="hero-text">
        <h1>A Guide to Becoming a Better Speaker</h1>
      </div> -->
        </AppHeroSection>
        <AppArticle>
            <h1 class=" mt-4 text-3xl font-bold mb-4">{{ title }}</h1>

            <!-- Introductory Session Content -->
            <div class="introductory-session mb-6">
                <p>{{ introductorySession }}</p>


                <iframe class="yt" src="https://www.youtube.com/embed/HSxRUYzGuug?si=yGchZu65h2WudLDt"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>


                <!-- The Art of Storytelling -->
                <h2 class="text-2xl font-bold mt-4">{{ storytellingTitle }}</h2>
                <p>{{ storytellingContent }}</p>
                <img class="article-img article-img-resize" alt="" :src="Madutshika1" loading="lazy" />
                <!-- Structuring Your Speech -->
                <h2 class="text-2xl font-bold mt-4">{{ structuringTitle }}</h2>
                <p>{{ structuringContent }}</p>

                <!-- Delivering Your Speech -->
                <h2 class="text-2xl font-bold mt-4">{{ deliveringTitle }}</h2>
                <p>{{ deliveringContent }}</p>
                <ul>
                    <li v-for="(point, index) in deliveringPoints" :key="index">{{ point }}</li>
                </ul>
                <p>Managing these elements especially in the first 40 seconds and throughout your speech produces an
                    interesting and effective presentation.</p>
                <img class="article-img article-img-resize" alt="" :src="Madutshika2" loading="lazy" />
                <!-- Where to Find Stories -->
                <h2 class="text-2xl font-bold mt-4">{{ findingStoriesTitle }}</h2>
                <p>{{ findingStoriesContent }}</p>

                <!-- How to Craft the Speech -->
                <h2 class="text-2xl font-bold mt-4">{{ craftingSpeechTitle }}</h2>
                <ul>
                    <li v-for="(point, index) in craftingSpeechPoints" :key="index">{{ point }}</li>
                </ul>

                <!-- Evaluation Criteria of Gavel -->
                <h2 class="text-2xl font-bold mt-4">{{ evaluationCriteriaTitle }}</h2>
                <p>{{ evaluationCriteriaContent }}</p>
                <img class="article-img article-img-resize" alt="" :src="Madutshika3" loading="lazy" />
                <!-- Conclusion -->

                <p>{{ conclusionContent }}</p>

            </div>


            <!-- Author -->
            <ArticleInterview :author-name="author" interviewee-name="Madushika Munasinghe"
                :intervieweeImg="MadushikaPortrait" />
        </AppArticle>


    </div>
</template>
  
<script>
import AppArticle from "../components/AppArticle.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import MadutshikaTitle from "../assets/images/Madushika_title.png";
import Madutshika1 from "../assets/images/Madushika1.jpeg";
import Madutshika2 from "../assets/images/Madushika2.jpeg";
import Madutshika3 from "../assets/images/Madushika3.jpeg";
import ArticleInterview from "../components/ArticleInterview.vue";
import TechnicalTips_portrait from "../assets/images/TechnicalTips_portrait.jpeg"
import MadushikaPortrait from "../assets/images/Madushika_portrait.jpg"
export default {
    name: "Madushika",
    components: { AppArticle, AppHeroSection, ArticleInterview },

    data() {
        return {
            TechnicalTips_portrait,
            Madutshika1,
            Madutshika2,
            Madutshika3,
            MadutshikaTitle,
            MadushikaPortrait,
            title: "Embarking Eloquence: An In-depth Look at the Introductory Session of Speech Olympiad 16 by Gavel Mora",
            introductorySession: "The introductory session of Speech Olympiad 16 by Gavel Mora, helmed by the insightful Toastmaster Madushika Munasingha, delved into the intricacies of public speaking, providing attendees with a comprehensive workshop. The session covered essential aspects of effective communication, from the art of storytelling and structuring speeches, to delivering them.",
            storytellingTitle: "The Art of Storytelling",
            storytellingContent: "Storytelling is a subtle skill that involves more than just relaying events. She underlined the significance of engaging the audience's emotions, engrossing them in the story, and forging a bond. Understanding the audience's demographics and interests is the first step in crafting a tale that will speak to their experiences, worldviews, or aspirations. The story comes alive when relatable characters, striking imagery, and intense conflicts are present. This has a significant effect on the listeners.",
            structuringTitle: "Structuring Your Speech",
            structuringContent: "A well-structured speech is akin to a well-designed building—it has a strong foundation and a logical flow.  The introduction sets the tone, grabbing the audience's attention with a compelling hook or a thought-provoking question. The body of the speech elaborates on the key points, employing a coherent and organized structure. Each point should seamlessly transition into the next, guiding the audience through the storyline. Finally, the conclusion should summarize the speech's essence, leaving a memorable impression and potentially inciting action or contemplation.",
            deliveringTitle: "Delivering Your Speech",
            deliveringContent: "Your first 40 seconds of a speech are crucial to captivating your audience. During this vital time, delivery is key.  Eye contact connects you with the audience and draws them into your story. Sincere, well-placed gazes express confidence, genuineness, and rapport.",
            deliveringPoints: [
                "In combination with captivating eye contact, body language is dynamic. Your posture, gestures, and facial emotions should support your statements, magnifying them. The appropriate body language emphasises essential themes, shows excitement, and makes your speech memorable.",
                "The melody that complements the text is vocal variety. Like a story, your voice should change pitch, tempo, and loudness to keep listeners engaged. Different vocal tones offer depth, emotion, and emphasis, making even an average speech compelling.",
            ],
            findingStoriesTitle: "Where to Find Stories",
            findingStoriesContent: "To find interesting stories, you have to be a good observer and understand what people go through. Stories can come from many different places, like your own life, books, history, or even the lives of your friends and family. Everyday events can be turned into interesting stories that make people feel something. The key is to find the emotional or familiar parts of the story and tell them in a way that makes people want to listen.",
            craftingSpeechTitle: "How to Craft the Speech",
            craftingSpeechPoints: [
                "Crafting a speech involves meticulous planning and consideration of various elements. Clarity in conveying the message is paramount, ensuring the audience understands the purpose and takeaway of the speech.",
                "Coherence ensures that ideas flow logically and smoothly from one point to the next, aiding comprehension. Conciseness involves presenting the speech in a way that is both comprehensive and to the point, respecting the audience's time and attention.",
            ],
            evaluationCriteriaTitle: "Evaluation Criteria of Gavel",
            evaluationCriteriaContent: "To continuously improve as a speaker, one must embrace feedback and constructive criticism. Gavel Mora's evaluation criteria encompass a holistic view of a speech.  Content is evaluated for its relevance, depth, and originality. The organisation is assessed to ensure a clear structure and effective transitions. Delivery focuses on the speaker's presence, charisma, and connection with the audience. Language evaluates the choice of words, grammar, and overall articulation. Lastly, overall impact assesses how well the speech achieves its intended purpose and resonates with the audience.",
            conclusionTitle: "In conclusion",
            conclusionContent: "In conclusion, the introductory session of Speech Olympiad XVI by Gavel Mora, under the guidance of Toastmaster Madushika Munasingha, provided invaluable insights into the art of eloquence. Aspiring speakers can utilise these profound insights to refine their storytelling abilities, enhance speech structures, master effective delivery, curate compelling stories, craft impactful speeches, and understand the critical evaluation criteria. Armed with this knowledge, speakers can elevate their public speaking skills and captivate audiences, ultimately leaving a lasting impression in the realm of oratory.",
            author: "Adeepa Kularathna",
        };
    },
};
</script>
  
<style scoped>
ul {

    list-style: none;
    margin-left: 20px;

    padding-left: 20px;

}


li {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 10px;
    border : none;
}

p {
    @apply font-extralight mt-2 mb-2
}

.yt {
    width: 100%;
    height: 500px;
}

@media only screen and (max-width: 767px) {
    .yt {
        width: 100%;
        height: 220px;
    }
}
</style>
  