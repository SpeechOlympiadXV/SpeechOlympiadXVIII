<script>
import AppArticle from "../components/AppArticle.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import ArticleInterview from "../components/ArticleInterview.vue";
import TechnicalTips_title_mobile from "../assets/images/Kasunayyamobile.jpg"
import TechnicalTips_title_desktop from "../assets/images/kasunayyawebsite.jpg"
import TechnicalTips_portrait from "../assets/images/Kasunayya.jpg"
import artofw2 from '../assets/images/artofw2.jpg'
import artofw1 from '../assets/images/artofw1.jpg'
import artofw3 from '../assets/images/artofw3.jpg'

export default {
    data() {
        return {
            TechnicalTips_title_mobile,
            TechnicalTips_title_desktop,
            TechnicalTips_portrait,
            artofw2,
            artofw1,
            artofw3
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
            <br />
            <div class="">
                <p class="c2 c16 title font-sans" id="h.wms3e5hwjto3"><span class="c12">The Art of Winning - Perfecting
                        Speech
                        Delivery</span>
                </p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 box p-4"><span class="c1 ">&ldquo;Speech delivery is giving a message to someone close to you
                        and
                        having
                        them
                        take that message home and change their life&rdquo;</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Mr. Kasun Ranasinghe, the Champion of Speech Olympiad X joined us on the 26th
                        of
                        September at the university premises as he conducted the insightful session &ldquo;The Art of
                        Winning:
                        Perfecting Speech Delivery&rdquo;. Throughout the session, invaluable advice on how to improve
                        speech
                        delivery were shared with the audience, </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <iframe class="yt" src="https://www.youtube.com/embed/vOpEEHQlGZw?si=2GX8MCSd43rDVfu9"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <br />
                <p class="c0"><span class="c1">The delivery of a speech can be broken down into three parts according to the
                        Ballot
                        Sheet of Toastmasters International.</span></p>
                <ol class="c9 lst-kix_pmqmksavhi6b-0 start" start="1">
                    <li class="c0 c7 li-bullet-0"><span class="c1">Physical</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Voice </span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Manner</span></li>
                </ol>
                <p class="c0 c5"><span class="c1"></span></p>
                <ol class="c9 lst-kix_7ko1h4v9zlih-0 start" start="1">
                    <li class="c8 c7 c2 li-bullet-0">
                        <h2 id="h.1qbjc61oct0e" style="display:inline"><span class="c10">Physical</span></h2>
                    </li>
                </ol>
                <p class="c0"><span class="c1">This can be broken down into the following three parts:</span></p>
                <ul class="c9 lst-kix_tazkv7wcu6b-0 start">
                    <li class="c0 c7 li-bullet-0"><span class="c1">Appearance</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Body Language</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Speaking area.</span></li>
                </ul>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span>Mr. Ranasinghe categorized physical</span><span class="c1">&nbsp;into the following
                        three
                        parts:</span></p>
                <ul class="c9 lst-kix_ak5zp9fuc8ee-0 start">
                    <li class="c0 c7 li-bullet-0"><span class="c1">What you wear</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">How your body moves</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c13">Where your body moves on stage</span></li>
                </ul>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.38mlahw6wktt"><span class="c3">What you wear</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">The judges start to judge you from the moment you stand up from your seat,
                        thus
                        it is
                        really important to wear something appropriate. That being said if there is a particular dress that
                        fits
                        your speech, then wear it with pride. It may be a hiker, a Dracula, a musician, or even a cat, as
                        long
                        as it
                        fits the speech. </span></p>

                <p class="c0 c5"><span class="c1"></span></p>
                <img class="article-img article-img-resize" alt="" :src="artofw2" loading="lazy" />
                <p class="c0 c2 subtitle" id="h.buih014187ap"><span class="c3">How your body moves</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">The art of effective communication is not confined to words alone; it extends
                        to
                        gestures and body language. This helps engage the audience throughout the speech, making it a more
                        effective
                        delivery. It is widely believed that 70% of communication is non-verbal, underscoring the importance
                        of
                        gestures and body movement. Regardless of how good your content is, if your body movements do not
                        align
                        with
                        your content, the overall effectiveness of the delivery will be reduced.</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">The neutral speaking pose, as described by the speaker, is a relaxed position
                        where
                        you avoid excessive hand movements or swaying. It serves as the foundation for effective body
                        language.
                        Building upon this foundation, gestures, and movements are used strategically to communicate with
                        the
                        audience and reinforce your ideas. This includes how you use your hands, feet, and face to enhance
                        your
                        message. The same phrase can be delivered in various ways to evoke different emotions. For example,
                        the
                        phrase &#39;I&#39;m going home with my wife tonight!&#39; can be delivered to convey excitement,
                        sadness,
                        fear, surprise, worry, or pride. Additionally, facial expressions play a significant role, although
                        it&#39;s
                        important to use them in moderation.</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.oa90xq9uyw2y"><span class="c3">Where your body moves on stage</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span>Mr. Ranasinghe classified the aforementioned </span><span class="c1">topic into the
                        following
                        sections.</span></p>
                <ul class="c9 lst-kix_xrfo7x2qn95k-0 start">
                    <li class="c0 c7 li-bullet-0"><span class="c1">Where to start?</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Timeline technique</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Location technique</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Dialogue</span></li>
                </ul>
                <h1 class="c4 c2" id="h.grln4lm4lz8q"><span class="c11">Where to start</span></h1>
                <p class="c0"><span class="c1">As a basic practice, speeches are often started from the centre of the stage
                        because
                        they provide good reach to either side of the audience members. However, as you advance, you may
                        want to
                        start your speech in different areas, such as from a corner of the stage. It should be noted that
                        during
                        competitions, there is a designated speaking area. In such cases, you will have to limit your
                        movement
                        within this area.</span></p>
                <h1 class="c4 c2" id="h.zdlg59pvq85k"><span class="c6">Timeline Technique</span></h1>
                <p class="c0"><span class="c1">This approach divides the stage into a timeline, with the left side of the
                        stage
                        (from the audience&#39;s perspective) representing the past and the right side indicating the
                        future.
                    </span></p>
                <h1 class="c4 c2" id="h.wd6jipmkt86e"><span class="c6">Location Technique</span></h1>
                <p class="c0"><span class="c1">This approach divides the stage into various locations that correspond to
                        different
                        parts of your speech. For instance, the left side of the stage can represent your home, while the
                        right
                        side
                        can symbolize the hospital</span></p>
                <h1 class="c2 c4" id="h.ymha6omtkzbn"><span class="c6">Dialogue</span></h1>
                <p class="c0"><span class="c1">Two characters can be brought to life by roleplaying a dialogue during a
                        speech.
                        In
                        order to differentiate the characters, take a step and turn in the opposite direction at a 45-degree
                        angle
                        so as to mimic the two characters having a conversation. In order to add further depth, appropriate
                        vocal
                        variation as well as other details such as the height difference can be incorporated.</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <img class="article-img article-img-resize" alt="" :src="artofw3" loading="lazy" />
                <ol class="c9 lst-kix_7ko1h4v9zlih-0" start="2">
                    <li class="c7 c2 c8 li-bullet-0">
                        <h2 id="h.cod6w868s6iq" style="display:inline"><span class="c10">Voice</span></h2>
                    </li>
                </ol>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Talking of &lsquo;Voice&rsquo;, Mr Ranasinghe classified it into 4Ps:</span>
                </p>
                <ul class="c9 lst-kix_ab2ah0i7ra7r-0 start">
                    <li class="c0 c7 li-bullet-0"><span class="c1">Pitch</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Pace</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Pause</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Power</span></li>
                </ul>
                <p class="c0 c5 c14"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.bjc5pqer2e80"><span class="c3">Pitch</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">This refers to the highs and lows in your speech. This can be used to bring
                        out
                        different characters or emotions in your speech. </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.ufkrddadvbqv"><span class="c3">Pace</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">In a nutshell, pace is the rate of speech. On average roughly 100 words per
                        minute
                        are spoken. However, if one fails to vary this pace in his speech, the audience will lose interest
                        in
                        his/her speech. Further, by slowing your pace you can give emphasis to certain phrases.</span></p>
                <p class="c0"><span class="c1">&nbsp;</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.t8rcdgxtumad"><span class="c3">Pause</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Pause is a lethal weapon if used in the correct way. It can be used to build
                        anticipation or even bring in humour by having a twist. </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.37j34bmro2q5"><span class="c3">Power</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">This is a measurement of the volume of your voice, determining how loud or
                        soft
                        it
                        is. It&#39;s crucial to ensure your voice is sufficiently loud to be heard clearly at the back of
                        the
                        room.
                        Nevertheless, by reducing to a softer tone, you could give more emphasis to a certain word or
                        phrase.</span>
                </p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <ol class="c9 lst-kix_7ko1h4v9zlih-0" start="3">
                    <li class="c8 c7 c2 li-bullet-0">
                        <h2 id="h.s7t6i9g9c9qd" style="display:inline"><span class="c10">Manner</span></h2>
                    </li>
                </ol>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Afterwards, Mr. Ranasinghe went on to speak about &lsquo;Manner&rsquo;.
                        There, he
                        gave away some tips. </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">While delivering your speech you have to be confident and cheerful. One of
                        the
                        main
                        ways to portray your confidence is by interacting with your audience. Here are a few ways on how to
                        interact
                        with the audience:</span></p>

                <ul class="c9 lst-kix_4uv93r2jcapf-0 start">
                    <li class="c0 c7 li-bullet-0"><span class="c1">Ask questions</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Take examples from the audience</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">React to the audience</span></li>
                    <li class="c0 c7 li-bullet-0"><span class="c1">Maintain eye contact</span></li>
                </ul>
                <br />
                <img class="article-img article-img-resize" alt="" :src="artofw1" loading="lazy" />
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.c3ieq2r65e5u"><span class="c3">Asking questions</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">By asking questions, a speaker portrays his confidence by showing that he is
                        prepared
                        to adapt based on the answer. Questions can either be general or specified to a certain audience
                        member
                        as
                        well. </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.945rl3oeu7gd"><span class="c3">Take examples from the audience</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">By using examples from the audience, you can establish a connection with your
                        audience and demonstrate your confidence in adapting your speech content to their context. </span>
                </p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.i3a31xympr2y"><span class="c3">React to the audience</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Observing the emotions of the audience and reacting accordingly can
                        significantly
                        enhance your ability to convey your message effectively.</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0 c2 subtitle" id="h.90c8q6fwagx3"><span class="c3">Maintain eye contact</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Direct eye contact conveys confidence and enthusiasm. However, maintaining
                        eye
                        contact with an entire audience, especially on a large stage, can be challenging. To address this,
                        the
                        stage
                        can be mentally divided into segments, allowing the speaker to make meaningful eye contact with
                        different
                        sections of the audience. The underlying message here is that maintaining eye contact, even with a
                        portion
                        of the audience, signifies confidence and engagement.</span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">Mr. Ranasinghe emphasized that besides the physical, voice and manner, the
                        most
                        crucial element is to have fun! He mentioned that having fun would allow you to enjoy your speech
                        and
                        have
                        an amazing journey. </span></p>
                <p class="c0 c5"><span class="c1"></span></p>
                <p class="c0"><span class="c1">So, embrace these techniques, have fun, and set forth on your path to
                        becoming an
                        eloquent public speaker!</span></p>
                <br />
            </div>
            <ArticleInterview author-name="Saai Syvendra" interviewee-name="Kasun Ranasinghe"
                :intervieweeImg="TechnicalTips_portrait" />
        </AppArticle>
    </main>
</template>

<style scoped>
li {
    list-style: none;
    border: none;
    box-shadow: none;
}

.box-img {
    height: 200px;
    aspect-ratio: 1/1;
    background-color: grey;
}



ul.lst-kix_xrfo7x2qn95k-6 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-3 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-5 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-4 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-8 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-1 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-7 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-2 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-7 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-8 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-5 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-6 {
    list-style-type: none
}

.lst-kix_pmqmksavhi6b-0>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-0, decimal) ". "
}

ul.lst-kix_xrfo7x2qn95k-0 {
    list-style-type: none
}

.lst-kix_pmqmksavhi6b-1>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-1, lower-latin) ". "
}

