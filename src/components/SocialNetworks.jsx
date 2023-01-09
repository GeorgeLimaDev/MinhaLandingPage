import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, address: 'https://www.linkedin.com/in/georgelimabr/' },
  { name: "github", icon: <FaGithub />, address: 'https://github.com/GeorgeLimaDev' },
  { name: "instagram", icon: <FaInstagram />, address: 'https://www.instagram.com/georgelimabr/' },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.address} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks