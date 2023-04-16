import { useState } from "react";
import brandonProfile from "../../../public/profiles/brandon.jpeg";
import brandonBackdrop from "../../../public/backdrops/writing-code.jpg"

interface TeamMember {
  name: string,
  role: string,
  profileImg: string,
  summary: {
    body: string,
    background: string,
  },
  links?: {
    github?: string,
    linkedin?: string,
  }
}

const members: TeamMember[] = [
  {
    name: "Brandon Egger",
    role: "Software Engineer",
    summary: {
      body: "todo",
      background: brandonBackdrop,
    },
    profileImg: brandonProfile,
  },
  {
    name: "Brandon Egger",
    role: "Software Engineer",
    summary: {
      body: "todo",
      background: brandonBackdrop,
    },
    profileImg: brandonProfile,
  },
  {
    name: "Brandon Egger",
    role: "Software Engineer",
    summary: {
      body: "todo",
      background: brandonBackdrop,
    },
    profileImg: brandonProfile,
  },
]

function MemberWidget({key, details, selected, setSelected}: {
  key: number,
  details: TeamMember,
  selected?: number,
  setSelected?: React.Dispatch<React.SetStateAction<number>>,
}) {
  return (
    <div className="p-4 w-full bg-white rounded-xl drop-shadow-xl border border-neutral-300 flex flex-row space-x-6">
      <img alt={`${details.name} profile`} src={details.profileImg}
        className="w-24 border border-neutral-900 rounded-full"
      />
      <div className="my-auto">
        <h2 className="text-xl font-bold">{details.name}</h2>
        <h3>{details.role}</h3>
      </div>
    </div>
  )
}

/**
 * The right side memory summary widget
 */
function MemberSummary({details}: {details: TeamMember}) {
  return (
    <div style={{
      backgroundImage: `url("${details.summary.background}")`,
      backgroundPosition: `center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className="grow w-full bg-white drop-shadow-xl rounded-xl border border-stone-700">
      <div style={{
        WebkitBackdropFilter: `blur(20px)`,
        backdropFilter: 'blur(20px)',
      }} className="absolute top-0 right-0 bottom-0 left-0 text-center">
        <h1 className="text-white text-xl">{details.name}</h1>
      </div>
    </div>
  )
} 

/**
 * Display team introduction for senior design.
 */
function TeamSection() {
  // Selected remembers key index of MemberWidget
  const [selected, setSelected] = useState<number>(0);

  return (
    <section id="team" className="relative snap-center snap-always h-full bg-gradient-to-r from-yellow-200/20 to-yellow-100/50 to-white grid place-items-center">
      <div className='space-y-12'>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold'>Meet the Team</h1>
          <p className='text-gray-500 italic'>The brains behind the operation</p>
        </div>
        <div className='relative flex space-x-24'>
          {/**Left side teammates */}
          <div className="inline-block w-96 space-y-8">
            {members.map((member, index) => {
              return (
                <MemberWidget key={index} details={member} selected={selected} setSelected={setSelected} />
              )
            })}
          </div>

          {/**Summary right */}
          <div className="relative inline-block flex flex-col w-[600px]">
            <MemberSummary details={members[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export {
    TeamSection
};