.lst-kix_7ko1h4v9zlih-2>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-2
}

ul.lst-kix_xrfo7x2qn95k-2 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-1 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-4 {
    list-style-type: none
}

ul.lst-kix_xrfo7x2qn95k-3 {
    list-style-type: none
}

.lst-kix_pmqmksavhi6b-8>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-8
}

.lst-kix_7ko1h4v9zlih-1>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-1
}

.lst-kix_7ko1h4v9zlih-0>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-0, decimal) ". "
}

ol.lst-kix_7ko1h4v9zlih-0 {
    list-style-type: none
}

.lst-kix_7ko1h4v9zlih-4>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-4, lower-latin) ". "
}

ol.lst-kix_pmqmksavhi6b-3.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-3 0
}

.lst-kix_pmqmksavhi6b-7>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-7
}

ol.lst-kix_7ko1h4v9zlih-2.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-2 0
}

.lst-kix_7ko1h4v9zlih-1>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-1, lower-latin) ". "
}

.lst-kix_7ko1h4v9zlih-5>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-5, lower-roman) ". "
}

.lst-kix_pmqmksavhi6b-8>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-8, lower-roman) ". "
}

.lst-kix_pmqmksavhi6b-7>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-7, lower-latin) ". "
}

.lst-kix_7ko1h4v9zlih-2>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-2, lower-roman) ". "
}

.lst-kix_7ko1h4v9zlih-3>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-3, decimal) ". "
}

ol.lst-kix_pmqmksavhi6b-0.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-0 0
}

.lst-kix_pmqmksavhi6b-4>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-4, lower-latin) ". "
}

.lst-kix_pmqmksavhi6b-3>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-3, decimal) ". "
}

.lst-kix_pmqmksavhi6b-5>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-5, lower-roman) ". "
}

ol.lst-kix_pmqmksavhi6b-6.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-6 0
}

.lst-kix_pmqmksavhi6b-2>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-2, lower-roman) ". "
}

.lst-kix_pmqmksavhi6b-6>li:before {
    content: "" counter(lst-ctn-kix_pmqmksavhi6b-6, decimal) ". "
}

.lst-kix_7ko1h4v9zlih-8>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-8, lower-roman) ". "
}

.lst-kix_xrfo7x2qn95k-8>li:before {
    content: "\0025a0   "
}

.lst-kix_7ko1h4v9zlih-6>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-6, decimal) ". "
}

.lst-kix_7ko1h4v9zlih-7>li:before {
    content: "" counter(lst-ctn-kix_7ko1h4v9zlih-7, lower-latin) ". "
}

ol.lst-kix_7ko1h4v9zlih-1.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-1 0
}

.lst-kix_pmqmksavhi6b-6>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-6
}

ol.lst-kix_7ko1h4v9zlih-8.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-8 0
}

.lst-kix_7ko1h4v9zlih-4>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-4
}

.lst-kix_pmqmksavhi6b-0>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-0
}

.lst-kix_7ko1h4v9zlih-5>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-5
}

ol.lst-kix_pmqmksavhi6b-2.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-2 0
}

ol.lst-kix_pmqmksavhi6b-8.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-8 0
}

ol.lst-kix_7ko1h4v9zlih-7.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-7 0
}

ol.lst-kix_pmqmksavhi6b-1.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-1 0
}

.lst-kix_tazkv7wcu6b-0>li:before {
    content: "\0025cf   "
}

.lst-kix_tazkv7wcu6b-1>li:before {
    content: "\0025cb   "
}

.lst-kix_tazkv7wcu6b-3>li:before {
    content: "\0025cf   "
}

.lst-kix_tazkv7wcu6b-2>li:before {
    content: "\0025a0   "
}

ol.lst-kix_pmqmksavhi6b-1 {
    list-style-type: none
}

.lst-kix_tazkv7wcu6b-5>li:before {
    content: "\0025a0   "
}

ol.lst-kix_pmqmksavhi6b-0 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-3 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-3.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-3 0
}

.lst-kix_ab2ah0i7ra7r-0>li:before {
    content: "\0025cf   "
}

ol.lst-kix_pmqmksavhi6b-2 {
    list-style-type: none
}

.lst-kix_pmqmksavhi6b-3>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-3
}

ol.lst-kix_pmqmksavhi6b-4.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-4 0
}

.lst-kix_ab2ah0i7ra7r-1>li:before {
    content: "\0025cb   "
}

.lst-kix_tazkv7wcu6b-4>li:before {
    content: "\0025cb   "
}

.lst-kix_7ko1h4v9zlih-7>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-7
}

.lst-kix_ab2ah0i7ra7r-3>li:before {
    content: "\0025cf   "
}

.lst-kix_ak5zp9fuc8ee-4>li:before {
    content: "\0025cb   "
}

.lst-kix_ab2ah0i7ra7r-2>li:before {
    content: "\0025a0   "
}

.lst-kix_ab2ah0i7ra7r-4>li:before {
    content: "\0025cb   "
}

.lst-kix_7ko1h4v9zlih-8>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-8
}

.lst-kix_ak5zp9fuc8ee-5>li:before {
    content: "\0025a0   "
}

