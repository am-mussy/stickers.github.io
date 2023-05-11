import React, {useEffect, useState} from 'react';

import './App.css';
import {Autocomplete, Input} from "@mui/joy";

function App() {
    const films = [
       {
            companyName: 'ORACAL',
            code: '000',
            name: 'Прозрачный',
            price: 1500,
        },
        {
            companyName: 'ORACAL',
            code: '031',
            name: 'Красный',
            price: 2500,
        }
    ]

    let filmListForAutocomplete = films.map((film)=>{

        return  { label: `${film.companyName} ${film.code} ${film.name} ${film.price}₽`, price: film.price}
    })


    const [selectedFilm, setSelectedFilm] : any = useState({});
    const [width, setWidth]: any = useState(0);
    const [height, setHeight]: any = useState(0);
    const [price, setPrice]: any = useState(0);
    const [metr, setMetr]: any = useState(0)
    useEffect(()=>{
        if(height > 0 && width > 0) {
            let calcMetr = (height * width * 0.0001)
            setPrice(selectedFilm.price * calcMetr)
            setMetr(calcMetr.toFixed(2))
        }

    }, [selectedFilm, width, height])
    return (
        <div className="App">
                <div style={{marginTop: "30px", marginLeft: '50px', display: 'flex', flexDirection: 'row', gap: '30px'}}>
                    <Autocomplete
                        placeholder="Пленка"
                        options={filmListForAutocomplete}
                        sx={{ width: 300 }}
                        onChange={(event, value) => setSelectedFilm(value)}
                    />

                <div style={{width: "100px"}}>
                    <Input placeholder={'см2'} onChange={(e)=>{setWidth(e.target.value)}}/>
                </div>
                <div style={{ width: "100px"}}>
                    <Input placeholder={'см2'} onChange={(e)=>{setHeight(e.target.value)}}/>
                </div>
                <div style={{ width: "150px"}}>
                    <Input placeholder={'Итог'} value={`${price}₽/${metr}м²`} disabled color={'warning'}/>
                </div>
            </div>

        </div>
    );
}

export default App;
