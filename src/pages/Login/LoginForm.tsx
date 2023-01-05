import { ArrowRight } from 'react-feather'
import RiotGamesIcon from '@assets/icons/riot-games-icon.svg'

import FacebookLogo from '@assets/icons/fb-icon.svg'
import GoogleLogo from '@assets/icons/google-icon.svg'
import AppleLogo from '@assets/icons/apple-icon.svg'
import XboxLogo from '@assets/icons/xbox-icon.svg'

import './styles/login-form.css'

export function LoginForm() {
  return (
    <aside>
      <img className="riot-logo" src={RiotGamesIcon} />

      <h2>Fazer login</h2>

      <input placeholder="Nome de usuário" />
      <input placeholder="Sua senha" />

      <div className="login-options">
        <a href="https://facebook.com" className="facebook" target="__blank" referrerPolicy="no-referrer">
          <img className="icon" src={FacebookLogo} alt="Facebook Logo" />
        </a>
        <a href="https://google.com" className="google" target="__blank" referrerPolicy="no-referrer">
          <img className="icon" src={GoogleLogo} alt="Google Logo" />
        </a>
        <a href="https://apple.com" className="apple" target="__blank" referrerPolicy="no-referrer">
          <img className="icon" src={AppleLogo} alt="Apple Logo" />
        </a>
        <a href="https://xbox.com" className="xbox" target="__blank" referrerPolicy="no-referrer">
          <img className="icon" src={XboxLogo} alt="Xbox Logo" />
        </a>
      </div>

      <label className="remember-signin">
        <input type="checkbox" placeholder="Sua senha" />
        Manter login
      </label>

      <button className="sign-in" onClick={() => alert('Wrong login credentials!')}>
        <ArrowRight color="#E0E0E0" />
      </button>

      <footer>
        NÃO CONSEGUE INICIAR SESSÃO?
        <a href="https://signup.br.leagueoflegends.com/pt">CRIAR CONTA</a>
      </footer>

      <span>
        Developed by <a href="https://github.com/hallexcosta">Hállex</a>
      </span>
    </aside>
  )
}
