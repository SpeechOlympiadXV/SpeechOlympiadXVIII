import { ArticleLayout } from '../components/ArticleLayout'

// Images
import yasirPortrait from '../assets/images/PathOfChampion_portrait.jpg'
import yasirImageDesktop from '../assets/images/yasir_tech_tip.png'
import yasirImageMobile from '../assets/images/yasir mobile.png'
import yasirMid from '../assets/images/yasir_mid.png'

export function YasirTechTip() {
  return (
    <ArticleLayout
      heroImageDesktop={yasirImageDesktop}
      heroImageMobile={yasirImageMobile}
      authorName="Renulucshmi Prakasan"
      intervieweeName="Mohamed Yasir"
      intervieweeImg={yasirPortrait}
    >
      <p className="mt-3 first-letter">
        On the 19th of September 2023, at 5:50 PM, a virtual Speech Crafting session was held via the Zoom platform. 
        This session, aimed to impart insights into the art of crafting captivating content for speeches, featured 
        Distinguished Toastmaster Mohamed Yasir, an outstanding public speaker and an alumnus of Gavel Club of University
         of Moratuwa. He shared his extraordinary journey, recounting how he progressed from being a novice speaker to 
         achieving the prestigious title of Speech Olympiad VIII Champion.
      </p>

      <p>
        During his presentation, Toastmaster Yasir offered a set of valuable recommendations to harness the full potential
         of a winning speech as mentioned below:
      </p>

      <p className="box">
        <strong>Never say no to any opportunity:</strong> It can be a presentation, speech or even a table topic. The more you participate,
        you can start to feel a positive change in your public speaking skills.
      </p>
      
      <p className="box">
        <strong>Focus on the content:</strong> Even if we are good at delivering speeches with suitable gestures and voice variations, a key 
        role is played by the content of the speech. Content is what carries the core idea of your message to the audience 
        (An allocation of 50 marks).
      </p>
      
      <p className="box">
        <strong>Balance an expressive delivery and avoid overdoing it:</strong> Don't use excessive facial expressions, vocal variations,
         or unnecessary drama, but small, well-timed dramatic elements to highlight key points, and create memorable moments
          to keep your audience engaged.
      </p>
      
      <div className="w-full h-0 pb-[56.25%] relative my-6">
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/NqqDsnBvuuI?si=XHg1VdoGyX13IUip"
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        You might face difficulty in finding suitable content, but you can even find a quote and weave a story around it. 
        It doesn't have to be a real story; you can always craft a story that goes well with the quote and make sure the 
        problem addressed in the speech is strong enough. You can speak on anything you want to tell the world.
      </p>

      <p>
        A few techniques that could be incorporated into our speeches were mentioned by Toastmaster Yasir in the session 
        as well.
      </p>

      <p className="box">
        <strong>Symbolism</strong> is used in speeches to express a hidden meaning. Toastmaster Yasir gave a brilliant example of how you 
        can use the phrase "The present is a present", which means "The present is a gift".
      </p>

      <p className="box">
        <strong>360-degree approach:</strong> This method involves crafting speeches where the opening and ending are about the same place
         or incident. Imagine starting with a particular incident, journeying through transformations, and then returning to that same 
         incident, offering fresh insight or resolution. This technique not only completes the narrative circle but creates a great impact
          on the audience.
      </p>
      
      <p className="box">
        <strong>Strategic use of questions:</strong> When your speech gives rise to questions to the audience during the speech, it increases
         the curiosity of the audience and gains attention. However, the key to this technique's success lies in ensuring that you answer 
         those questions before you conclude the speech.
      </p>

      <img
        className="article-img"
        src={yasirMid}
        alt="Yasir mid speech"
        loading="lazy"
      />
      
      <p>
        You can always enhance your speeches by seeking guidance from a mentor, sharing the speeches with diverse audiences, and following the 
        feedback after analyzing it properly instead of blindly believing it. Toastmaster Yasir encouraged all the participants to never let 
        go of an opportunity to deliver a speech for the more you do so, the more skilled you'll be at crafting speeches.
      </p>

      <p>
        By implementing these strategies and incorporating these tips, we can become more proficient in expressing our thoughts and ideas, 
        ultimately leading to greater success in public speaking.
      </p>
    </ArticleLayout>
  )
}
