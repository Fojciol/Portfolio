import './App.css'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import { ShootingStars } from './components/ui/shooting-stars'
import { StarsBackground } from './components/ui/stars-background'
import { HoverEffect } from './components/ui/card-hover-effect'
import imgURL from './assets/avatar.png'

function App() {
  const words = `Hi there, I'm Kacper Fojcik`
  const underWords = `I’m 21 years old, and I’m from Ruda Śląska, Poland. I’m an aspiring full-stack developer, continuously learning and expanding my skills in programming. I specialize in JavaScript and work with frameworks like Node.js, Next.js, React, and React Native`
  
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
      imgUrl: "https://s3-eu-west-1.amazonaws.com/tpd/logos/50489e6800006400051ae0d6/0x0.png",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      imgUrl: "",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
      imgUrl: "",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
      imgUrl: "",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
      imgUrl: "",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
      imgUrl: "",
    },
  ];

  return (
      <div>
        <nav>

        </nav>
        <main>
          <section className='md:flex md:justify-center mt-10 w-full'>
            <div className='mt-14 md:w-2/4 m-auto'>
              <TextGenerateEffect words={words} />
              <TextGenerateEffect  words={underWords} className='text-xs font-light text-wrap'/>
            </div>
            <div>
              <img src={imgURL} alt="avatar" className='h-72 md:w-72 w-full'/>
            </div>

          </section>
          <section className='mt-32'>
            <h1 className='font-bold text-2xl text-left'>Recent projects</h1>
            <HoverEffect items={projects} />
          </section>
        </main>
        <footer>

        </footer>
        <ShootingStars />
        <StarsBackground />
      </div>
  )
}

export default App
