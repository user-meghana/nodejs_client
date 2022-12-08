import { useSelector, useDispatch } from 'react-redux';
import {formSubmit, formChange, showUserForm, showUserFormConfig } from  './appointmentSlice';

function Register() {
    const userForm = useSelector(showUserForm);
    const userFormConfig = useSelector(showUserFormConfig);
    const dispatch = useDispatch();

    function handleUserFormChange(event) {
        const {name, value} = event.target;
        dispatch(formChange({name, value}));
    }

    function handleFormSubmit () {
        dispatch(formSubmit(userFormConfig.buttonType));
    }

    return (
        <section className="form-content">
            <div className="container register-form">
                <div className="form">
                    <div className="note">
                        <p>Welcome to Gradious Doctor Appointment Booking</p>
                    </div>

                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name='name' type="text" className="form-control" placeholder="Patient Name *" value={userForm.name} onChange={handleUserFormChange} />
                                </div>
                                <div className="form-group">
                                    <select name='gender' className="form-control" placeholder="Select Male/Female *" value={userForm.gender} onChange={handleUserFormChange}>
                                        <option name="M">Male</option>
                                        <option name="F">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input name='age' type="text" className="form-control" placeholder="Age *" value={userForm.age} onChange={handleUserFormChange} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name='phone' type="text" className="form-control" placeholder="Phone Number *" value={userForm.phone} onChange={handleUserFormChange} />
                                </div>
                                <div className="form-group">
                                    <input name='date' type="text" className="form-control" placeholder="Date *" value={userForm.date} onChange={handleUserFormChange} />
                                </div>

                                <div className="form-group">
                                    <input name='time' type="text" className="form-control" placeholder="Time *" value={userForm.time} onChange={handleUserFormChange} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <input name='doctor' type="text" className="form-control" placeholder="Doctor Name *" value={userForm.doctor} onChange={handleUserFormChange} />
                                </div>
                                <div className="form-group">
                                    <select name='status' className="form-control" placeholder="Select Consule/Revisit *" value={userForm.status} onChange={handleUserFormChange}>
                                        <option name="Consult">Consult</option>
                                        <option name="Revisit">Revisit</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btnSubmit" onClick={handleFormSubmit}>{userFormConfig.buttonType} Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;