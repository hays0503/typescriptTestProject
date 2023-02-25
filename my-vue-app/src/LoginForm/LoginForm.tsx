import './LoginFormStyle.css'
import shied from './pic/shied.png'

export function LoginForm(){

    const handleMouseMove = (e:any) => {
        const el = document.getElementById("wrapper");
        const d = el.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.documentElement.style.setProperty("--scale", "1.6");
        document.documentElement.style.setProperty("--x", x / 2 + "px");
    
        document.documentElement.style.setProperty("--y", y / 2 + "px");
      };


    const handleMouseLeave = () => {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
      };

    return (<div className={"backgroundLoginForm"}>
        <div className={'parallaxCss'}>
            
            <div id='BodyWrapper'>

                <div    
                    id="wrapper" 
                    onMouseMove={handleMouseMove}
                    onClick={handleMouseLeave}
                >

                <img id="image"/>   
                    <div className='ContentBlock'>

                        <div className={"centerBlock formDataDivider10"}>
                            <h1>Форма логина</h1>
                            <h2>У вас есть аккаунт ?</h2>

                            <form className={"centerBlock formDataDivider10"} autoComplete="on" action="" method="post">
                                <input className={"inputArea"} placeholder="Логин"/>                
                                <input className={"inputArea"} placeholder="Пароль"/>
                                <button className={"inputArea"} name="button">Войти</button>      
                            </form>
                            <br/>
                            <div className={"inLineBlock formDataDivider20"}>

                                <label>Запомнить меня
                                    <input type='checkbox'></input>
                                </label>

                                <div className="w-50 text-md-right">
                                    <a>
                                        Забыли пароль                                    
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}