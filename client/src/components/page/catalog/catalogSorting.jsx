import React from "react";
import Form from "react-bootstrap/Form";

const CatalogSorting = () => {
    return (
        <>
            <h6 className="me-3">
                Сортировать по:
            </h6>
            <Form.Select
                aria-label="Default select example"
                style={{width: "20%"}}
            >
                <option>по умолчанию</option>
                <option value="1">возрастанию цены</option>
                <option value="2">убыванию цены</option>
                <option value="3">алфавиту А - Я</option>
                <option value="4">алфавиту Я - А</option>
                <option value="5">новые - старые</option>
                <option value="6">старые - новые</option>
            </Form.Select>
        </>
    );
};

export default CatalogSorting;
