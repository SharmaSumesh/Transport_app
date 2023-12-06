import React, { useState } from "react";

function VehicleInfo() {
  const [formData, setFormData] = useState({
    date: "",
    memoNo: "",
    partyName: "",
    contactNo: "",
    vehicleNo: "",
    from: "",
    to: "",
    freight: "",
    advCash: "",
    comm: "",
    bill: "",
    kholi: "",
    pod: "",
    billNo: "",
    totalBill: "",
    balance: "",
    lorryDetails: "",
    ownerDetails: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTableData((prevTableData) => [...prevTableData, formData]);

    // Clear the form after submission
    setFormData({
      date: "",
      memoNo: "",
      partyName: "",
      contactNo: "",
      vehicleNo: "",
      from: "",
      to: "",
      freight: "",
      advCash: "",
      comm: "",
      bill: "",
      kholi: "",
      pod: "",
      billNo: "",
      totalBill: "",
      balance: "",
      lorryDetails: "",
      ownerDetails: "",
      remarks: "",
    });
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="memoNo">Memo No.</label>
          <input
            type="text"
            id="memoNo"
            name="memoNo"
            value={formData.memoNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="partyName">Party Name</label>
          <input
            type="text"
            id="partyName"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No.</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleNo">Vehicle No.</label>
          <input
            type="text"
            id="vehicleNo"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to" value={formData.to} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="freight">Freight</label>
          <input
            type="text"
            id="freight"
            name="freight"
            value={formData.freight}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="advCash">Adv Cash</label>
          <input
            type="text"
            id="advCash"
            name="advCash"
            value={formData.advCash}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comm">Comm</label>
          <input type="text" id="comm" name="comm" value={formData.comm} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bill">Bill</label>
          <input type="text" id="bill" name="bill" value={formData.bill} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="kholi">Kholi</label>
          <input
            type="text"
            id="kholi"
            name="kholi"
            value={formData.kholi}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pod">POD</label>
          <input type="text" id="pod" name="pod" value={formData.pod} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="billNo">Bill No.</label>
          <input
            type="text"
            id="billNo"
            name="billNo"
            value={formData.billNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalBill">Total Bill</label>
          <input
            type="text"
            id="totalBill"
            name="totalBill"
            value={formData.totalBill}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="balance">Balance</label>
          <input
            type="text"
            id="balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lorryDetails">Lorry Details</label>
          <input
            type="text"
            id="lorryDetails"
            name="lorryDetails"
            value={formData.lorryDetails}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerDetails">Owner Details</label>
          <input
            type="text"
            id="ownerDetails"
            name="ownerDetails"
            value={formData.ownerDetails}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks</label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Form Data Table</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(formData).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              {Object.values(data).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleInfo;
