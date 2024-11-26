import React from "react";

export default class List extends React.Component {
    render() {

        const { data, ulClass, liClass} = this.props;

        return (
            <ul className={ulClass}>
                {data.map((item) => <li key={item.id} className={liClass}>{item.content}</li>)}
            </ul>
        )
    }
}

