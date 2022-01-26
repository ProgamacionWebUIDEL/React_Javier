import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";


const CreateSerie = () => (
    <Form className="create-form">
        <Form.Field>
            <label>Nombre: </label>
            <input placeholder='Nombre de la Serie' />
        </Form.Field>
        <Form.Field>
            <label>Director: </label>
            <input placeholder='Director de la Serie' />
        </Form.Field>
        <Form.Field>
            <label>Fecha de Estreno: </label>
            <input type="date" placeholder="Año de estreno de la Serie"/>
        </Form.Field>
        <Form.Field>
            <label>Idioma: </label>
                <select value="Seleccione el Idioma">
                <option>Español</option>
                <option>Inglés</option>
                <option>Alemán</option>
                </select>
        </Form.Field>
        <Form.Field>
            <label>Categoria: </label>
                <select value="Seleccione el Categoria">
                <option>Terror</option>
                <option>Comedia</option>
                <option>Suspenso</option>
                <option>Ciencia Ficción</option>
                </select>
        </Form.Field>
        <Form.Field>
            <label>Número de Temporadas: </label>
            <input type="number" placeholder="# de temporadas"/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='La información esta Completa' />
        </Form.Field>
        <Button type='submit'>Enviar</Button>
    </Form>
)

export default CreateSerie;