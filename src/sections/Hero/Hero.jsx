import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='hero-image'/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Ronniel<br/> de Ramos</h1>
            <h2>Full-   Stack Web Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/ronnielderamos28/" target='_blank'>
                    <img src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/ronniel28" target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>
            </span>
            <p className={styles.description}>I am an electrical engineer who transitioned into web development, focusing on full-stack development. I’ve worked on projects such as ride-hailing and delivery apps, online learning platforms, and a no-code website builder. With a strong foundation in PHP, Laravel, and front-end technologies, I am passionate about solving complex problems and continuously learning new technologies. My diverse background allows me to blend analytical skills with creativity to deliver high-quality results.</p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero