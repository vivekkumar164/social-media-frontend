

import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../Actions/uploadAction';
import { updateUser } from '../../Actions/userAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const [opened, setOpened] = useState(false);

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null)

  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === profileImage ? setProfileImage(img) : setCoverImage(img);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let userData = formData;
    if(profileImage){
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name",fileName);
      data.append("file",profileImage);
      userData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }

    if(coverImage){
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name",fileName);
      data.append("file",profileImage);
      userData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(param.id,userData));
    setModalOpened(false);
  }


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size='55%'
        overlayBlur={3}
        overlayOpacity={0.55}
      >
        <form className="infoForm">
          <h3>Your Information</h3>

          <div>
            <input type="text" className='InfoInput' name='firstName' placeholder='First Name' onChange={handleChange}
              value={formData.firstName}
            />
            <input type="text" className='InfoInput' name='lastName' placeholder='Last Name' onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div>
            <input type="text" className='InfoInput' name='worksAt' placeholder='worksAt' onChange={handleChange}
              value={formData.worksAt}
            />
          </div>

          <div>
            <input type="text" className='InfoInput' name='livesIn' placeholder='Lives in' onChange={handleChange}
              value={formData.livesIn}
            />
            <input type="text" className='InfoInput' name='country' placeholder='Country'
              onChange={handleChange} value={formData.country} />
          </div>

          <div>
            <input type="text" className='InfoInput' name='relationshipStatus' placeholder='relationship status'
              onChange={handleChange} value={formData.relationshipStatus} />
          </div>


          <div>
            Profile Image
            <input type="file" name='profilePicture' onChange={onImageChange} />

            Cover Image
            <input type="file" name='coverPicture' onChange={onImageChange} />
          </div>

          <button className="button info-button" onClick={handleSubmit}>Update</button>

        </form>
      </Modal>


    </>
  );
}

export default ProfileModal