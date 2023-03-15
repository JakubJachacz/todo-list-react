import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (<form className="form" action="" onSubmit={onFormSubmit}>
        <input
            value={newTaskContent}
            className="form__input"
            name="newTaskContent"
            type="text"
            placeholder="Co jest do zrobienia?"
            onChange={(event) => setNewTaskContent(event.target.value)}
        />
        <button className="form__button" type="submit" onclick="setFocus()">Dodaj zadanie</button>
    </form>
    );
};

export default Form;