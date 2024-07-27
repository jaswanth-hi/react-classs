import { useEffect, useRef, useState } from "react";
import Table from 'react-bootstrap/Table';

const SamsungForm = () => {
    const mobileBrand = useRef();
    const mobileModel = useRef();
    const imeiNumber = useRef();
    const name = useRef();
    const mobileNumber = useRef();
    const [error, setError] = useState(null);
    const [abc, setAbc] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("abc");
        if (storedData) {
            setAbc(JSON.parse(storedData));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const mobileBrandEnter = mobileBrand.current.value;
        const mobileModelEnter = mobileModel.current.value;
        const imeiEnter = imeiNumber.current.value;
        const nameEnter = name.current.value;
        const mobileNumberEnter = mobileNumber.current.value;

        if (/samsung/gi.test(mobileBrandEnter) && mobileModelEnter && imeiEnter && nameEnter && mobileNumberEnter) {
            alert("Successful");
            setError(null);

            const newEntry = {
                MB: mobileBrandEnter,
                MModel: mobileModelEnter,
                ImEi: imeiEnter,
                Name: nameEnter,
                MNumber: mobileNumberEnter,
            };
            const updatedList = [...abc, newEntry];
            setAbc(updatedList);
            localStorage.setItem("abc", JSON.stringify(updatedList));
        } else {
            setError("Please enter all required fields correctly.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="brandInput"><b>Enter Mobile Brand:</b></label>
                    <input type="text" className="form-control" id="brandInput" ref={mobileBrand} />
                </div>
                <div className="form-group">
                    <label htmlFor="modelInput"><b>Enter Mobile Model:</b></label>
                    <input type="text" className="form-control" id="modelInput" ref={mobileModel} />
                </div>
                <div className="form-group">
                    <label htmlFor="imeiInput">Enter IMEI Number:</label>
                    <input type="text" className="form-control" id="imeiInput" ref={imeiNumber} />
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput">Enter Name:</label>
                    <input type="text" className="form-control" id="nameInput" ref={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumberInput">Enter Mobile Number:</label>
                    <input type="text" className="form-control" id="mobileNumberInput" ref={mobileNumber} />
                </div>
                {error && <span style={{ color: "red" }}>{error}</span>}
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mobile Brand</th>
                        <th>Mobile Model</th>
                        <th>IMEI Number</th>
                        <th>Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {abc.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.MB}</td>
                            <td>{entry.MModel}</td>
                            <td>{entry.ImEi}</td>
                            <td>{entry.Name}</td>
                            <td>{entry.MNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SamsungForm;
