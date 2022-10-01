import HomeBlock from "../Component/HomeBlock/HomeBlock.component";
function HomePage() {
  return (
    <div className="container">
      <HomeBlock
        imageSrc= "1"
        header="or every student, every classroom.
          Real results."
        paragraph="We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere."
      />
      <HomeBlock
        imageSrc= "2"
        header="Differentiate your classroom and engage every student."
        paragraph="We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective."
      />
      <HomeBlock
        imageSrc= "3"
        header="You can learn anything."
        paragraph="Build a deep, solid understanding in math, science, and more."
      />
    </div>
  );
}

export default HomePage;
