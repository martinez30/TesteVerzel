import React, {useState} from 'react';
import api from '../../_api/baseApi'
import './Edit.css'
import {useHistory,Link} from 'react-router-dom'
import InputMask from 'react-input-mask'

const FormTask = ({match}) => {
    
    const taskId = parseInt(match.params.id);
    const history = new useHistory();
    let value = 'Criar';
    let task = {};
    let [description, setDescription] = useState('');
    let [initialDate, setInitialDate] = useState('');
    let [finishDate, setFinishDate] = useState('');
    
    async function setValues(){
        const response = await api.get('task/' + taskId);
        setDescription(response.data.description)
        setInitialDate(response.data.initialDate)
        setFinishDate(response.data.finishDate)
    }

    if(taskId){
        setValues();
        value = 'Alterar';
    }

    const submit = () => {
        task = {
            description: description,
            initialDate: initialDate,
            finishDate: finishDate
        }
        if(task.description !== '' && task.initialDate !== '' && task.finishDate !== ''){
            if(taskId){
                task.id = taskId;
                api.put('task/' + taskId, task).then(() => {
                    history.push('/home')
                });      
            }
            else{
                api.post('task/', task).then(() => {
                    history.push('/home')
                });
            }
        }
        else{
            history.push('/home')
        }
    }

    return (
        <>
            <form className="card">
                <label>Descrição</label>
                <input defaultValue={description} onChange={e => description = e.target.value} className="form-control"/>
                <div className="row">
                    <div className="col-md-6 float-left">
                        <label className="form-control-plaintext">Data de entrega</label>
                        <InputMask mask="99/99/9999" placeholder={initialDate} onChange={e => initialDate = e.target.value} className="form-control"/>
                    </div>
                    <div className="col-md-6 float-left">
                        <label className="form-control-plaintext">Data de Conclusão</label>
                        <InputMask mask="99/99/9999" placeholder={finishDate} onChange={e => finishDate = e.target.value} className="form-control"/>
                    </div>
                </div>
            </form>
            <input className="btn btn-primary buttonTask" onClick={() => submit()} type="button" readOnly value={value}/>
            <Link className="btn btn-secondary buttonTask" type="button" to="/home" >
                Voltar
            </Link>
            </>
    )
}

export default FormTask