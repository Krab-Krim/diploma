import React from "react";

const AboutTheProduct = () => {
    return (
        <>
            <h4>О товаре</h4>
            <div className="mt-3 w-75">
                <input type="checkbox" id="read-more-checker" data-more-checker="read-more"/>
                <div className="limiter">
                    <h6>Технические особенности</h6>
                    <ul className="dotted">
                        <li><span>Материал изделия</span><span>сталь</span></li>
                    </ul>
                    <div className="bottom"></div>
                    <h6 className="mt-5">Дополнительная информация</h6>
                    <ul className="dotted">
                        <li><span>Вес с упаковкой (кг)</span><span>3.5 кг</span></li>
                        <li><span>Вид животного</span><span>для грызунов; для собак</span></li>
                        <li><span>Высота предмета</span><span>35 см</span></li>
                        <li><span>Высота упаковки</span><span>7 см</span></li>
                        <li><span>Страна производства</span><span>Китай</span></li>
                    </ul>
                    <h6 className="mt-5 text-danger">Вся информация о товаре справочная и основывается на последних
                        сведениях от производителя.</h6>
                    <div className="bottom"></div>
                </div>
                <label htmlFor="read-more-checker" className="read-more-button"></label>
            </div>
        </>
    );
};

export default AboutTheProduct;
