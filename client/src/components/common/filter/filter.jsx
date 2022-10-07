import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import CatalogSorting from "../../page/catalog/catalogSorting";
import CatalogListCard from "../../page/catalog/catalogListCard";
import Pagination from "../pagination";
import ButtonScrollTo from "../buttonScrollTo";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import MultiRangeSlider from "../form/multiRangeSlider";
import _ from "lodash";
import {paginate} from "../../../utils/paginate";

const Filter = ({catalogListCard, filteredUsers, pageSize, currentPage, onPageChange}) => {
    const [sortBy] = useState({path: "name", order: "asc"});

    const maxPrice = catalogListCard.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
    const minPrice = catalogListCard.reduce((acc, curr) => acc.price < curr.price ? acc : curr);

    const [min, setMin] = useState({input: minPrice.price, slide: minPrice.price});
    const [max, setMax] = useState({input: maxPrice.price, slide: maxPrice.price});

    const extremeMin = minPrice.price;
    const extremeMax = maxPrice.price;

    const handleMinChange = (e) => {
        const v = parseInt(e.target.value, 10);
        if (v) {
            if (v > max.input && !!max.input) {
                setMin({input: max.input - 1, slide: max.input - 1});
            } else if (v < extremeMin) {
                setMin({input: v, slide: extremeMin});
            } else {
                setMin({input: v, slide: v});
            }
        } else {
            setMin((prev) => ({...prev, input: ""}));
        }
    };

    const handleMaxChange = (e) => {
        const v = parseInt(e.target.value, 10);
        if (v) {
            if (v < min.input && !!min.input) {
                setMax({input: v, slide: extremeMax});
            } else if (v > extremeMax) {
                setMax({input: extremeMax, slide: extremeMax});
            } else {
                setMax({input: v, slide: v});
            }
        } else {
            setMax((prev) => ({...prev, input: ""}));
        }
    };

    const arrayCheckIds = [`${min.input}`, `${max.input}`];

    const priseList = filteredUsers.filter(elem => {
        return elem.price >= +arrayCheckIds[0] && elem.price <= +arrayCheckIds[1];
    });

    const [checkboxes, setCheckboxes] = useState([]);

    useEffect(() => {
        setCheckboxes([]);
    }, []);

    const changeCheckboxes = (id) => {
        setCheckboxes(
            checkboxes.includes(id)
                ? checkboxes.filter((el) => {
                    return el !== id
                })
                : [...checkboxes, id]
        );
    };

    const checkboxesList = priseList.filter(item => checkboxes.indexOf(item.size) !== -1);
    const filterList = checkboxes.length > 0 ? checkboxesList : priseList;

    const sortedUsers = _.orderBy(filterList, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    const count = filterList.length;

    return (
        <>
            <Col xs={3}>
                <div>
                    <h5 className="mt-3 text-center">Фильтр</h5>

                    <Accordion defaultActiveKey={["0"]} alwaysOpen className="mt-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Цена
                            </Accordion.Header>
                            <Accordion.Body>
                                <MultiRangeSlider
                                    valueRange={[minPrice.price, maxPrice.price]}
                                    minVal={min.slide}
                                    maxVal={max.slide}
                                    setMinVal={(v) => {
                                        setMin({input: v, slide: v});
                                    }}
                                    setMaxVal={(v) => {
                                        setMax({input: v, slide: v});
                                    }}
                                    onChange={(min, max) => ((min, max))}
                                />
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <label htmlFor="name">
                                            От:
                                        </label>
                                        <input
                                            type="number"
                                            id="name"
                                            name="name"
                                            required
                                            minLength="4"
                                            maxLength="8"
                                            size="10"
                                            value={min.input}
                                            onChange={handleMinChange}
                                            className="w-75"
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="name">
                                            До:
                                        </label>
                                        <input
                                            type="number"
                                            id="name"
                                            name="name"
                                            required
                                            minLength="4"
                                            maxLength="8"
                                            size="10"
                                            value={max.input}
                                            onChange={handleMaxChange}
                                            className="w-75"
                                        />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Размер товара</Accordion.Header>
                            <Accordion.Body>
                                <form>
                                    <fieldset>
                                        <input
                                            type="checkbox"
                                            id="s"
                                            onChange={(event) => changeCheckboxes(event.target.id)}
                                            checked={checkboxes.includes('s')}
                                        />
                                        <label htmlFor="s">s</label>
                                    </fieldset>

                                    <fieldset>
                                        <input
                                            type="checkbox"
                                            id="m"
                                            onChange={(event) => changeCheckboxes(event.target.id)}
                                            checked={checkboxes.includes('m')}
                                        />
                                        <label htmlFor="m">m</label>
                                    </fieldset>

                                    <fieldset>
                                        <input
                                            type="checkbox"
                                            id="l"
                                            onChange={(event) => changeCheckboxes(event.target.id)}
                                            checked={checkboxes.includes('l')}
                                        />
                                        <label htmlFor="l">l</label>
                                    </fieldset>
                                </form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Col>
            <Col>
                <Row className="mt-3">
                    <Col className="d-flex justify-content-end align-items-center">
                        <CatalogSorting/>
                    </Col>
                    <Row className="m-0 p-0">
                        <Col>
                            <CatalogListCard catalogListCard={userCrop}/>
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={onPageChange}
                            />
                            <ButtonScrollTo/>
                        </Col>
                    </Row>
                </Row>
            </Col>
        </>
    );
};

Filter.propTypes = {
    catalogListCard: PropTypes.array,
    filteredUsers: PropTypes.array,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
}

export default Filter;
