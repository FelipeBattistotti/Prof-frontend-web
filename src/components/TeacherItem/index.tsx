import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    teacher: {
        id: string;
        name: string;
        avatar: string;
        bio: string;
        cost: number;
        subject: string;
        whatsapp: string;
    };
}

const TeacherItem: React.FC<TeacherItemProps> = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/61482397?s=460&u=07693e36331296afe32930fd5a758d4a72d9c4ed&v=4" alt="Felipe Battistotti"/>
                <div>
                    <strong>Felipe Battistotti</strong>
                    <span>Algoritmos</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias da Computação.
                <br /><br />
                Apaixonado por programação.
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
    );
}

export default TeacherItem;
