import React from "react";

export default class Tbody extends React.Component {
    render() {
        const { data, columns, rows, rowsMobile, trClass, trAlign, tdClass, thClass} = this.props;

        const row = () => {
            let Html = [];

            for(let i = 0; i < data.length; i += 2) {
                Html.push(
                <tr key={i} className={trClass} align={trAlign}>
                    <th key={data[i].id + 1} className={thClass}>{data[i].content}</th>
                    <td key={data[i + 1].id + 1} className={tdClass}>{data[i + 1].content}</td>
                </tr>
                )
            }

            return Html;
        }

        const rowMobile = () => {
            let Html = [];

            const trID = (i) => `tr${i}`;
            

            for(let i = 0; i < data.length; i += 2) {
                Html.push(
                <React.Fragment>
                    <tr key={trID(i)} className={trClass} align={trAlign}>
                        <th  className={thClass}>{data[i].content}</th>
                    </tr>
                    <tr key={trID(i + 1)}>
                        <td  className={tdClass}>{data[i + 1].content}</td>
                    </tr>
                </React.Fragment>
        )
            }

            return Html;
        }

        const horizontal = () => {
            return (
                <tr className={trClass} align={trAlign}>
                    {data.map((item) => <td key={item.id} className={tdClass}>{item.content}</td>)}
                </tr>
            )
        }

        const vertical = () => {
            let Headers = [];
            let Cells = [];

            for (let i = 0; i < data.length; i += 2) {
                Headers.push(data[i]);
                Cells.push(data[i + 1])
            }

            return (
                <React.Fragment>
                    <tr className={trClass} align={trAlign}>
                        {Headers.map(item => <th key={item.id} className={thClass}>{item.content}</th>)}
                    </tr>
                    <tr>
                        {Cells.map(item => <td key={item.id} className={tdClass}>{item.content}</td>)}
                    </tr>
                </React.Fragment>

            )
        }

        const style = () => {
            if (rows) {
                return row();
            }

            if (columns) {
                return vertical();
            }

            if (rowsMobile) {
                return rowMobile();
            }

            return horizontal();
        }

        return (
            <React.Fragment>
                {style()}
            </React.Fragment>
        )
}
}


Tbody.defaultProps = {
    verticalHeading: false
}