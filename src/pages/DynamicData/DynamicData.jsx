import React, { useState, useEffect } from 'react';

const DynamicDataForm = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        // Simulating API call
        const fetchData = async () => {
            // Replace this with actual API call
            const mockData = [
                {
                    Name: "City General Hospital",
                    Address: { Street: "123 Health Lane", City: "Metropolis", State: "CA", ZipCode: "90210" },
                    Phone: "555-123-4567",
                    Specialties: ["Emergency Care", "Cardiology", "Pediatrics"],
                    Departments: [
                        { DepartmentName: "Emergency Room", NumberOfStaff: 45 },
                        { DepartmentName: "Surgery", NumberOfStaff: 30 }
                    ],
                    EmergencyServices: true,
                    FoundingYear: 1985
                },
                {
                    Name: "Green Valley Medical Center",
                    Address: { Street: "456 Wellness Blvd", City: "Green Valley", State: "TX", ZipCode: "75001" },
                    Phone: "555-987-6543",
                    Specialties: ["Oncology", "Neurology"],
                    Departments: [
                        { DepartmentName: "Cancer Center", NumberOfStaff: 25 },
                        { DepartmentName: "Neurology Unit", NumberOfStaff: 20 }
                    ],
                    EmergencyServices: false,
                    FoundingYear: 2000
                }
            ];
            setHospitals(mockData);
        };

        fetchData();
    }, []);

    const handleHospitalChange = (index, field, value) => {
        const updatedHospitals = [...hospitals];
        updatedHospitals[index][field] = value;
        setHospitals(updatedHospitals);
    };

    const handleAddressChange = (hospitalIndex, field, value) => {
        const updatedHospitals = [...hospitals];
        updatedHospitals[hospitalIndex].Address[field] = value;
        setHospitals(updatedHospitals);
    };

    const handleDepartmentChange = (hospitalIndex, departmentIndex, field, value) => {
        const updatedHospitals = [...hospitals];
        updatedHospitals[hospitalIndex].Departments[departmentIndex][field] = value;
        setHospitals(updatedHospitals);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Hospital Management Form</h1>
            {hospitals.map((hospital, hospitalIndex) => (
                <div key={hospitalIndex} style={{ marginBottom: '40px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                    <h2>Hospital #{hospitalIndex + 1}</h2>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={hospital.Name}
                            onChange={(e) => handleHospitalChange(hospitalIndex, 'Name', e.target.value)}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3>Address</h3>
                        {Object.entries(hospital.Address).map(([key, value]) => (
                            <div key={key} style={{ marginBottom: '10px' }}>
                                <label>{key}:</label>
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleAddressChange(hospitalIndex, key, e.target.value)}
                                    style={{ width: '100%', padding: '8px' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            value={hospital.Phone}
                            onChange={(e) => handleHospitalChange(hospitalIndex, 'Phone', e.target.value)}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3>Specialties</h3>
                        {hospital.Specialties.map((specialty, index) => (
                            <div key={index} style={{ marginBottom: '5px' }}>
                                <input
                                    type="text"
                                    value={specialty}
                                    onChange={(e) => {
                                        const updatedSpecialties = [...hospital.Specialties];
                                        updatedSpecialties[index] = e.target.value;
                                        handleHospitalChange(hospitalIndex, 'Specialties', updatedSpecialties);
                                    }}
                                    style={{ width: '100%', padding: '8px' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3>Departments</h3>
                        {hospital.Departments.map((department, departmentIndex) => (
                            <div key={departmentIndex} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #eee' }}>
                                <label>Department Name:</label>
                                <input
                                    type="text"
                                    value={department.DepartmentName}
                                    onChange={(e) => handleDepartmentChange(hospitalIndex, departmentIndex, 'DepartmentName', e.target.value)}
                                    style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                                />
                                <label>Number of Staff:</label>
                                <input
                                    type="number"
                                    value={department.NumberOfStaff}
                                    onChange={(e) => handleDepartmentChange(hospitalIndex, departmentIndex, 'NumberOfStaff', e.target.value)}
                                    style={{ width: '100%', padding: '8px' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={hospital.EmergencyServices}
                                onChange={(e) => handleHospitalChange(hospitalIndex, 'EmergencyServices', e.target.checked)}
                            />
                            Emergency Services Available
                        </label>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Founding Year:</label>
                        <input
                            type="number"
                            value={hospital.FoundingYear}
                            onChange={(e) => handleHospitalChange(hospitalIndex, 'FoundingYear', parseInt(e.target.value))}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={() => console.log('Updated Hospitals:', hospitals)}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Save Changes
            </button>
        </div>
    );
};

export default DynamicDataForm;