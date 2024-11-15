import React from "react";
import "../../styles/EstilosGerais.css";

{/* 
    imbutir a Api do Google
    Procurar css correspondente

    */}

function Contato(){
    return(

        <section id="Contato" class="mb-4 fade-in">

        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h2><i class="fas fa-envelope"></i> <b>Contato</b></h2>
                    </div>

                    <div class="card-body">
                        <form id="contato-form">

                            <div class="form-group">
                                <label for="nome"><i class="fas fa-user"></i> <b>Nome:</b></label>
                                <input type="text" class="form-control" id="nome" required/>
                            </div>

                            <div class="form-group">
                                <label for="email"><i class="fas fa-envelope"></i> <b>E-mail:</b></label>
                                <input type="email" class="form-control" id="email" required/>
                            </div>

                            <div class="form-group">
                                <label for="mensagem"><i class="fas fa-comment"></i> <b>Mensagem:</b></label>
                                <textarea class="form-control" id="mensagem" rows="4" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Enviar</button>

                        </form>

                        <div id="resultado-mensagem" class="mt-3"></div>
                    </div>
                </div>
            </div>
            
            {/*<!-- Localização -->*/}
            <div class="col-md-6 fade-in">
                <div class="card">

                    <div class="card-header text-center">
                        <h2><span role="img" aria-label="Localização">📍</span> <b>Localização</b></h2>
                    </div>

                    <div class="card-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6834917530537!2d-48.072287623065286!3d-15.820634523605642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3391b366fc47%3A0x88c16b784a3ad98f!2sSenai%20Taguatinga!5e0!3m2!1sen!2sbr!4v1729222919421!5m2!1sen!2sbr" width="1200" height="380" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Contato;