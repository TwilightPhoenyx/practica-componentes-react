function SingUp() {
    return(
        <div class="container-form">
            <h2>Registro</h2>
            <label>Nombre de Usuario:
                <input type="text" name="UserName" placeholder="Nombre de usuario"/>
            </label>

            <label>Correo Electrónico: 
                <input type="email" name="Email" placeholder="ejemplo@gmail.es"/>
            </label>
            
            <label>Contraseña:          
                <input type="password" name="Password"/>
            </label>
            
            <label>Confirmar Contraseña: 
                <input type="password" name="Password"/>
            </label>

            <label class="label-resaltada">Autorizo que se me manden e-mails de publicidad
                <input type="checkbox" name="consent" value="allowSendMails"/>
            </label>

            <label class="label-resaltada">Autorizo que usen mis datos con fines comerciales
                <input type="checkbox" name="consent" value="allowDataUse"/>
            </label>

            <fieldset>
                <legend>Configuración de cookies</legend>
                <label class="label-resaltada">
                    <input type="radio" name="cookies" value="all" defaultChecked/>
                    Acepto todas las cookies
                </label>
                <label class="label-resaltada">
                    <input type="radio" name="cookies" value="requiered"/>
                    Acepto solo cookies recomendadas
                </label>
                <label class="label-resaltada">
                    <input type="radio" name="cookies" value="none"/>
                    No acepto ninguna cookie
                </label>
            </fieldset>
    
            <button>Regístrame</button>
        </div>

)
}

export default SingUp