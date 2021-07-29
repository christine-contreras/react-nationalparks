export function renderPhoneNumber(phoneNumberString) {
    let phoneArray = [phoneNumberString.slice(0,3),phoneNumberString.slice(3,6), phoneNumberString.slice(6) ]
    
    return phoneArray.join('-')
  }