import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }){
    return (
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do Projeto"
            />
            <Input 
            type="number" 
            text="Orçamento do Projeto" 
            name="budget" 
            placeholder="Insira o orçamento total"
            />
            <Select 
            name="category_id"
            text="Selecione a categoria" 
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm