import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";


const Create = () => (
    <Form className="create-form">
        <Form.Field>
            <label>Nombre: </label>
            <input placeholder='Nombre de la Pelicula' />
        </Form.Field>
        <Form.Field>
            <label>Director: </label>
            <input placeholder='Director de la Pelicula' />
        </Form.Field>
        <Form.Field>
            <label>Año de Estreno: </label>
            <input placeholder="Año de estreno de la Pelicula"/>
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
            <Checkbox label='La información esta Completa' />
        </Form.Field>
        <Button type='submit'>Enviar</Button>
    </Form>
)

export default Create;