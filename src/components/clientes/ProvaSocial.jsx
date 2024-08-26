import React, { useState, useEffect } from 'react';
import './provaSocial.css';
import info from './info.json';

function ProvaSocial() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);



    useEffect(() => {
        try {
            if (info && info.depoimentos) {
                setData(info.depoimentos);
            } else {
                throw new Error('Dados não encontrados');
            }
        } catch (err) {
            setError(err);
        }
    }, []); 

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className='prova-social'>
            {data.map((item, index) => (
                <div key={index} className='box-prova'>
                    <div className='fotoCliente'>
                        <img src={item['foto-cliente']} alt="Cliente" />
                    </div>
                    <p>
                        {item['prova-social']}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProvaSocial;
