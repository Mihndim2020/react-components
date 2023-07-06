import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary >I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
       <p>
        This is an important agreement that you have to read and agree to it. Kindly click on the button is you are okay with it. 
       </p> 
    </Modal>

  return (
    <div className='relative'>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
    </div>
  )
}

export default ModalPage