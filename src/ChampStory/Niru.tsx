import { ArticleLayout } from '../components/ArticleLayout'
import Image from '../components/Image'

// Images
import heroImage from '../assets/images/Niru_Champ_story.png'
import midImage from '../assets/images/mid_img_niru.png'
import portrait from '../assets/images/Niru_profile_img.png'

export function Niru() {
  return (
    <ArticleLayout
      heroImageDesktop={heroImage}
      intervieweeName="Niruththika Sritharan"
      intervieweeImg={portrait}
      compiledBy={false}
    >
      <p className="mt-3 first-letter">
        When I came to university, I initially had no prior experience in
        speech competitions. I aspired to be a better public speaker hence I
        decided to join the Gavel Club. Coincidentally, Speech Olympiad XIII was also
        happening around that time, so I took a leap of faith and registered to participate.
      </p>

      <p>
        I participated in Speech Olympiad XIII, and it didn't take me beyond the preliminary
        round. However, I didn't let that discourage me. Over the next year, I took small
        steps to improve my speaking skills. I tried delivering table topic speeches, participated
        in the Avurudhu speech competition and completed CC1. When Speech Olympiad XIV came around,
        I embarked on creating a fresh speech. That's when I had the privilege of being mentored by
        two incredible seniors, Gavelier Malindi and Gavelier Kasun. I can't thank them enough for their
        unwavering support.
      </p>

      <div className="w-full h-0 pb-[56.25%] relative my-8">
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/AZHEQmR-nqI" 
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        I constantly sought their guidance to refine my speech drafts and delivery.
        I also pestered them for assistance in sharpening my impromptu speaking skills.
        Their mentorship was invaluable, helping me polish my prepared speech and refine
        my ability to think on my feet while delivering impromptu speeches. Furthermore,
        the Speech Olympiad XIV team organized numerous insightful sessions to practice
        and develop our public speaking skills.
      </p>

      <p className="box text-center text-xl font-medium">
        With the support of the Gavel family, I achieved what seemed impossible.
        <br /><br />
        <span className="text-2xl text-ember">I became the Speech Olympiad XIV champion.</span>
      </p>

      <Image className="article-img my-8" src={midImage} alt="Niruththika speaking" />

      <p>
        It wasn't just a competition; it was a transformative journey. This voyage from
        beginner to champion instilled immense confidence in my public speaking abilities.
        I learnt to connect better with the audience when delivering my speech. The techniques
        that I learnt to articulate my ideas clearly and convey them effectively, still prove very
        handy in my academic and professional life. I am profoundly grateful to Speech Olympiad for
        this enriching experience.
      </p>
    </ArticleLayout>
  )
}
