const Section1 = () => {
  return (
    <div className="w-full lg:px-20 lg:py-10 md:px-10 px-5">
      <p className="text-3xl">Features</p>
      <div className="lg:px-10 lg:py-10 md:px-6 py-6   lg:flex  justify-between items-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-2xl ">Your Creative Playground</p>
          <p className="text-lg mt-2">Create Your World & Maps</p>
          <p>
            Use drag-and-drop tools to build custom spaces, from lush forests to
            futuristic cities.
          </p>
          <p>
            Add interactive elements like doors, NPCs, and environmental
            effects.
          </p>
          <p>Save, share, and continuously update your maps.</p>
        </div>

        <div
          className="md:h-[300px] shrink-0  md:w-[500px] w-full h-[200px] bg-muted
       lg:mt-0 mt-4 flex items-center justify-center rounded-sm"
        >
          <p className="text-xl text-muted-foreground">500 X 200</p>
        </div>
      </div>


      <div className="lg:px-10 lg:py-10 md:px-6 py-6 flex-row-reverse   lg:flex  justify-between items-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-2xl ">Bring People Together</p>
          <p className="text-lg mt-2">Join with Friends</p>
          <p>
          Invite friends to explore your creations or collaborate on projects
          </p>
          <p>
          Host private hangouts or public events in your virtual spaces.
          </p>
          <p>Social features like group chats, voice calls for real-time engagement..</p>
        </div>

        <div
          className="md:h-[300px] shrink-0  md:w-[500px] w-full h-[200px] bg-muted
       lg:mt-0 mt-4 flex items-center justify-center rounded-sm"
        >
          <p className="text-xl text-muted-foreground">500 X 200</p>
        </div>
      </div>


      <div className="lg:px-10 lg:py-10 md:px-6 py-6   lg:flex  justify-between items-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-2xl ">Be in the Moment</p>
          <p className="text-lg mt-2">Live the Moment</p>
          <p>
          Attend live events like virtual concerts, parties, or collaborative games.
          </p>
          <p>
          Enjoy spontaneous interactions with others in dynamic environments.
          </p>
          <p>Participate in community challenges, storytelling adventures, or live role-play.</p>
        </div>

        <div
          className="md:h-[300px] shrink-0  md:w-[500px] w-full h-[200px] bg-muted
       lg:mt-0 mt-4 flex items-center justify-center rounded-sm"
        >
          <p className="text-xl text-muted-foreground">500 X 200</p>
        </div>
      </div>

    </div>
  );
};

export default Section1;
