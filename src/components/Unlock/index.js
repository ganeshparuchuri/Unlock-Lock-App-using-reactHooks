import {useState} from 'react'
import {
  Maincontainer,
  LockUnlockContainer,
  Image,
  Paragraph,
  CustomButton,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockState] = useState(false)

  const toggleLockStatus = () => {
    setLockState(prevStatus => !prevStatus)
  }

  return (
    <Maincontainer>
      <LockUnlockContainer>
        <Image
          src={
            lockStatus
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
          }
          alt={lockStatus ? 'unlock' : 'lock'}
        />
        <Paragraph>
          {lockStatus ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Paragraph>
        <CustomButton onClick={toggleLockStatus}>
          {lockStatus ? 'Lock' : 'Unlock'}
        </CustomButton>
      </LockUnlockContainer>
    </Maincontainer>
  )
}
export default Unlock
