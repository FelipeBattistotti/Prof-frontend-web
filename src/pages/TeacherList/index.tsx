import React from 'react';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os profs disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/61482397?s=460&u=07693e36331296afe32930fd5a758d4a72d9c4ed&v=4" alt="Felipe Battistotti"/>
                        <div>
                            <strong>Felipe Battistotti</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>

                </article>
            </main>
        </div>
    );
}

export default TeacherList;
