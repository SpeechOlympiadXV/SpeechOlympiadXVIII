<script>
import AppArticle from "../components/AppArticle.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import ArticleInterview from "../components/ArticleInterview.vue";
import TechnicalTips_title_mobile from "../assets/images/TechnicalTips_title_mobile.jpg"
import TechnicalTips_title_desktop from "../assets/images/Technical_Tips.png"
import TechnicalTips_portrait from "../assets/images/TechnicalTips_portrait.jpeg"


export default {
    data() {
        return {
            TechnicalTips_title_mobile,
            TechnicalTips_title_desktop,
            TechnicalTips_portrait,
        }
    },
    components: { AppArticle, AppHeroSection, ArticleInterview },
    computed: {
        isMobile() {
            return window.matchMedia("(max-width: 768px)").matches;
        },
    },
};
</script>

<template>
    <main>
        <AppHeroSection :imagePath="isMobile
                ? TechnicalTips_title_mobile
                : TechnicalTips_title_desktop
            ">
            <!-- <div class="hero-text">
        <h1>A Guide to Becoming a Better Speaker</h1>
      </div> -->
        </AppHeroSection>
        <AppArticle>
            <p class="mt-3 first-letter">
                A single voice has the power to create a massive impact, it just needs
                the right opportunity. Speech Olympiad is a stage where revolutionary
                leaders and revolutionary speakers are discovered. To help you embark on
                this sensational journey of discovery, we got into conversation with a
                prestigious and eloquent past champion of Speech Olympiad, who shared
                some invaluable tips with us.
            </p>
            <div class="row mb-3 border">
                <div class="col d-flex text-center">
                    <p>
                        Dr. Samadhi Poornima, the Champion of Speech Olympiad IX generously
                        joined us for an interview despite her busy schedule working as a
                        Computer Vision Algorithm Researcher at Zebra Technologies. As the
                        crowned champion in 2015 along with the public speaking experience
                        she has accumulated over the years, we are most certain that
                        up-and-coming speakers will definitely have a lot to take home from
                        the answers of Dr. Poornima.
                    </p>
                </div>
            </div>

            <h3>1. What are the key points to focus on when crafting a speech?</h3>
            <ul>
                <li><b>Take home message</b></li>
                <p>
                    The message that the speaker is trying to convey is a crucial aspect
                    of a speech. It adds value to the words you speak and the effort you
                    put in.
                </p>
                <li><b>Structure of the speech</b></li>
                <p>
                    You can structure your speech in several different ways and be
                    creative with it. You can break down your speech into parts and use
                    the stage appropriately for each part. But the most important thing is
                    that your speech is clear and concise. A well-structured speech is
                    easy to follow for the audience and makes it easier to deliver for the
                    speaker.
                </p>
                <li><b>Stage movements</b></li>
                <img class="article-img article-img-resize" alt="" src="/src/assets/images/TechnicalTips_StageMovement.jpg"
                    loading="lazy" />
                <p>
                    Stage movements keep your speech alive. For example, if you are
                    talking about two friends you divide the stage into two, left and
                    right for each one.
                </p>
                <li><b>Humour</b></li>
                <img class="article-img article-img-resize" alt="" src="/src/assets/images/TechnicalTips_Humor.jpg"
                    loading="lazy" />
                <p>
                    Humour is what keeps your audience entertained and engaged. It is one
                    of the best things to include in a speech. To bring out some humour
                    does not mean you need to make your audience roll on the floor
                    laughing. A simple smile is enough to make a difference.
                </p>
                <li><b>Gestures and vocal variations</b></li>
                <p>
                    These make your speech livelier. It shows the speaker is confident and
                    adds some colour to your speech. One of the easiest ways to bring out
                    some natural variations is by adding some dialogues to your speech.
                </p>
            </ul>

            <h3>2. How should one decide on what he/she is going to speak on?</h3>

            <p>
                One of the best ways to come up with a good speech is to speak about
                your own experiences. Especially if you learnt something out of it, it
                certainly is worth sharing. This has three advantages
            </p>
            <ul>
                <li>You will never forget what you are going to say.</li>
                <li>You can say it the best. After all, it is your story!</li>
                <li>
                    You are the only one in the whole world who has gone through it. And
                    it is worth sharing.
                </li>
            </ul>

            <p>
                Another classic approach to a good speech is to talk about something
                relatable, something universal. The audience would find this quite
                interesting and feel more connected to you. You don’t need extraordinary
                facts or stories to make an interesting story. Simplicity itself can be
                quite attractive
            </p>

            <h3>3. How important is it to use stories in our speeches?</h3>

            <p>
                Stories can be interesting to add to a speech. We all love to hear
                stories. But it does not mean that you need to narrate lengthy tales.
                Something you saw on your way to university when put into the right
                words can be an interesting story.
            </p>

            <h3>4. Can you give some tips on impromptu speaking?</h3>

            <p>
                Impromptu speaking requires a lot of practice and experience. You need
                to have 3 qualities mastered when doing an impromptu speech.
            </p>
            <ul>
                <li><b>Time management</b></li>
                <p>
                    Practise how to deliver some message within the given time. Time
                    management is something you can achieve with enough practice. A
                    well-practised speaker will have an idea of what 1-minute feels like.
                </p>
                <li><b>Confidence</b></li>
                <img class="article-img article-img-resize" alt="" src="/src/assets/images/TechnicalTips_Confidence.jpg"
                    loading="lazy" />
                <p>
                    Impromptu speakers require a lot of confidence. If you are nervous you
                    might not be able to bring out the best speech you can. And through
                    practice, you build up meaningful confidence. In this practice, you
                    need to put yourself into a real situation instead of being flexible
                    and relaxed.
                </p>
                <li><b>Thinking on the stage</b></li>
                <p>
                    Practically, you might not be able to work out all the details of your
                    speech before going on to the stage. So it is likely that you might
                    have to figure out certain things while you are speaking. Figure out a
                    few things you can do to buy some thinking time on the stage. A couple
                    of things I did was purposeful repetition and asking a question from
                    the audience. Meaningful repetition can be used at any point in your
                    speech. For example, if you are talking about how your parents wanted
                    you to be a doctor you can say something like
                </p>
                <ul>
                    <li>‘The girl next door was a doctor’</li>
                    <li>‘The girl next next door was a doctor’</li>
                    <li>‘The girl next next next door was a doctor’</li>
                    <li>‘So my mama wanted me to be a doctor’</li>
                </ul>
                <p>
                    Instead of simply saying ‘my mama wanted me to be a doctor’, when you
                    use a simple phrase and repeat it, it gives you time to think without
                    making the audience feel you are struggling. And when you ask a
                    question, the general practice is you give a few seconds for the
                    audience to react. When you ask a rhetorical question, you don’t need
                    to respond to their reaction. Instead, you can take this time to think
                    and focus on what you are going to say next.
                </p>
            </ul>

            <h3>5. Do you have any tips on practising a speech?</h3>

            <p>
                Practice is key for both prepared speeches and impromptu speeches. You
                need to practise until you feel at home on a stage. Practice is what
                brings you confidence. For prepared speeches, it is good if you first
                have a basic structure of the speech organised and then practise with
                words that come to you naturally. In this way, you would be more
                comfortable with the language you use for your speech.
            </p>

            <p>A couple of things you can do to fine-tune a prepared speech are,</p>
            <ul>
                <li><b>Remove repetitions</b></li>
                <p>
                    Think carefully of each sentence, and each phrase. Think what value it
                    would add to the speech. And think if the same thing is being repeated
                    (not purposeful repetition) somewhere else in the speech
                    unintentionally.
                </p>
                <li><b>Balance your speech</b></li>
                <p>
                    Add a balance to your speech with a bit of humour and a bit of
                    seriousness. Even if the speech is about a sad story, it is good to
                    have some appropriate humour at least once. And even if the speech is
                    a humorous speech, it is great if there is an important take-home
                    message.
                </p>
                <li><b>Make it simple, clear and concise</b></li>
                <p>
                    In a prepared speech it is very important to have a clear structure to
                    your speech. It should be easy-to-follow and meaningful to what you
                    say. Something I personally followed for practising a prepared speech
                    was to watch some world championship speeches. When I say watch it, I
                    mean ‘watch it watch it’ where you notice the structure, notice the
                    way they start, take transitions and bring out the message.
                </p>
            </ul>

            <p>
                Practising an impromptu speech can be a bit tricky. Because even if you
                practise 1000 speeches, the next one could be an entirely different
                experience. These are some ways of practising impromptu speeches that I
                personally followed.
            </p>

            <ul>
                <li>
                    Have some generic stories ready. These could be targeted for some
                    common impromptu topics such as never giving up, little things matter
                    in life and being true to yourself etc.
                </li>
                <li>
                    Have some facts ready. It is good to have some general knowledge facts
                    ready when you are practising for an impromptu speech. You don’t need
                    to memorise a whole list but 5 key facts from different areas can be
                    helpful if you can’t think of a story related to the topic you got.
                    This could be about areas like economy, education or some great
                    sayings etc.
                </li>
                <li>
                    Be ready to think of something entirely new then and there. This is an
                    example I heard from someone when I was practising. So this guy has
                    got the topic ‘Michael Jordan’ as the title for his impromptu speech.
                    He started the speech with “I don’t know who Michael Jordan is but I
                    know a guy named Michael and another guy named Jordan”, and went on to
                    deliver a very interesting speech which was completely unexpected.
                </li>
                <li>
                    Practise coming up with an impromptu speech response within 2 minutes. And if
                    you could not, just deliver whatever that you manage to come up with
                    then and there. Experience how you work under pressure. With each
                    practice, you will improve. And once you feel confident, try lowering
                    this time, now try to come up with an impromptu speech in 1 and half
                    minutes. And next, try 1 minute. When you practice like this, even if
                    nothing comes to your mind in the first minute, you would still be
                    able to remain calm and think clearly because you know you can come up
                    with something successful even in the last few seconds.
                </li>
                <li>
                    It is okay to practise on the same topic several times. No need to have a
                    new topic each time you practise. But practise facing completely
                    unheard of topics as well, just to broaden your thinking.
                </li>
                <li>
                    No need to practise for long hours. So do not exhaust yourself. You might
                    get tired and lose interest.
                </li>
            </ul>

            <p>
                From deciding on what to speak, crafting your speech, practising your
                speech, to finally delivering your speech, each and every aspect needed
                for a good public speaker was insightfully addressed in detail by Dr.
                Poornima Take in and practise what you have learnt. Showcase your
                progress at Speech Olympiad. Get onto that stage and speak your heart
                out, because the speech you deliver today can be the reason for a
                changed world tomorrow.
            </p>

            <ArticleInterview author-name="Udesh Dangalla" interviewee-name="Dr. Samadhi Poornima"
                :intervieweeImg="TechnicalTips_portrait" />
        </AppArticle>
    </main>
</template>

<style scoped>
.box-img {
    height: 200px;
    aspect-ratio: 1/1;
    background-color: grey;
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
</style>
