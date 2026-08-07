import { ArticleLayout } from '../components/ArticleLayout'
import Image from '../components/Image'

// Images
import titleImage from '../assets/images/Madushika_title.png'
import img1 from '../assets/images/Madushika1.jpeg'
import img2 from '../assets/images/Madushika2.jpeg'
import img3 from '../assets/images/Madushika3.jpeg'
import portrait from '../assets/images/Madushika_portrait.jpg'

export function Madushika() {
  return (
    <ArticleLayout
      heroImageDesktop={titleImage}
      authorName="Adeepa Kularathna"
      intervieweeName="Madushika Munasinghe"
      intervieweeImg={portrait}
    >
      <h1 className="mt-4 text-3xl font-bold text-[#EDC001] mb-4">
        Embarking Eloquence: An In-depth Look at the Introductory Session of Speech Olympiad 16 by Gavel Mora
      </h1>

      <p className="mt-4 mb-6 text-gray-200">
        The introductory session of Speech Olympiad 16 by Gavel Mora, helmed by the insightful Toastmaster Madushika Munasingha, delved into the intricacies of public speaking, providing attendees with a comprehensive workshop. The session covered essential aspects of effective communication, from the art of storytelling and structuring speeches, to delivering them.
      </p>

      <div className="w-full h-0 pb-[56.25%] relative my-6">
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/HSxRUYzGuug?si=yGchZu65h2WudLDt"
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">The Art of Storytelling</h2>
      <p>
        Storytelling is a subtle skill that involves more than just relaying events. She underlined the significance of engaging the audience's emotions, engrossing them in the story, and forging a bond. Understanding the audience's demographics and interests is the first step in crafting a tale that will speak to their experiences, worldviews, or aspirations. The story comes alive when relatable characters, striking imagery, and intense conflicts are present. This has a significant effect on the listeners.
      </p>
      
      <Image className="article-img md:w-1/2 md:ml-[25%]" alt="Storytelling" src={img1} />

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">Structuring Your Speech</h2>
      <p>
        A well-structured speech is akin to a well-designed building—it has a strong foundation and a logical flow. The introduction sets the tone, grabbing the audience's attention with a compelling hook or a thought-provoking question. The body of the speech elaborates on the key points, employing a coherent and organized structure. Each point should seamlessly transition into the next, guiding the audience through the storyline. Finally, the conclusion should summarize the speech's essence, leaving a memorable impression and potentially inciting action or contemplation.
      </p>

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">Delivering Your Speech</h2>
      <p>
        Your first 40 seconds of a speech are crucial to captivating your audience. During this vital time, delivery is key. Eye contact connects you with the audience and draws them into your story. Sincere, well-placed gazes express confidence, genuineness, and rapport.
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
        <li>
          In combination with captivating eye contact, body language is dynamic. Your posture, gestures, and facial emotions should support your statements, magnifying them. The appropriate body language emphasises essential themes, shows excitement, and makes your speech memorable.
        </li>
        <li>
          The melody that complements the text is vocal variety. Like a story, your voice should change pitch, tempo, and loudness to keep listeners engaged. Different vocal tones offer depth, emotion, and emphasis, making even an average speech compelling.
        </li>
      </ul>
      <p className="mb-6 font-semibold italic text-[#EDC001]/80">
        Managing these elements especially in the first 40 seconds and throughout your speech produces an interesting and effective presentation.
      </p>

      <Image className="article-img md:w-1/2 md:ml-[25%]" alt="Delivery" src={img2} />

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">Where to Find Stories</h2>
      <p>
        To find interesting stories, you have to be a good observer and understand what people go through. Stories can come from many different places, like your own life, books, history, or even the lives of your friends and family. Everyday events can be turned into interesting stories that make people feel something. The key is to find the emotional or familiar parts of the story and tell them in a way that makes people want to listen.
      </p>

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">How to Craft the Speech</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4 mb-4">
        <li>
          Crafting a speech involves meticulous planning and consideration of various elements. Clarity in conveying the message is paramount, ensuring the audience understands the purpose and takeaway of the speech.
        </li>
        <li>
          Coherence ensures that ideas flow logically and smoothly from one point to the next, aiding comprehension. Conciseness involves presenting the speech in a way that is both comprehensive and to the point, respecting the audience's time and attention.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">Evaluation Criteria of Gavel</h2>
      <p>
        To continuously improve as a speaker, one must embrace feedback and constructive criticism. Gavel Mora's evaluation criteria encompass a holistic view of a speech. Content is evaluated for its relevance, depth, and originality. The organisation is assessed to ensure a clear structure and effective transitions. Delivery focuses on the speaker's presence, charisma, and connection with the audience. Language evaluates the choice of words, grammar, and overall articulation. Lastly, overall impact assesses how well the speech achieves its intended purpose and resonates with the audience.
      </p>

      <Image className="article-img md:w-1/2 md:ml-[25%]" alt="Evaluation" src={img3} />

      <h2 className="text-2xl font-bold text-[#EDC001] mt-8 mb-4">In Conclusion</h2>
      <p>
        In conclusion, the introductory session of Speech Olympiad XVI by Gavel Mora, under the guidance of Toastmaster Madushika Munasingha, provided invaluable insights into the art of eloquence. Aspiring speakers can utilise these profound insights to refine their storytelling abilities, enhance speech structures, master effective delivery, curate compelling stories, craft impactful speeches, and understand the critical evaluation criteria. Armed with this knowledge, speakers can elevate their public speaking skills and captivate audiences, ultimately leaving a lasting impression in the realm of oratory.
      </p>
    </ArticleLayout>
  )
}
