import React, { FormEventHandler, MouseEvent } from 'react';
import './LoginFormStyle.css'

export function LoginForm(){

    const handleMouseMove = (event: MouseEvent) => {
        const el = document.getElementById("wrapper");
        if(el){
            const d = el.getBoundingClientRect();
            let x = event.clientX - (d.left + Math.floor(d.width / 2));
            let y = event.clientY - (d.top + Math.floor(d.height / 2));
            // Invert values
            x = x - x * 2;
            y = y - y * 2;
            document.documentElement.style.setProperty("--scale", "1.6");
            document.documentElement.style.setProperty("--x", x / 2 + "px");
        
            document.documentElement.style.setProperty("--y", y / 2 + "px");
        }
    };

    const handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", "1");
        document.documentElement.style.setProperty("--x", "0");
        document.documentElement.style.setProperty("--y", "0");
      };

    const submitLogin = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
    }

    return (<div className={"backgroundLoginForm"}>
        <div className={'parallaxCss'}>
            
            <div id='BodyWrapper'>

                <div    
                    id="wrapper" 
                    onMouseOver={handleMouseMove}
                    onClick={handleMouseLeave}
                >

                <img id="image"/>   
                    <div className='ContentBlock'>

                        <div className={"centerBlock formDataDivider10"}>
                            <h1>Форма логина</h1>
                            <h2>У вас есть аккаунт ?</h2>

                            <form className={"centerBlock formDataDivider10"} onSubmit={submitLogin} autoComplete="on" name="LoginForm" method="post">
                                <input className={"inputArea"} name="login" placeholder="Логин"/>                
                                <input className={"inputArea"} name="password" placeholder="Пароль"/>
                                <button className={"inputArea"}>Войти</button>      
                            
                            <br/>
                            <div className={"inLineBlock formDataDivider20"}>

                                <label>Запомнить меня
                                    <input type='checkbox' name='remember-user'></input>
                                </label>

                                <div className="w-50 text-md-right">
                                    <a>
                                        Забыли пароль                                    
                                    </a>
                                </div>

                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}