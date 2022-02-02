import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from 'axios';

var qs = require('qs');

export default function CreateSeries() {
    const [nombre, setNombreSerie] = useState('');
    const [director, setDirector] = useState('');
    const [anio_estreno, setFechaEstreno] = useState('');
    const [idioma, setIdioma] = useState('');
    const [categoria, setCategoria] = useState('');
    const [temporadas, setTemporadas] = useState('');
    const [informacion, setInfo] = useState('');

    const enviarDatos = () => {
        console.log(nombre);
        console.log(director);
        console.log(anio_estreno);
        console.log(idioma);
        console.log(categoria);
        console.log(temporadas);
        console.log(informacion);


        var axios = require('axios');

        var data = qs.stringify({
            'nombre': nombre,
            'director': director,
            'anio_estreno': anio_estreno,
            'idioma': idioma,
            'categoria': categoria,
            'temporadas': temporadas,
            'informacion': informacion,
        });

        var config = {
            method: 'post',
            // url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula?nombre=300&direccot=Zack Snyder&anio_estreno=2010&idioma=Ingles',
            url: 'https://crudmongojavier.herokuapp.com/series/crearSerie',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                window.alert("Serie Creada Correctamente")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                window.alert("ERROR ! ")
                console.log(error);
            });

    }
    return (
        <Form className="create-form">
            <Form.Field>
                <label>Nombre: </label>
                <input placeholder='Nombre de la Serie' onChange={(e) => setNombreSerie(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Director: </label>
                <input placeholder='Director de la Serie' onChange={(e) => setDirector(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Fecha de Estreno: </label>
                <input type="date" placeholder="Año de estreno de la Serie" onChange={(e) => setFechaEstreno(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Idioma: </label>
                <select value="Seleccione el Idioma" onChange={(e) => setIdioma(e.target.value)}>
                    <option>Español</option>
                    <option>Inglés</option>
                    <option>Alemán</option>
                </select>
            </Form.Field>
            <Form.Field>
                <label>Categoria: </label>
                <select value="Seleccione el Categoria" onChange={(e) => setCategoria(e.target.value)}>
                    <option>Terror</option>
                    <option>Comedia</option>
                    <option>Suspenso</option>
                    <option>Ciencia Ficción</option>
                </select>
            </Form.Field>
            <Form.Field>
                <label>Número de Temporadas: </label>
                <input type="number" placeholder="# de temporadas" onChange={(e) => setTemporadas(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='La información esta Completa' onChange={(e) => setInfo(!informacion)} />
            </Form.Field>
            <Button onClick={enviarDatos} type='submit'>Enviar</Button>
        </Form>
    )

}
