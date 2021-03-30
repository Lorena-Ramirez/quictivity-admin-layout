// NODE_MODULES
import React, { useState } from 'react';

// ASSETS
import workoutVideo from '../../..//assets/images/quictivity-workout-thumbnail.png';

// UTILITY
import customStyle from '../../../utils/CustomStyles';
import Type from '../../../utils/TypeArray';
import Equipment from '../../../utils/EquipmentArray';
import BodyParts from '../../../utils/BodyPartsArray';
import Phase from '../../../utils/PhaseArray';
import Difficulty from '../../../utils/DifficultyArray';

// STYLES
import "../../../styles.css";

// COMPONENTS
import Title from '../../Title';
import QInput from '../QInput';


 const CoachForm = () => {
  return (
    <>
      <div className="container-full">
        <div className="container-fluid">
        <div class="card p-3 mb-5 rounded form-card" >
          <div class="card-body text-dark">
            <Title>Edit Coach</Title>
            <div className="row">
              <div className="col-12 col-md-4">
                <form>
                  <QInput
                    id="coach-name"
                    label="Name"
                    placeholder="Name"
                  />
                  <QInput
                    id="profile-photo"
                    label="Profile Photo"
                    placeholder="Upload profile picture"
                  />
                   <QInput
                    id="avatar-image"
                    label="Avatar Image"
                    placeholder="Upload avatar image"
                  />
                   <div className="form-group text-left">
                    <label for="description">Description</label>
                    <textarea className="form-control description-style" id="description" rows="3"></textarea>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-4">
                <form>
                <QInput
                    id="booking"
                    label="Booking"
                    placeholder="Booking"
                  />
                <QInput
                    id="phone"
                    label="Phone"
                    placeholder="Phone"
                  />
                <QInput
                    id="email"
                    label="Email"
                    placeholder="email@quictivity.com"
                  />
                <QInput
                    id="url"
                    label="URL"
                    placeholder="URL"
                  />
                
                </form>
              </div>
              <div className="col-12 col-md-4">
                <QInput
                    id="alternate-phone"
                    label="Alternate Phone"
                    placeholder="Alternate Phone"
                  />
                <QInput
                    id="alternate-email"
                    label="Alternate Email"
                    placeholder="Alternate Email"
                  />
                <QInput
                    id="alternate-url"
                    label="Alternate URL"
                    placeholder="Alternate URL"
                  />
                  <QInput
                    id="scheduling-url"
                    label="Scheduling URL"
                    placeholder="Scheduling URL"
                  />
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
export default CoachForm;
