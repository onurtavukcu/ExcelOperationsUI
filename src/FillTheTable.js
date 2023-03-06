import Table from 'react-bootstrap/Table';

const FillTable = (props) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>onur</th>
                    <th>bahadir</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => {
                    console.log(item);
                    return (
                        <tr>
                            <td>{item.sO_Nr}</td>
                            <td>{item.bezeichnung}</td>
                            <td>{item.anz_NE30}</td>
                            <td>{item.anz_NE32}</td>
                            
                        </tr>)

                })}
            </tbody>
        </Table>
    );
}
export default FillTable;