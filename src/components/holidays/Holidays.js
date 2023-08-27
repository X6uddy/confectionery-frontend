import './holidays.scss';
import './holidays-media.scss';

const Holidays = () => {
    const reasons = [
        { title: 'Подарок для близких', content: 'Наши продукты идеально подходят в качестве прекрасного подарка для ваших близких. От дней рождения до праздничных моментов, наша продукция станет сладким и незабываемым сюрпризом'},
        { title: 'Создание настроения', content: 'Наши сладости могут стать элементом создания атмосферы. Они могут подчеркнуть тематику мероприятия и помочь вам передать желаемое настроение'},
        { title: 'Разнообразие в меню', content: 'Если вы хотите разнообразить свой рацион и добавить ярких ноток в повседневное питание, наша продукция - отличный выбор'},
        { title: 'Вдохновение для домашних шедевров', content: 'Используйте наши десерты как вдохновение для создания своих кулинарных шедевров дома'},
    ]
    return (
        <div className="container">
            <div className="holidays">
                <h2 className="holidays__title">Для чего предназначена наша продукция</h2>
                <ul className="holidays-wrapper">
                    {reasons.map((item, i) => {
                        return ((
                            <li className="holidays__item" key={i}>
                                <div className="holidays__item-card">
                                    <div className="holidays__item_front">{item.title}</div>
                                    <div className="holidays__item_back">{item.content}</div>
                                </div>
                            </li>
                        ))
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Holidays;