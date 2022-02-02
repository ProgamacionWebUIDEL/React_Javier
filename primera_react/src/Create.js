import React, {useState} from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from 'axios';
import { parseWithOptions } from "date-fns/fp";

var qs = require('qs');

export default function Create(){
    const [nombre,setNombrePelicula]=useState('');
    const [director,setDirector]=useState('');
    const [anio_estreno,setAñoEstreno]=useState('');
    const [idioma,setIdioma]=useState('');
    const [informacion,setInfo]=useState('');

    const enviarDatos = () => {
        console.log(nombre);
        console.log(director);
        console.log(anio_estreno);
        console.log(idioma);
        console.log(informacion);

        var axios = require('axios');

        var data = qs.stringify({
        'nombre': nombre,
        'director': director,
        'anio_estreno': anio_estreno,
        'idioma': idioma,
        'informacion': informacion,
        });

        var config = {
        method: 'post',
        // url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula?nombre=300&direccot=Zack Snyder&anio_estreno=2010&idioma=Ingles',
        url: 'https://crudmongojavier.herokuapp.com/peliculas/crearPelicula',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            window.alert("Pelicula Creada Correctamente")
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            window.alert("ERROR ! ")
        console.log(error);
        });

    }
    return(
    <Form className="create-form">
        <Form.Field>
            <label>Nombre: </label>
            <input placeholder='Nombre de la Pelicula' onChange={(e) => setNombrePelicula(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Director: </label>
            <input placeholder='Director de la Pelicula' onChange={(e) => setDirector(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Año de Estreno: </label>
            <input placeholder="Año de estreno de la Pelicula" onChange={(e) => setAñoEstreno(e.target.value)}/>
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
            <Checkbox label='La información esta Completa' onChange={(e) => setInfo(!informacion)}/>
        </Form.Field>
        <Button onClick={enviarDatos} type='submit'>Enviar</Button>
    </Form>
    )

}