.lst-kix_tazkv7wcu6b-7>li:before {
    content: "\0025cb   "
}

.lst-kix_tazkv7wcu6b-6>li:before {
    content: "\0025cf   "
}

.lst-kix_ak5zp9fuc8ee-7>li:before {
    content: "\0025cb   "
}

.lst-kix_ab2ah0i7ra7r-7>li:before {
    content: "\0025cb   "
}

ol.lst-kix_7ko1h4v9zlih-0.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-0 0
}

.lst-kix_ak5zp9fuc8ee-6>li:before {
    content: "\0025cf   "
}

.lst-kix_ak5zp9fuc8ee-8>li:before {
    content: "\0025a0   "
}

.lst-kix_ab2ah0i7ra7r-6>li:before {
    content: "\0025cf   "
}

ol.lst-kix_pmqmksavhi6b-7.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-7 0
}

.lst-kix_ab2ah0i7ra7r-5>li:before {
    content: "\0025a0   "
}

.lst-kix_tazkv7wcu6b-8>li:before {
    content: "\0025a0   "
}

.lst-kix_pmqmksavhi6b-4>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-4
}

.lst-kix_ab2ah0i7ra7r-8>li:before {
    content: "\0025a0   "
}

.lst-kix_ak5zp9fuc8ee-3>li:before {
    content: "\0025cf   "
}

.lst-kix_pmqmksavhi6b-2>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-2
}

.lst-kix_ak5zp9fuc8ee-2>li:before {
    content: "\0025a0   "
}

.lst-kix_pmqmksavhi6b-5>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-5
}

.lst-kix_ak5zp9fuc8ee-1>li:before {
    content: "\0025cb   "
}

ol.lst-kix_7ko1h4v9zlih-6.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-6 0
}

.lst-kix_ak5zp9fuc8ee-0>li:before {
    content: "\0025cf   "
}

ul.lst-kix_tazkv7wcu6b-2 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-1 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-0 {
    list-style-type: none
}

.lst-kix_xrfo7x2qn95k-6>li:before {
    content: "\0025cf   "
}

ul.lst-kix_tazkv7wcu6b-6 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-5 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-4 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-3 {
    list-style-type: none
}

.lst-kix_xrfo7x2qn95k-3>li:before {
    content: "\0025cf   "
}

.lst-kix_xrfo7x2qn95k-7>li:before {
    content: "\0025cb   "
}

ul.lst-kix_tazkv7wcu6b-8 {
    list-style-type: none
}

ul.lst-kix_tazkv7wcu6b-7 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-2 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-1 {
    list-style-type: none
}

.lst-kix_4uv93r2jcapf-1>li:before {
    content: "\0025cb   "
}

ul.lst-kix_ak5zp9fuc8ee-4 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-3 {
    list-style-type: none
}

.lst-kix_4uv93r2jcapf-2>li:before {
    content: "\0025a0   "
}

.lst-kix_xrfo7x2qn95k-4>li:before {
    content: "\0025cb   "
}

ul.lst-kix_ak5zp9fuc8ee-0 {
    list-style-type: none
}

.lst-kix_xrfo7x2qn95k-5>li:before {
    content: "\0025a0   "
}

.lst-kix_4uv93r2jcapf-4>li:before {
    content: "\0025cb   "
}

ol.lst-kix_7ko1h4v9zlih-5.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-5 0
}

.lst-kix_4uv93r2jcapf-3>li:before {
    content: "\0025cf   "
}

.lst-kix_4uv93r2jcapf-5>li:before {
    content: "\0025a0   "
}

.lst-kix_4uv93r2jcapf-8>li:before {
    content: "\0025a0   "
}

.lst-kix_xrfo7x2qn95k-2>li:before {
    content: "\0025a0   "
}

.lst-kix_4uv93r2jcapf-7>li:before {
    content: "\0025cb   "
}

.lst-kix_pmqmksavhi6b-1>li {
    counter-increment: lst-ctn-kix_pmqmksavhi6b-1
}

.lst-kix_4uv93r2jcapf-6>li:before {
    content: "\0025cf   "
}

.lst-kix_xrfo7x2qn95k-0>li:before {
    content: "\0025cf   "
}

.lst-kix_xrfo7x2qn95k-1>li:before {
    content: "\0025cb   "
}

.lst-kix_7ko1h4v9zlih-3>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-3
}

.lst-kix_7ko1h4v9zlih-0>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-0
}

