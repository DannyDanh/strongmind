import Exercise from "./Exercise";

const Home=() => {
    return (
        <div className="Home">
            <Exercise name="Pull Up" detail="⬆️ Back, Biceps, Core / Intermediate" image="/images/pullup.png" link="https://www.youtube.com/watch?v=aNUSgyWRJYA"/>
            <Exercise name="Chest Press" detail="⬆️ Chest, Triceps, Shoulders / Beginner" image="/images/chestpress.jpg" link="https://www.youtube.com/watch?v=sqNwDkUU_Ps"/>
            <Exercise name="Squat" detail="⬆️ Quads, Glutes, Hamstrings / Intermediate" image="/images/squat.jpg" link="https://www.youtube.com/watch?v=xqvCmoLULNY"/>
            <Exercise name="Lat Pulldown" detail="⬆️ Back, Shoulders, Biceps / Beginner" image="/images/latpulldown.jpg" link="https://www.youtube.com/watch?v=JGeRYIZdojU"/>
            <Exercise name="HIIT Burner" detail="Intense Full Body Cardio / Legs, Back, Chest, Arms / 10 mins" image="/images/hiit.jpg" link="https://www.youtube.com/watch?v=g8ShX3iS3Zg"/>
            <Exercise name="Walking Lunge" detail="Light Cardio, Balance, ⬆️ Leg Strength / Beginner" image="/images/walkinglunge.jpg" link="https://www.youtube.com/watch?v=Pbmj6xPo-Hw"/>
            <Exercise name="Deep Breathing Anchor" detail="⬇️ Anxiety, Grounding, Transition / 5 minutes" image="/images/deepbreathe.jpg" link="https://www.youtube.com/watch?v=DbDoBzGY3vo"/>
            <Exercise name="Gratitude Reflection" detail="Shift Toward Positivity, Focus On Thankfulness / 10 mins" image="/images/grateful.jpg" link="https://www.youtube.com/watch?v=dVae-pOyRXk"/>
            <Exercise name="Box Breathing" detail="Rhythmic 4-4-4-4 Breath, ⬇️ Anxiety / 5 mins" image="/images/boxbreathe.gif" link="https://www.youtube.com/watch?v=oN8xV3Kb5-Q"/>
            <Exercise name="Cold Bath Immersion" detail="⬇️ Muscle Soreness, ⬆️ Circulation, Mentality / 10 mins" image="/images/coldtube.jpg" link="https://www.youtube.com/watch?v=1wvZ9a6j1Pk"/>
        </div>
        
        
    )
}

export default Home;