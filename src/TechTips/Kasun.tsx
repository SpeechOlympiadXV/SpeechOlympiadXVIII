import { ArticleLayout } from '../components/ArticleLayout'
import Image from '../components/Image'

// Images
import titleDesktop from '../assets/images/kasunayyawebsite.jpg'
import titleMobile from '../assets/images/Kasunayyamobile.jpg'
import portrait from '../assets/images/Kasunayya.jpg'
import artofw1 from '../assets/images/artofw1.jpg'
import artofw2 from '../assets/images/artofw2.jpg'
import artofw3 from '../assets/images/artofw3.jpg'

export function Kasun() {
  return (
    <ArticleLayout
      heroImageDesktop={titleDesktop}
      heroImageMobile={titleMobile}
      authorName="Saai Syvendra"
      intervieweeName="Kasun Ranasinghe"
      intervieweeImg={portrait}
    >
      <h2 className="heading-page text-ember mb-6 mt-4 text-center">
        The Art of Winning - Perfecting Speech Delivery
      </h2>

      <p className="box text-center font-medium italic text-xl">
        "Speech delivery is giving a message to someone close to you and having them take that message home and change their life"
      </p>

      <p className="mt-6 mb-6 text-gray-200">
        Mr. Kasun Ranasinghe, the Champion of Speech Olympiad X joined us on the 26th of September at the university premises as he conducted the insightful session "The Art of Winning: Perfecting Speech Delivery". Throughout the session, invaluable advice on how to improve speech delivery were shared with the audience.
      </p>

      <div className="w-full h-0 pb-[56.25%] relative my-8">
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/vOpEEHQlGZw?si=2GX8MCSd43rDVfu9"
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p>
        The delivery of a speech can be broken down into three parts according to the Ballot Sheet of Toastmasters International:
      </p>
      <ol className="list-decimal pl-6 space-y-1 mt-2 mb-8 font-semibold text-ember">
        <li>Physical</li>
        <li>Voice</li>
        <li>Manner</li>
      </ol>

      <h2 className="heading-sub text-ember border-b border-white/10 pb-2 mb-4">1. Physical</h2>
      <p>This can be broken down into the following three parts:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2 mb-6">
        <li>What you wear (Appearance)</li>
        <li>How your body moves (Body Language)</li>
        <li>Where your body moves on stage (Speaking area)</li>
      </ul>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">What you wear</h3>
      <p>
        The judges start to judge you from the moment you stand up from your seat, thus it is really important to wear something appropriate. That being said if there is a particular dress that fits your speech, then wear it with pride. It may be a hiker, a Dracula, a musician, or even a cat, as long as it fits the speech.
      </p>
      
      <Image className="article-img my-6 md:w-3/4 md:mx-auto" alt="Appearance" src={artofw2} />

      <h3 className="heading-minor text-xl text-white mt-8 mb-2">How your body moves</h3>
      <p>
        The art of effective communication is not confined to words alone; it extends to gestures and body language. This helps engage the audience throughout the speech, making it a more effective delivery. It is widely believed that 70% of communication is non-verbal, underscoring the importance of gestures and body movement. Regardless of how good your content is, if your body movements do not align with your content, the overall effectiveness of the delivery will be reduced.
      </p>
      <p className="mt-4">
        The neutral speaking pose, as described by the speaker, is a relaxed position where you avoid excessive hand movements or swaying. It serves as the foundation for effective body language. Building upon this foundation, gestures, and movements are used strategically to communicate with the audience and reinforce your ideas. This includes how you use your hands, feet, and face to enhance your message. The same phrase can be delivered in various ways to evoke different emotions. For example, the phrase 'I'm going home with my wife tonight!' can be delivered to convey excitement, sadness, fear, surprise, worry, or pride. Additionally, facial expressions play a significant role, although it's important to use them in moderation.
      </p>

      <h3 className="heading-minor text-xl text-white mt-8 mb-2">Where your body moves on stage</h3>
      <p>Mr. Ranasinghe classified the aforementioned topic into the following sections:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2 mb-6">
        <li>Where to start?</li>
        <li>Timeline technique</li>
        <li>Location technique</li>
        <li>Dialogue</li>
      </ul>

      <h4 className="heading-minor text-gray-300 mt-4 mb-1">Where to start</h4>
      <p className="mb-4">
        As a basic practice, speeches are often started from the centre of the stage because they provide good reach to either side of the audience members. However, as you advance, you may want to start your speech in different areas, such as from a corner of the stage. It should be noted that during competitions, there is a designated speaking area. In such cases, you will have to limit your movement within this area.
      </p>

      <h4 className="heading-minor text-gray-300 mt-4 mb-1">Timeline Technique</h4>
      <p className="mb-4">
        This approach divides the stage into a timeline, with the left side of the stage (from the audience's perspective) representing the past and the right side indicating the future.
      </p>

      <h4 className="heading-minor text-gray-300 mt-4 mb-1">Location Technique</h4>
      <p className="mb-4">
        This approach divides the stage into various locations that correspond to different parts of your speech. For instance, the left side of the stage can represent your home, while the right side can symbolize the hospital.
      </p>

      <h4 className="heading-minor text-gray-300 mt-4 mb-1">Dialogue</h4>
      <p className="mb-4">
        Two characters can be brought to life by roleplaying a dialogue during a speech. In order to differentiate the characters, take a step and turn in the opposite direction at a 45-degree angle so as to mimic the two characters having a conversation. In order to add further depth, appropriate vocal variation as well as other details such as the height difference can be incorporated.
      </p>

      <Image className="article-img my-6 md:w-3/4 md:mx-auto" alt="Stage Position" src={artofw3} />

      <h2 className="heading-sub text-ember border-b border-white/10 pb-2 mt-10 mb-4">2. Voice</h2>
      <p>Talking of 'Voice', Mr Ranasinghe classified it into 4Ps:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2 mb-6">
        <li>Pitch</li>
        <li>Pace</li>
        <li>Pause</li>
        <li>Power</li>
      </ul>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Pitch</h3>
      <p className="mb-4">
        This refers to the highs and lows in your speech. This can be used to bring out different characters or emotions in your speech.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Pace</h3>
      <p className="mb-4">
        In a nutshell, pace is the rate of speech. On average roughly 100 words per minute are spoken. However, if one fails to vary this pace in his speech, the audience will lose interest in his/her speech. Further, by slowing your pace you can give emphasis to certain phrases.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Pause</h3>
      <p className="mb-4">
        Pause is a lethal weapon if used in the correct way. It can be used to build anticipation or even bring in humour by having a twist.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Power</h3>
      <p className="mb-8">
        This is a measurement of the volume of your voice, determining how loud or soft it is. It's crucial to ensure your voice is sufficiently loud to be heard clearly at the back of the room. Nevertheless, by reducing to a softer tone, you could give more emphasis to a certain word or phrase.
      </p>

      <h2 className="heading-sub text-ember border-b border-white/10 pb-2 mt-10 mb-4">3. Manner</h2>
      <p>
        Afterwards, Mr. Ranasinghe went on to speak about 'Manner'. There, he gave away some tips.
      </p>
      <p className="mt-4 mb-4">
        While delivering your speech you have to be confident and cheerful. One of the main ways to portray your confidence is by interacting with your audience. Here are a few ways on how to interact with the audience:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Ask questions</li>
        <li>Take examples from the audience</li>
        <li>React to the audience</li>
        <li>Maintain eye contact</li>
      </ul>

      <Image className="article-img my-6 md:w-3/4 md:mx-auto" alt="Interacting with audience" src={artofw1} />

      <h3 className="heading-minor text-xl text-white mt-8 mb-2">Asking questions</h3>
      <p className="mb-4">
        By asking questions, a speaker portrays his confidence by showing that he is prepared to adapt based on the answer. Questions can either be general or specified to a certain audience member as well.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Take examples from the audience</h3>
      <p className="mb-4">
        By using examples from the audience, you can establish a connection with your audience and demonstrate your confidence in adapting your speech content to their context.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">React to the audience</h3>
      <p className="mb-4">
        Observing the emotions of the audience and reacting accordingly can significantly enhance your ability to convey your message effectively.
      </p>

      <h3 className="heading-minor text-xl text-white mt-6 mb-2">Maintain eye contact</h3>
      <p className="mb-6">
        Direct eye contact conveys confidence and enthusiasm. However, maintaining eye contact with an entire audience, especially on a large stage, can be challenging. To address this, the stage can be mentally divided into segments, allowing the speaker to make meaningful eye contact with different sections of the audience. The underlying message here is that maintaining eye contact, even with a portion of the audience, signifies confidence and engagement.
      </p>

      <p className="text-lg italic font-medium text-gray-300 border-l-4 border-ember pl-4 py-2 bg-white/5 mt-8 mb-6">
        Mr. Ranasinghe emphasized that besides the physical, voice and manner, the most crucial element is to have fun! He mentioned that having fun would allow you to enjoy your speech and have an amazing journey.
      </p>

      <p className="text-xl font-bold text-ember text-center mb-8">
        So, embrace these techniques, have fun, and set forth on your path to becoming an eloquent public speaker!
      </p>
    </ArticleLayout>
  )
}
