import './Login.css';

import Support from '../../Components/Support/Support';

function Login(){
    return(
        <main className='login_main'>
            <section>
                <h1>Iniciar sesión</h1>

                <form className='d-flex-column gap-10'>
                    <div className='d-flex-column gap-5'>
                        <fieldset>
                            <input type='text' placeholder='Usuario'></input>
                        </fieldset>
                        <fieldset>
                            <input type='password' placeholder='Contraseña'></input>
                        </fieldset>
                    </div>

                    <div className='d-flex-center-between gap-10 d-flex-wrap'>
                        <a href='' className='login_main_forget_pswd'>
                            <p>¿Olvidaste tu contraseña?</p>
                        </a>

                        <button type='submit' className='login_button'>
                            <span className="material-symbols-outlined">login</span>
                            <p>Ingresar</p>
                        </button>
                    </div>
                </form>
            </section>

            <Support/>
        </main>
    )
}

export default Login;
