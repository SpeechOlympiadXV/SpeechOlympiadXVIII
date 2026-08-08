export function Rules() {
  return (
    <div className="container my-12 mx-auto p-8 md:p-12 w-11/12 md:w-4/5 bg-[#121212]/80 backdrop-blur-sm rounded-xl text-white border border-[#585858]/30">
      <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-6 text-center">Speech Olympiad XIX</h1>
      {/* Tagline, not a heading */}
      <p className="text-lg font-thin mb-6 text-center">Intra-University Speech Competition - University of Moratuwa</p>
      {/* Was a second <h1> — a document must have exactly one */}
      <h2 className="font-display text-lg sm:text-xl font-bold tracking-wide mb-6 text-center">Contest Rules: Preliminaries</h2>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">1. Eligibility</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal border-none">
            The contestant should be an undergraduate studying in any of the following faculties<sup>1</sup> of University of Moratuwa to be eligible to participate in Speech Olympiad XIX.
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 border-none">Faculty of Engineering</li>
              <li className="text-gray-300 p-1 border-none">Faculty of Architecture</li>
              <li className="text-gray-300 p-1 border-none">Faculty of Information Technology</li>
              <li className="text-gray-300 p-1 border-none">Faculty of Business</li>
              <li className="text-gray-300 p-1 border-none">Faculty of Medicine</li>
            </ul>
          </li>
        </ul>
        <div className="text-right w-full text-xs italic font-light mt-4"><sup>1</sup>Faculties under purview of Gavel Club of University of Moratuwa</div>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">2. Language</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal border-none">
            All speeches must be delivered in English. (Dialogues or any phrases expressed in other languages i.e., Sinhala, Tamil etc. should be minimal and such phrases should be immediately translated to English.)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">3. Speech Rounds</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            There will be 3 rounds i.e., the Preliminary round, the Semi-final round, and the Final round.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            All 3 rounds will be held physically at the University Premises.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            The same speech or different speeches can be used to compete in all three rounds.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">4. Competition Procedure</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            The preliminaries will be happening on the <span className="font-bold text-white">6th of September</span> at the University Premises. For verification purposes, all contestants must bring their <span className="font-bold text-white">University ID</span> or the <span className="font-bold text-white">Student Record Book</span>.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Prior to the contest, each speaker will be allocated a time slot at which the contestant must deliver the speech.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Each contestant must arrive at least 30 minutes prior to the allocated time slot. If any contestant does not arrive at the allocated time without at least a 30 minute prior notice, the contestant will be disqualified.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Each speaker will be introduced by the "Contestant Number". The Contestant Number will be determined and notified prior to the event.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Upon being introduced, the contestant shall proceed immediately to the speaking position.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">5. Speech Timings</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal border-none">
            Timing will begin with the contestant's first definite verbal or nonverbal communication with the audience. This usually will be the first word uttered by the contestant, but would include any other communication such as sound effects.
          </li>
          <li className="text-gray-300 font-normal border-none">
            Each participant will have to deliver a prepared speech of 5 minutes - 7 minutes on a topic of his/ her choice. A contestant will be disqualified from the contest if the speech is less than 4 minutes 30 seconds or more than 7 minutes 30 seconds (fraction of seconds will not be considered).
          </li>
          <li className="text-gray-300 font-normal border-none">
            Timers will provide signals to the contestants, which will be as follows:
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 border-none">A green card will be displayed at five minutes and remain displayed for one minute.</li>
              <li className="text-gray-300 p-1 border-none">An amber card will be displayed at six minutes and remain displayed for one minute.</li>
              <li className="text-gray-300 p-1 border-none">A red card will be displayed at seven minutes and remain on until the conclusion of the speech.</li>
              <li className="text-gray-300 p-1 border-none">No signal shall be given for the overtime period.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">6. Speech Topics and Content</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal border-none">
            Contestants are free to choose any topic of their choice subjected to the following conditions:
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 border-none">The topics must not be offensive in Sri Lankan context or against the laws of the land.</li>
              <li className="text-gray-300 p-1 border-none">It must not aim to insult any particular person, groups of persons, or organization. (Your speech must not insult or discriminate anyone based on their religious or political beliefs, gender, or sexual orientations)</li>
              <li className="text-gray-300 p-1 border-none">It must not be politically biased.</li>
              <li className="text-gray-300 p-1 border-none">All speeches must be original. Any quoted material must be identified. Only a maximum of 25% of the speech can be quoted.</li>
              <li className="text-gray-300 p-1 border-none">Contestants must not reference another contestant, or a speech presented by another contestant, during their speech at the same contest in which they are competing.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">7. Use of Props and Electronic Devices</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            The use of electronic aids including visuals, slide projectors, and charts will not be permitted. Contestants are allowed to use other props.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Contestants who plan to use props must notify the contest chair prior to the contest.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Contestants must abide by any venue restrictions on the use of props.
          </li>
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            All props must be set up during the minute of silence prior to the contestant's speech and removed from the stage in the minute of silence following the speech.
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 border-none">Contestants may enlist someone to help them with props, but it is not the responsibility of the contest chair or any other contest official to do so.</li>
              <li className="text-gray-300 p-1 border-none">Contestants must demonstrate to the contest chair prior to the contest that the props can be set up and removed in the allotted times.</li>
              <li className="text-gray-300 p-1 border-none">If a contestant is unable to demonstrate this, the props cannot be used during the contest.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">8. Protests and Disqualifications</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal p-1 border-none">
            Protests are limited to eligibility, originality, and reference to another contestant's speech and must only be lodged by voting judges and/or contestants. Any protest must be lodged with the chief judge and/or contest chair prior to the contest being adjourned.
          </li>
          <li className="text-gray-300 font-normal p-1 border-none">
            The chief judge, contest chair, voting judges, and contestants must not consider protests from audience members.
          </li>
          <li className="text-gray-300 font-normal p-1 border-none">
            Before a contestant can be disqualified on the basis of originality, or for referencing another contestant's speech, the contestant must be given an opportunity to respond to the voting judges. A majority of the voting judges must concur in the decision to disqualify.
          </li>
          <li className="text-gray-300 font-normal p-1 border-none">
            The contest chair can disqualify a contestant on the basis of eligibility.
          </li>
          <li className="text-gray-300 font-normal p-1 border-none">
            All decisions of the voting judges, and qualifying judges are final.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">9. Dress Code</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Formal attire is recommended.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-xl font-bold tracking-wide mb-4">10. Speech Evaluation Criteria</h2>
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-normal pt-1 pb-2 border-none">
            Speeches will be evaluated on the following criteria:
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 border-none">Content (50%) - Speech Development, Effectiveness and Speech value</li>
              <li className="text-gray-300 p-1 border-none">Delivery (30%) - Body language, Voice and Manner</li>
              <li className="text-gray-300 p-1 border-none">Language (20%) - Appropriateness and Correctness (cannot include phrases or dialogues from languages other than English)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <ul className="pl-6 space-y-2 list-disc border-none">
          <li className="text-gray-300 font-bold pt-1 pb-2 border-none">
            The decision of the judges will be final.
          </li>
          <li className="text-gray-300 font-bold pt-1 pb-2 border-none">
            All participants who complete the speech without being disqualified will receive certificates of participation.
          </li>
          <li className="text-gray-300 font-bold pt-1 pb-2 border-none">
            If the contestant has any issue or requires further details with the given procedure, please contact:
            <ul className="list-disc pl-6 mt-2 space-y-1 border-none" style={{ listStyleType: 'circle' }}>
              <li className="text-gray-300 p-1 font-bold border-none">Ranuja Jayawardena +94 71 172 3936 (Co-Chair- SO XIX)</li>
              <li className="text-gray-300 p-1 font-bold border-none">Hansali Kariyawasam +94 70 151 8194 (Education Pillar Head- SO XIX)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}
