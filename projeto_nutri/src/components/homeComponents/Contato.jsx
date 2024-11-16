import React from "react";
import "../../styles/EstilosGerais.css";

{/* 
    imbutir a Api do Google
    Procurar css correspondente

    */}

function Contato(){
    return(

        <section id="Contato" className="mb-4 fade-in">

        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center">
                        <h2><i className="fas fa-envelope"></i> <b>Contato</b></h2>
                    </div>

                    <div className="card-body">
                        <form id="contato-form">

                            <div className="form-group">
                                <label htmlFor="nome"><i className="fas fa-user"></i> <b>Nome:</b></label>
                                <input type="text" className="form-control" id="nome" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><i className="fas fa-envelope"></i> <b>E-mail:</b></label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensagem"><i className="fas fa-comment"></i> <b>Mensagem:</b></label>
                                <textarea className="form-control" id="mensagem" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Enviar</button>

                        </form>

                        <div id="resultado-mensagem" className="mt-3"></div>
                    </div>
                </div>
            </div>
            
            {/*<!-- Localização -->*/}
            <div className="col-md-6 fade-in">
                <div className="card">

                    <div className="card-header text-center">
                        <h2><span role="img" aria-label="Localização">📍</span> <b>Localização</b></h2>
                    </div>

                    <div className="card-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6834917530537!2d-48.072287623065286!3d-15.820634523605642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3391b366fc47%3A0x88c16b784a3ad98f!2sSenai%20Taguatinga!5e0!3m2!1sen!2sbr!4v1729222919421!5m2!1sen!2sbr" 
                        width="1200"
                        height="380"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Contato;