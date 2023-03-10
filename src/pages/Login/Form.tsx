import { ChangeEvent, useState } from 'react'
import { ArrowRight } from 'react-feather'

import RiotGamesLogo from '@assets/icons/riot-games-icon.svg'
import FacebookLogo from '@assets/icons/fb-icon.svg'
import GoogleLogo from '@assets/icons/google-icon.svg'
import AppleLogo from '@assets/icons/apple-icon.svg'
import XboxLogo from '@assets/icons/xbox-icon.svg'

import './styles/form.css'

export const Form = (() => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const filledInputs: boolean = username.length > 0 && password.length > 0

  function handleChangeUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }
  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  return (
    <aside>
      <img className="riot-logo" src={RiotGamesLogo} />

      <h2>Fazer login</h2>

      <form className="inputs">
        <label>
          <input onChange={handleChangeUsername} />
          <span className={username.length > 0 ? 'move-top' : ''}>Nome de usuário</span>
        </label>
        <label>
          <input onChange={handleChangePassword} type="password" />
          <span className={password.length > 0 ? 'move-top' : ''}>Sua senha</span>
        </label>
      </form>

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
        <span>Manter login</span>
      </label>

      <button 
        className={`sign-in ${filledInputs ? 'active': ''}`} 
        onClick={() => alert('Wrong login credentials!')}
        disabled={!filledInputs}
      >
        <ArrowRight color="#E0E0E0" />
      </button>

      <footer>
        <div className="help-signup">
          <strong>NÃO CONSEGUE INICIAR SESSÃO?</strong>
          <a href="https://signup.br.leagueoflegends.com/pt">CRIAR CONTA</a>
        </div>

        <span className="developed">
          Developed by <a href="https://github.com/hallexcosta">Hállex</a>
        </span>
      </footer>
    </aside>
  )
})
