import reasons1 from '../../resources/icons/reasons/experience.png';
import reasons2 from '../../resources/icons/reasons/communication.png';
import reasons3 from '../../resources/icons/reasons/delivery.png';
import reasons4 from '../../resources/icons/reasons/quality.png';
import reasons5 from '../../resources/icons/reasons/technologies.png';
import reasons6 from '../../resources/icons/reasons/ingredients.png';

import './reasons.scss';
const Reasons = () => {
    return (
        <div className="reasons">
            <div className="container">
                <h1 className='reasons__title'>Почему мы?</h1>
                
                <div className="reasons-wrapper">
                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons1} alt="experience" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Более 20 лет опыта</div>
                    </div>

                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons2} alt="communication" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Постоянная связь с клиентами</div>
                    </div>

                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons3} alt="delivery" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Быстрая доставка</div>
                    </div>

                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons4} alt="quality" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Качество</div>
                    </div>

                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons5} alt="technologies" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Современные технологии</div>
                    </div>

                    <div className="reasons-block">
                        <div className="reasons-block__wrapper">
                            <img src={reasons6} alt="ingredients" className="reasons-block__img"/>
                        </div>
                        <div className="reasons-block__descr">Натуральные ингредиенты</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons;