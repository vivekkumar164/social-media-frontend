

import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size='55%'
        overlayBlur={3}
        overlayOpacity={0.55}
      >
       <form  className="infoForm">
        <h3>Your Information</h3>

        <div>
          <input type="text" className='InfoInput' name='firstName' placeholder='First Name' />
          <input type="text" className='InfoInput' name='lasttName' placeholder='Last Name' />
        </div>

        <div>
        <input type="text" className='InfoInput' name='worksAt' placeholder='worksAt' />
        </div>

        <div>
          <input type="text" className='InfoInput' name='livesIn' placeholder='Lives in' />
          <input type="text" className='InfoInput' name='Country' placeholder='Country' />
        </div>

        <div>
        <input type="text" className='InfoInput' name='relationshipStatus' placeholder='relationship status' />
        </div>


        <div>
          Profile Image
          <input type="file" name='profileImg' />

          Cover Image
          <input type="file" name='coverImg' />
        </div>

        <button className="button info-button">Update</button>

       </form>
      </Modal>

 
    </>
  );
}

export default ProfileModal