.lst-kix_7ko1h4v9zlih-6>li {
    counter-increment: lst-ctn-kix_7ko1h4v9zlih-6
}

ol.lst-kix_pmqmksavhi6b-5.start {
    counter-reset: lst-ctn-kix_pmqmksavhi6b-5 0
}

ul.lst-kix_4uv93r2jcapf-0 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-0 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-1 {
    list-style-type: none
}

li.li-bullet-0:before {
    margin-left: -18pt;
    white-space: nowrap;
    display: inline-block;
    min-width: 18pt
}

ul.lst-kix_4uv93r2jcapf-4 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-4 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-5 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-8 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-3 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-2 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-2 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-3 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-1 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-8 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-6 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-5 {
    list-style-type: none
}

ol.lst-kix_7ko1h4v9zlih-4.start {
    counter-reset: lst-ctn-kix_7ko1h4v9zlih-4 0
}

ul.lst-kix_ab2ah0i7ra7r-8 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-5 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-4 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-7 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-6 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-8 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-7 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-6 {
    list-style-type: none
}

ul.lst-kix_4uv93r2jcapf-7 {
    list-style-type: none
}

ul.lst-kix_ak5zp9fuc8ee-7 {
    list-style-type: none
}

ol.lst-kix_pmqmksavhi6b-6 {
    list-style-type: none
}

ul.lst-kix_ab2ah0i7ra7r-5 {
    list-style-type: none
}

.lst-kix_4uv93r2jcapf-0>li:before {
    content: "\0025cf   "
}

ol {
    margin: 0;
    padding: 0
}

table td,
table th {
    padding: 0
}

.c1 {
    color: #ffffff;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 11pt;


}

.c6 {
    color: #ffffff;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 13pt;


}

.c12 {
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 18pt;


}

.c10 {
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 15pt;

}

.c3 {
    color: #ffffff;
    font-weight: 500;
    text-decoration: none;
    vertical-align: baseline;
    font-size: 15pt;

}

.c0 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    line-height: 1.15;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c4 {
    padding-top: 20pt;
    padding-bottom: 6pt;
    line-height: 1.15;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c16 {
    padding-top: 0pt;
    padding-bottom: 3pt;
    line-height: 1.15;
    orphans: 2;
    widows: 2;
    text-align: center
}

.c8 {
    padding-top: 0pt;
    padding-bottom: 3pt;
    line-height: 1.15;
    orphans: 2;
    widows: 2;
    text-align: left
}

.c15 {
    background-color: #ffffff;
    max-width: 468pt;
    padding: 72pt 72pt 72pt 72pt
}

.c11 {
    font-size: 13pt;

    font-weight: 400
}

.c13 {
    font-weight: 400;

}

.c7 {
    margin-left: 36pt;
    padding-left: 0pt
}

.c9 {
    padding: 0;
    margin: 0
}

.c5 {
    height: 11pt
}

.c14 {
    margin-left: 36pt
}

.c2 {
    page-break-after: avoid
}

.title {
    padding-top: 0pt;
    color: #ffffff;
    font-weight: 700;
    font-size: 18pt;
    padding-bottom: 3pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: center
}

.subtitle {
    padding-top: 0pt;
    color: #ffffff;
    font-weight: 500;
    font-size: 15pt;
    padding-bottom: 0pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

li {
    color: #ffffff;
    font-size: 11pt;

}

p {
    margin: 0;
    color: #ffffff;
    font-size: 11pt;

}

h1 {
    padding-top: 20pt;
    color: #ffffff;
    font-size: 13pt;
    padding-bottom: 6pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h2 {
    padding-top: 0pt;
    color: #ffffff;
    font-weight: 700;
    font-size: 15pt;
    padding-bottom: 3pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h3 {
    padding-top: 16pt;
    color: #434343;
    font-size: 14pt;
    padding-bottom: 4pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h4 {
    padding-top: 14pt;
    color: #666666;
    font-size: 12pt;
    padding-bottom: 4pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h5 {
    padding-top: 12pt;
    color: #666666;
    font-size: 11pt;
    padding-bottom: 4pt;

    line-height: 1.15;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left
}

h6 {
    padding-top: 12pt;
    color: #666666;
    font-size: 11pt;
    padding-bottom: 4pt;

    line-height: 1.15;
    page-break-after: avoid;
    font-style: italic;
    orphans: 2;
    widows: 2;
    text-align: left
}
</style>
