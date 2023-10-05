

function App() {

  return (
    <>
     <head></head>

<body>

    <div id="login">

        <form className="box">

            <div className="box-header">

                <h2>Login</h2>

            </div>

            <div className="box-content">

                <div className="box-content-area">

                    <label for="usuario">Usuário</label>

                    <input type="text" id="usuario" />

                </div>

                <div className="box-content-area">

                    <label for="password">Senha</label>

                    <input type="password" id="password" />

                </div>

            </div>

            <div className="box-footer">

               <button className="submit">Entrar</button>

                <a href="#" className="recuperar_senha">Esqueceu a senha?</a>

            </div>

        </form>

    </div>

</body>

   </>
  )
}

export default App
