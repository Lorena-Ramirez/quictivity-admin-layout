// NODE_MODULES
import React, { useState } from 'react';

// ASSETS
import workoutVideo from '../..//assets/images/quictivity-workout-thumbnail.png';

// UTILITY
import customStyle from '../../utils/CustomStyles';
import Type from '../../utils/TypeArray';
import Equipment from '../../utils/EquipmentArray';
import BodyParts from '../../utils/BodyPartsArray';
import Phase from '../../utils/PhaseArray';
import Difficulty from '../../utils/DifficultyArray';

// STYLES
import "../../styles.css";

// COMPONENTS
import Title from '../Title';
import QInput from './QInput';
import QSelect from './QSelect';
import QRadio from './QRadio';
import QSwitch from './QSwitch';

 const Form = () => {
  const [form, setForm] = useState({});

  return (
    <>
      <div className="container-full">
        <div className="container-fluid">
        <div class="card p-3 mb-5 rounded form-card" >
          <div class="card-body text-dark">
            <Title>Edit Workout</Title>
            <div className="row">
              <div className="col-12 col-md-4">
                <form>
                  <QInput
                    id="exercise-name"
                    label="Exercise Name"
                    placeholder="Name"
                  />
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <QInput
                        id="start-time"
                        label="Start Time"
                        placeholder="0:00"
                        icon="cil-history"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <QInput
                        id="end-time"
                        label="End Time"
                        placeholder="0:00"
                        icon="cil-history"
                      />
                    </div>
                  </div>
                  <QInput
                    id="calculated-duration"
                    label="Calculated Duration"
                    placeholder="0:00 (read-only)"
                    disabled={true}
                  />
                  <QSelect
                    id="direction"
                    label="Direction"
                    styles={customStyle}
                    options={Type}
                  />
                  <QInput
                    id="reps"
                    label="Reps"
                    placeholder="Number of Reps"
                    disabled={form.holdDuration}
                    setForm={setForm}
                  />
                  <QInput
                    id="hold-duration"
                    name="holdDuration"
                    label="Hold Duration"
                    placeholder="0:00"
                    disabled={form.reps}
                    setForm={setForm}
                  />
                </form>
              </div>
              <div className="col-12 col-md-4">
                <form>

                <QSelect
                  id="exercise-type"
                  label="Exercise Type"
                  styles={customStyle}
                  options={Type}
                />
                <QSelect
                  id="equipment"
                  label="Equipment"
                  styles={customStyle}
                  options={Equipment}
                />
                <QSelect
                  id="phase"
                  label="Phase"
                  styles={customStyle}
                  options={Phase}
                />
                <QRadio
                  id="difficulty"
                  label="Difficulty"
                  options={Difficulty}
                />
                <QSelect
                  id="bodyParts"
                  label="Body Parts"
                  styles={customStyle}
                  options={BodyParts}
                />
                <QSelect
                  id="joints"
                  label="Joints"
                  styles={customStyle}
                  options={Type}
                />
                </form>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group text-left">
                  <label for="start-time">Video Preview</label>
                  <img alt="workout-thumbnail" className="video-preview" src={workoutVideo}></img>
                  <div className="form-group text-left">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control description-style" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="row justify-content-center">
                    <QSwitch
                      name="approved"
                      checked={form.approved}
                      setForm={setForm}
                    />
                    <label className="approve-reject-label">Approve Workout</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="button" className="btn save-btn">Save</button>
                <button type="button" className="btn back-btn">Back</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default Form;
