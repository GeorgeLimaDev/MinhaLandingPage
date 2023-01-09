import '../styles/components/informationcontainer.sass'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment, AiOutlineWhatsApp} from 'react-icons/ai'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiOutlineWhatsApp id='phone-icon'/>
            <div>
                <h3>Whatsapp:</h3>
                <p><a href='https://wa.me/5583999178435' title='Clique para conversar comigo no WhatsApp'>Chama no zap</a></p>
            
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-Mail</h3>
                <p> <a href='mailto:georgelimabr@outlook.com' title='Clique para me enviar um e-mail'> Enviar e-mail</a></p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>João Pessoa - PB</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer