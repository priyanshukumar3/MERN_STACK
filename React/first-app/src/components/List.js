import React from "react";
import { Fragment } from "react";

function List() {
    const tasks = [
        {title: "Learn React", time: 5},
        {title: "Revise JS", time: 3},
        {title: "Have Lunch", time: 0.5}

    ];
    return (
        <ul>
            {tasks
            .filter((task) => task.time>2)
            .map((task, index) => {
                // if(task.time > 2) {
                //     return;
                // }
                return (
                    <Fragment key={index}>
                        <li>
                            {task.title} - <b>{task.time} Hour</b>
                        </li>
                        <button>Done</button>
                    </Fragment>
                );
            })}
        </ul>
    );
}

export default List;